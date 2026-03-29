# Email Integration - Setup & Troubleshooting Guide

## Issues Fixed

### 1. ✅ Subscriber Email Broadcasting (Blogs & Careers)

**Problem:** Subscribers weren't receiving emails when new blogs or careers were posted.  
**Root Cause:** The "from" email was incorrectly set to `CONTACT_EMAIL` instead of a verified Resend email.  
**Fix Applied:** Updated `emailService.js` to use `RESEND_FROM_EMAIL` with fallback to `onboarding@resend.dev`

### 2. ✅ Contact Form Email Submission

**Problem:** Contact form submissions weren't reaching info@visiomatix.in.  
**Root Cause:** Missing or unconfigured `RESEND_API_KEY` in Render environment.  
**Fix Applied:** Added API key validation and better error handling in `contactController.js`

---

## Required Environment Variables

All of these must be set in your Render dashboard under Settings > Environment:

```env
# Resend Configuration (CRITICAL - Without this, NO emails will send)
RESEND_API_KEY=re_xxxxxxxxxxxx...
RESEND_FROM_EMAIL=noreply@visiomatix.in  # Must be verified with Resend
# Or use default: onboarding@resend.dev (for testing only)

# Contact & Subscriber Configuration
CONTACT_EMAIL=info@visiomatix.in
WEBSITE_URL=https://visiomatix.com

# Database Configuration
MONGODB_URI=your_mongodb_connection_string

# Admin Configuration
ADMIN_EMAIL=your_admin_email@gmail.com
ADMIN_PASSWORD=your_secure_password

# Cloudinary Configuration (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# Port
PORT=5000
```

---

## Step-by-Step Setup

### Step 1: Get Resend API Key

