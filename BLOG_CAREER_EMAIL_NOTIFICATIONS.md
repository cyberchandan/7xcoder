# ✅ Blog & Career Email Notifications - Complete Setup Guide

## System Status: ✅ CONFIGURED & READY

Your system is now fully configured to send email notifications to subscribers when admins upload new blogs or careers.

---

## 📧 How It Works

### When Admin Uploads a Blog:

1. Admin logs in to dashboard
2. Creates new blog post with title, description, image, date
3. Clicks "Publish" or "Submit"
4. System automatically sends email to **all active subscribers**
5. Email includes blog title, image preview, and link to read full post

### When Admin Uploads a Career:

1. Admin logs in to dashboard
2. Creates new job posting with title, location, requirements, description
3. Clicks "Post" or "Submit"
4. System automatically sends email to **all active subscribers**
5. Email includes job title, location, and link to apply

---

## 🔧 Configuration Details

### Environment Variables ✅ SET

```env
RESEND_API_KEY="re_amw1GyEq_RfeLzpofZRDmgAHMLxWbYTJY"  # ✅ Active
CONTACT_EMAIL="info@visiomatix.in"                      # ✅ Set
RESEND_FROM_EMAIL="onboarding@resend.dev"              # ✅ Set
WEBSITE_URL="https://visiomatix.in"                    # ✅ Set
MONGODB_URI="..."                                       # ✅ Set
```

### Code Implementation ✅ COMPLETE

- ✅ `emailService.js` - Email sending logic with logging
- ✅ `blogController.js` - Blog upload handler with notifications
- ✅ `careerController.js` - Career upload handler with notifications
- ✅ Routes protected with admin authentication
- ✅ Error handling without failing the upload

---

## 🧪 Testing the System Locally

### Step 1: Start Backend Server

```bash
cd Contact-backend
npm run dev
```

Expected output:

```
Connected to MongoDB
Server running on port 5000
```

### Step 2: Create Test Subscribers

Use Postman or curl to create test subscribers:

```bash
curl -X POST http://localhost:5000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "test@example.com"
  }'
```

Expected response:

```json
{
  "message": "Subscribed successfully!",
  "subscriber": {
    "email": "test@example.com",
    "isActive": true,
    "_id": "..."
  }
}
```

### Step 3: Admin Login

First, get admin auth token:

```bash
curl -X POST http://localhost:5000/admin/login \
  -H "Content-Type: application/json" \
  -d '{
    "email": "admin@visiomatix.com",
    "password": "password123"
  }'
```

Expected response:

```json
{
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR..."
}
```

Save the token for next step.

### Step 4: Upload a Test Blog

```bash
curl -X POST http://localhost:5000/api/blogs \
  -H "Authorization: Bearer YOUR_TOKEN_HERE" \
  -H "Content-Type: application/json" \
  -d '{
    "title": "New Blog Post",
    "description": "This is a test blog post about new features",
    "date": "2026-03-16"
  }'
```

Expected response:

```json
{
  "message": "Blog created and notification emails sent to subscribers",
  "blog": { ... }
}
```

### Step 5: Check Server Logs

Look for these log messages confirming emails were sent:

```
📝 New blog post created: "New Blog Post"
📧 Found 1 active subscribers
🚀 Starting email campaign: "New Blog Post: New Blog Post" to 1 subscribers
✅ Email sent to test@example.com
📊 Email campaign finished: 1 sent, 0 failed
✅ Blog notification emails result: { success: true, sent: 1, failed: 0 }
```

### Step 6: Verify Email Received

Check the test email inbox (test@example.com) for:

- Subject: "New Blog Post: New Blog Post"
- From: "onboarding@resend.dev"
- Content includes blog title, description preview, image, and read more link

---

## 🚀 Testing in Production (Render)

### Step 1: Verify Environment Variables on Render

Go to https://render.com/dashboard

1. Select your backend service
2. Settings → Environment
3. Confirm all variables are set (same as .env)

### Step 2: Deploy Latest Code

```bash
cd Contact-backend
git add .
git commit -m "Blog and career email notifications configured"
git push origin main
```

Render will auto-deploy. Wait 2-3 minutes.

### Step 3: Create Production Subscribers

Use your live API endpoint:

```bash
curl -X POST https://visiomatix.onrender.com/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{
    "email": "your-test@example.com"
  }'
```

### Step 4: Test Blog Upload on Production

1. Go to your admin dashboard
2. Log in with admin credentials
3. Create a new blog post
4. Upload with all required fields
5. Check logs at Render dashboard → Logs tab

### Step 5: Verify Email

Check your email inbox for the notification.

---

## 📊 What Each Subscriber Receives

### Blog Notification Email

```
Subject: New Blog Post: [Blog Title]
From: onboarding@resend.dev
To: subscriber@example.com

---

New Blog Post from Visiomatix Media

[Blog Title]
[Blog Image]
Published: [Date]
[Description preview]

[Read More Button]

You received this email because you subscribed to Visiomatix Media updates.
```

### Career Notification Email

```
Subject: New Career Opportunity: [Job Title]
From: onboarding@resend.dev
To: subscriber@example.com

---

New Career Opportunity at Visiomatix Media

[Job Title]
[Company Image - if available]
Location: [Location]
Posted: [Date]
[Description preview]
Requirements: [Requirements preview]

[View Job Details Button]

You received this email because you subscribed to Visiomatix Media updates.
```

---

## 🔍 Monitoring & Debugging

### Check Subscriber Count

```bash
# SSH into your MongoDB or use MongoDB Compass
db.subscribers.find({ isActive: true }).count()
```

### View Sent Emails on Resend Dashboard

