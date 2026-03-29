# Quick Reference Guide

## 📋 Setup Checklist

- [ ] Copy `.env.example` to `.env` in `Contact-backend/`
- [ ] Fill in `.env` with your values:
  - [ ] `RESEND_API_KEY` - from https://resend.com
  - [ ] `CONTACT_EMAIL` - your email address
  - [ ] `WEBSITE_URL` - e.g., http://localhost:3000
  - [ ] `MONGODB_URI` - MongoDB connection string
- [ ] MongoDB is running
- [ ] Backend dependencies installed: `npm install` in `Contact-backend/`
- [ ] Start backend: `npm run dev`

## 🧪 Quick Test Commands

### Test 1: Subscribe via API

```bash
curl -X POST http://localhost:5000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

Expected: Success response with subscriber data

### Test 2: Try Duplicate (Should error)

```bash
curl -X POST http://localhost:5000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

Expected: "This email is already subscribed"

### Test 3: Invalid Email (Should error)

```bash
curl -X POST http://localhost:5000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"invalid-email"}'
```

Expected: "Please enter a valid email address"

### Test 4: Create Blog (Triggers Emails)

```bash
# Login first
curl -X POST http://localhost:5000/admin/login \
  -H "Content-Type: application/json" \
  -d '{"email":"admin@visiomatix.com","password":"your_password"}' \
  | jq '.token'

# Use token to create blog
curl -X POST http://localhost:5000/api/blogs \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: multipart/form-data" \
  -F "title=Test Blog" \
  -F "description=Test description" \
  -F "date=2026-03-12"
```

Check backend console for: "Blog notification emails sent"

### Test 5: View Subscribers (Admin)

```bash
curl -X GET http://localhost:5000/api/subscribe \
  -H "Authorization: Bearer YOUR_TOKEN"
```

Should show all active subscribers

### Test 6: Unsubscribe

```bash
curl -X POST http://localhost:5000/api/subscribe/unsubscribe \
  -H "Content-Type: application/json" \
  -d '{"email":"test@example.com"}'
```

Expected: "You have been unsubscribed successfully"

## 🌐 Frontend Testing

1. **Go to Blog or Career page** - scroll to bottom
2. **Find subscribe section** - "Stay ahead of the curve"
3. **Enter email** - test@example.com
4. **Click Subscribe**
5. **Expected** - Success popup, email cleared
6. **Try again** - Should show "already subscribed" error

## 📊 Check What's In Database

```bash
# Connect to MongoDB
mongosh mongodb://localhost:27017/visiomatix

# See all subscribers
db.subscribers.find()

# Count subscribers
db.subscribers.countDocuments()

# Find specific subscriber
db.subscribers.findOne({email: "test@example.com"})

# See all blogs
db.blogs.find()

# See all careers
db.careers.find()
```

## 🐛 Debug Checklist

If something doesn't work, check:

1. **Backend server running?**
   - Should see "Server running on port 5000"
   - Should see "Connected to MongoDB"

2. **Environment variables set?**
   - Check `.env` file exists in `Contact-backend/`
   - Check all required variables are filled in

3. **API responding?**
   - Try: `curl -X GET http://localhost:5000/api/blogs`
   - Should return something

4. **Subscribe endpoint reachable?**
   - Try subscribe curl command above
   - Should give response (success or error)

5. **Emails not sending?**
   - Check console for error messages
   - Verify `RESEND_API_KEY` is correct
   - Check `CONTACT_EMAIL` is valid format

6. **Frontend not working?**
   - Open browser DevTools (F12)
   - Go to Network tab
   - Try to subscribe and watch the request
   - Check if request goes to `/api/subscribe`
   - Check response status and message

## 📁 Key Files to Remember

| Task                 | File                                                 |
| -------------------- | ---------------------------------------------------- |
| Email content        | `Contact-backend/utils/emailService.js`              |
| Subscribe logic      | `Contact-backend/controllers/subscribeController.js` |
| API routes           | `Contact-backend/routes/subscribeRoutes.js`          |
| Main server          | `Contact-backend/index.js`                           |
| Blog notifications   | `Contact-backend/controllers/blogController.js`      |
| Career notifications | `Contact-backend/controllers/careerController.js`    |
| Subscribe form       | `src/components/Home/HomePage9/index.jsx`            |
| Database model       | `Contact-backend/models/Subscriber.js`               |

## 🔄 Full Workflow Test

1. Subscribe with: test1@example.com
2. Subscribe with: test2@example.com
3. Check database: `db.subscribers.find()`
4. Create blog titled "Welcome"
5. Check console for emails sent
6. Subscribe again with: test1@example.com (should error: already subscribed)
7. Unsubscribe test1@example.com
8. Subscribe test1@example.com again (should work: was inactive)
9. Create career "Software Engineer"
10. Check console for emails sent to both test1 and test2
11. Verify in DevTools Network tab that requests are going through

## 📞 Common Status Codes

| Code | Meaning                                     |
| ---- | ------------------------------------------- |
| 201  | Successfully subscribed                     |
| 200  | Success (unsubscribe, get subscribers)      |
| 400  | Bad request (email required, invalid email) |
| 409  | Conflict (already subscribed)               |
| 404  | Not found (unsubscribe unknown email)       |
| 500  | Server error                                |

## ✨ Expected Behavior

- New subscriber: 201 + "Subscription successful"
- Duplicate subscriber: 409 + "This email is already subscribed"
- Invalid email: 400 + "Please enter a valid email address"
- Empty email: 400 + "Email is required"
- Blog created: 201 + message + "notification emails sent to subscribers"
- Career posted: 201 + message + "notification emails sent to subscribers"
- Unsubscribe: 200 + "You have been unsubscribed successfully"

## 🚀 Performance Tips

- With 100s of subscribers? All good, 100ms delays prevent rate limiting
- Email in background? Yes, non-blocking - won't delay blog creation
- Database slow? Add index on email field

## 📚 Documentation Files

- `EMAIL_SUBSCRIPTION_SETUP.md` - Detailed setup and testing
- `IMPLEMENTATION_COMPLETE.md` - Overview of what was built
- `QUICK_REFERENCE_GUIDE.md` - This file

---

**Everything is ready!** Start with the setup checklist, then try the quick test commands.