1. Go to [resend.com](https://resend.com)
2. Sign up / Log in
3. Navigate to API Keys section
4. Copy the API key (starts with `re_`)
5. Example: `re_xxxxxxxxxxxxxxxxxx`

### Step 2: Configure Resend in Render Dashboard

1. Go to [render.com](https://render.com)
2. Select your backend service
3. Go to Settings > Environment
4. Add/Update the following variables:

| Variable            | Value                    | Source                |
| ------------------- | ------------------------ | --------------------- |
| `RESEND_API_KEY`    | `re_xxxx...`             | From Resend dashboard |
| `RESEND_FROM_EMAIL` | `onboarding@resend.dev`  | Default (for testing) |
| `CONTACT_EMAIL`     | `info@visiomatix.in`     | Your email            |
| `WEBSITE_URL`       | `https://visiomatix.com` | Your website domain   |

### Step 3: Deploy Updated Code

```bash
cd /path/to/project

# Stage all changes
git add .

# Commit with descriptive message
git commit -m "Fix: Email service configuration for subscribers and contact form

- Fix 'from' email address in emailService.js
- Add RESEND_API_KEY validation in contactController.js
- Improve error handling for email sending
- Support custom RESEND_FROM_EMAIL configuration"

# Push to trigger auto-deployment on Render
git push origin main
```

### Step 4: Verify Deployment

Wait 2-3 minutes for Render to rebuild and deploy, then check:

1. **Render Logs:**
   - Go to Render dashboard
   - Select your backend service
   - Check Logs tab for any errors
   - Should see: `"RESEND_API_KEY environment variable is properly set"`

2. **Test Contact Form:**
   ```bash
   curl -X POST "https://visiomatix.onrender.com/api/contact" \
     -H "Content-Type: application/json" \
     -d '{
       "name": "Test User",
       "email": "test@example.com",
       "businessName": "Test Business",
       "mobile": "9999999999",
       "service": "web-development",
       "message": "This is a test message"
     }'
   ```
   Expected response (HTTP 200):
   ```json
   {
     "success": true,
     "message": "Your message has been sent successfully!",
     "data": { "id": "email_xxxxx" }
   }
   ```

---

## Email Flow Diagram

### Contact Form Submission Flow

```
User fills contact form
         ↓
Frontend validates (name, email, phone, message, CAPTCHA)
         ↓
POST to https://visiomatix.onrender.com/api/contact
         ↓
Backend validates fields again
         ↓
Check RESEND_API_KEY ✓
         ↓
Format HTML email
         ↓
Call Resend API with:
  - from: RESEND_FROM_EMAIL (onboarding@resend.dev)
  - to: info@visiomatix.in
  - subject: "New Lead from [Name] – Visiomatix Media"
         ↓
Email sent to info@visiomatix.in
         ↓
Return success response to frontend
         ↓
Show "Message sent successfully!" to user
```

### Blog/Career Posting Flow

```
Admin creates new blog or career post
         ↓
Post saved to MongoDB
         ↓
Trigger sendEmailToSubscribers()
         ↓
Check RESEND_API_KEY ✓
         ↓
Fetch all active subscribers from database
         ↓
For each subscriber:
  - Format email template
  - Call Resend API with:
    - from: RESEND_FROM_EMAIL (onboarding@resend.dev)
    - to: subscriber.email
    - subject: "New Blog Post: [Title]" or "New Career: [Title]"
  - Add 100ms delay between emails (prevent rate limiting)
         ↓
Return count of sent/failed emails
         ↓
Log results to console
```

---

## Troubleshooting

### Issue: "RESEND_API_KEY is not configured"

**Solution:**

1. Go to Render Dashboard → Backend Service
2. Settings → Environment
3. Add `RESEND_API_KEY=re_xxxxx...`
4. Redeploy service
5. Check logs: `git log --oneline | head -5`

### Issue: Contact Form Returns 404

**Solution:**

1. Code hasn't been deployed yet
2. Execute: `git push origin main`
3. Wait 2-3 minutes for deployment
4. Check Render logs for errors

### Issue: Emails Not Being Sent

**Solution:**

1. Verify `RESEND_API_KEY` is set in Render
2. Check Render logs for error messages
3. Verify recipient email is correct in `CONTACT_EMAIL`
4. Test manually:
   ```bash
   curl -X POST "https://visiomatix.onrender.com/api/contact" \
     -H "Content-Type: application/json" \
     -d '{"name":"Test","email":"test@test.com","message":"test"}'
   ```
5. Look for error in response

### Issue: "No active subscribers found" in Logs

**Solution:**

1. This is normal if no one has subscribed yet
2. Subscribe a test email first
3. Then create a new blog/career to trigger emails
4. Check `CONTACT_EMAIL` inbox for errors

### Issue: Emails Sent but Not Received

**Possible Causes:**

1. **Wrong "from" address:** Check `RESEND_FROM_EMAIL` is verified
2. **Spam folder:** Check spam/junk folder
3. **Bounce:** Check Resend dashboard for bounce notifications
4. **Invalid recipient:** Verify `CONTACT_EMAIL` is correct
5. **Rate limited:** Resend limits requests; check logs for rate limit errors

---

## Testing the Integration

### Test 1: Contact Form

```bash
curl -X POST "https://visiomatix.onrender.com/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "John Doe",
    "email": "sender@example.com",
    "businessName": "Acme Corp",
    "mobile": "9876543210",
    "service": "web-development",
    "message": "I am interested in your services"
  }'
```

**Expected Response (Success):**

```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "data": { "id": "email_abc123xyz" }
}
```

**Check:**

- Email arrives at info@visiomatix.in
- Reply-to field shows sender@example.com
- Subject includes "John Doe – Visiomatix Media"

### Test 2: Subscribe & Create Blog

1. Subscribe test email via frontend
2. Go to admin panel
3. Create new blog post
4. Check: Do all subscribers receive the blog notification email?

### Test 3: Subscribe & Create Career

1. Subscribe test email via frontend
2. Go to admin panel
3. Create new career posting
4. Check: Do all subscribers receive the career notification email?

---

## Monitoring & Logging

### View Resend Activity

1. Go to [resend.com](https://resend.com)
2. Dashboard shows recent emails sent
3. Check for bounces, failures, or rate limiting

### View Render Logs

```bash
# SSH into Render (if available)
# Or use Render Dashboard > Logs tab

# Look for these log messages:
# ✓ "Email sent to [email]" - Email sent successfully
# ✓ "Email campaign finished: X sent, Y failed" - Batch complete
# ✗ "Failed to send email to [email]" - Individual failure
# ✗ "RESEND_API_KEY is not configured" - Missing API key
```

### Database Check

```bash
# Verify subscribers in MongoDB
# (Use MongoDB compass or MongoDB Atlas)

# Query: Subscriber.find({ isActive: true })
# Should show list of subscribed emails
```

---

## Summary of Changes

### Files Modified

1. **Contact-backend/utils/emailService.js**
   - Changed `from: process.env.CONTACT_EMAIL` → `from: process.env.RESEND_FROM_EMAIL || "onboarding@resend.dev"`
   - Added API key validation check
   - Better error messages

2. **Contact-backend/controllers/contactController.js**
   - Added `RESEND_API_KEY` validation
   - Better error handling with user-friendly messages
   - Consistent "from" email handling

### No Changes Needed (Already Correct)

- blogController.js - Already calls sendEmailToSubscribers
- careerController.js - Already calls sendEmailToSubscribers
- Frontend Contact.jsx - Already properly configured

---

## Next Steps

1. ✅ **Add environment variables to Render** (CRITICAL)
2. ✅ **Deploy code:** `git push origin main`
3. ✅ **Wait for deployment** (2-3 minutes)
4. ✅ **Test contact form** using curl or form submission
5. ✅ **Monitor Resend dashboard** for email delivery
6. ✅ **Monitor Render logs** for errors

Once complete, all three email flows will work:

- Contact form → info@visiomatix.in
- Blog posted → All subscribers
- Career posted → All subscribers

---

**Setup Date:** March 16, 2026  
**Status:** Ready for configuration  
**Next Action:** Add environment variables to Render dashboard