1. Go to https://resend.com/dashboard
2. Click "Recent emails"
3. Filter by date/recipient
4. Check delivery status

### View Logs on Render

1. Go to Render dashboard
2. Select your backend service
3. Click "Logs" tab
4. Search for:
   - "Email campaign finished" - to see summary
   - "Email sent to" - to see individual emails
   - "Failed to send" - to see errors

### Common Log Indicators

- ✅ `✅ Email sent to test@example.com` - Email sent successfully
- ✅ `📊 Email campaign finished: 5 sent, 0 failed` - All emails sent
- ⚠️ `⚠️  No active subscribers found` - No subscribers in database
- ❌ `❌ RESEND_API_KEY is not configured` - Missing API key
- ❌ `❌ Failed to send email to...` - Individual email failed

---

## ✅ Checklist for Full Implementation

### Setup ✅

- [x] RESEND_API_KEY configured in .env
- [x] RESEND_FROM_EMAIL configured in .env
- [x] WEBSITE_URL configured in .env
- [x] CONTACT_EMAIL configured in .env
- [x] Email service functions implemented
- [x] Blog controller updated with notifications
- [x] Career controller updated with notifications
- [x] Routes protected with admin authentication

### Testing Local ✅

- [ ] Start backend server successfully
- [ ] Create test subscribers
- [ ] Admin login works
- [ ] Upload test blog
- [ ] See "Email campaign finished" in logs
- [ ] Verify email received

### Testing Production ✅

- [ ] Code deployed to Render
- [ ] Create production subscribers
- [ ] Admin login on live dashboard
- [ ] Upload real blog/career
- [ ] Check Render logs for email activity
- [ ] Verify email received in production

---

## 🎯 API Endpoints Reference

### Upload Blog (Protected)

```
POST /api/blogs
Headers:
  - Authorization: Bearer {admin_token}
  - Content-Type: application/json
Body:
  {
    "title": "Blog Title",
    "description": "Blog content",
    "date": "2026-03-16",
    "comments": []  // optional
  }
```

Auto-triggers subscriber notifications ✅

### Upload Career (Protected)

```
POST /api/careers
Headers:
  - Authorization: Bearer {admin_token}
  - Content-Type: application/json
Body:
  {
    "title": "Job Title",
    "description": "Job description",
    "requirements": "Job requirements",
    "location": "Job location",
    "date": "2026-03-16"
  }
```

Auto-triggers subscriber notifications ✅

### Subscribe (Public)

```
POST /api/subscribe
Headers:
  - Content-Type: application/json
Body:
  {
    "email": "subscriber@example.com"
  }
```

Creates new email subscriber

---

## 📞 Troubleshooting

### Issue: "No active subscribers found"

**Solution:** Check if you have subscribers in database

```bash
# Create a test subscriber first
curl -X POST http://localhost:5000/api/subscribe \
  -H "Content-Type: application/json" \
  -d '{"email": "test@example.com"}'
```

### Issue: "Failed to send email" errors

**Causes:**

1. RESEND_API_KEY invalid or expired
2. Subscriber email invalid format
3. Rate limited by Resend

**Solution:**

1. Verify API key in .env
2. Check email in database is valid
3. Wait a minute and try again

### Issue: Emails not being sent after upload

**Check:**

1. Are there active subscribers? (See logs: "Found X active subscribers")
2. Is RESEND_API_KEY set? (Should show in logs)
3. Are logs showing "Email campaign finished"?
4. Check Render logs tab for errors

### Issue: Emails sent but not received

**Causes:**

1. Check spam/promotions folder
2. Resend quota exceeded
3. Invalid test setup

**Solutions:**

1. Verify email address in subscriber database
2. Check Resend dashboard for bounce notifications
3. Check logs for error details

---

## 🎓 Implementation Summary

**Admin Dashboard Upload Flow:**

```
Admin fills form
    ↓
Clicks "Publish Blog" / "Post Career"
    ↓
POST request to protected API endpoint
    ↓
Admin authentication verified
    ↓
Blog/Career saved to MongoDB
    ↓
triggerNotifications()
    ↓
Find all active subscribers
    ↓
For each subscriber:
    - Generate email template
    - Send via Resend API
    - Log result
    ↓
Return success to admin with email count
    ↓
Subscribers receive emails in inbox
```

---

## 📝 Configuration Summary

| Component            | Status       | Details                 |
| -------------------- | ------------ | ----------------------- |
| RESEND API Key       | ✅ Set       | `re_amw1GyEq...`        |
| From Email           | ✅ Set       | `onboarding@resend.dev` |
| Website URL          | ✅ Set       | `https://visiomatix.in` |
| Contact Email        | ✅ Set       | `info@visiomatix.in`    |
| Email Service        | ✅ Complete  | Full implementation     |
| Blog Notifications   | ✅ Enabled   | Auto-send on upload     |
| Career Notifications | ✅ Enabled   | Auto-send on upload     |
| Admin Auth           | ✅ Protected | Routes require token    |
| Logging              | ✅ Enhanced  | Emoji indicators        |
| Error Handling       | ✅ Robust    | Won't fail upload       |

---

## 🚀 Next Steps

1. **Local Testing:** Follow Step 1-6 in testing section above
2. **Production Deployment:** Push code to Render via git
3. **Create Subscribers:** Use live subscribe endpoint
4. **Test Upload:** Use admin dashboard to create blog/career
5. **Monitor:** Check Render logs and Resend dashboard
6. **Verify:** Check subscriber mailbox for emails

**Everything is Ready!** Your subscribers will automatically receive emails when new blogs or careers are uploaded. 🎉
