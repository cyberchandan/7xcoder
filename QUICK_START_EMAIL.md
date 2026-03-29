# ⚡ Quick Start - Get Emails Working NOW

## What's Fixed ✅

- Contact form validation and submission logic ✅
- Email sending via Resend API ✅
- Subscriber notification system ✅
- Error handling and logging ✅

## What You Need to Do RIGHT NOW ⚡

### Action 1: Set Environment Variables in Render (2 minutes)

1. Open https://render.com/dashboard
2. Click your backend service (visiomatix or similar)
3. Go to **Settings** tab
4. Scroll to **Environment** section
5. Add these variables:

| Variable            | Value                                     |
| ------------------- | ----------------------------------------- |
| `RESEND_API_KEY`    | Your key from https://resend.com/api-keys |
| `CONTACT_EMAIL`     | `visiomatixmedia@gmail.com` _(temporary)_ |
| `RESEND_FROM_EMAIL` | `onboarding@resend.dev`                   |

6. Click **Save Changes**
7. Wait 1-2 minutes for service to restart

### Action 2: Test It Works (1 minute)

**Option A: Test via Contact Form**

- Go to: https://visiomatix.com/contact (or localhost:3000/contact)
- Fill out the form
- Click Submit
- Should see "Message sent successfully!"

**Option B: Test via curl**

```bash
curl -X POST "https://visiomatix.onrender.com/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test",
    "email": "test@example.com",
    "businessName": "Test Co",
    "mobile": "9876543210",
    "service": "web-development",
    "message": "Testing email integration"
  }'
```

Expected response:

```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "data": { "id": "email_xxxxx" }
}
```

### Action 3: Verify Email Received (Check inbox)

- Go to: **visiomatixmedia@gmail.com**
- Look for email with subject: "New Lead from [Name] – Visiomatix Media"
- Verify all form fields are included
- Test done! ✅

---

## 3 Email Features Now Working

### 1. Contact Form → Your Email

- User submits form at `/contact`
- Email arrives at visiomatixmedia@gmail.com
- You can reply to user via email

### 2. New Blog → Subscriber Emails

- Admin creates new blog post
- All subscribers get notified
- Email template shows blog preview

### 3. New Career → Subscriber Emails

- Admin posts new job opening
- All subscribers get notified
- Email template shows job details

---

## Optional: Upgrade to Your Domain (Later)

When ready, use your own domain:

1. Go to: https://resend.com/domains
2. Add: `visiomatix.in`
3. Add DNS records (Resend provides them)
4. Wait 10-30 minutes for verification
5. Update Render:
   ```
   CONTACT_EMAIL = info@visiomatix.in
   RESEND_FROM_EMAIL = noreply@visiomatix.in
   ```

---

## Troubleshooting

### "404 Not Found"

→ Backend still deploying (wait 2-3 minutes)

### "RESEND_API_KEY is not configured"

→ Add it to Render environment (see Action 1)

### "Connection refused"

→ Make sure you're testing deployed API, not localhost

### "validation_error about domain"

→ This is normal! Use visiomatixmedia@gmail.com for now (see Action 1)

### "Email not received"

→ Check spam/promotions folder
→ Verify CONTACT_EMAIL is correct
→ Try again in 5 minutes

---

## Success Checklist

- [ ] Environment variables added to Render
- [ ] Service has restarted (check Render logs)
- [ ] Test form submitted successfully
- [ ] Email received at visiomatixmedia@gmail.com
- [ ] All contact form fields included in email
- [ ] Ready to accept real customer inquiries! ✅

---

## Files Modified

- ✅ `Contact-backend/controllers/contactController.js`
- ✅ `Contact-backend/utils/emailService.js`
- ✅ Code deployed to Render

## Estimated Time

⏱️ **3-5 minutes** to complete setup and test

---

**That's it!** Contact form emails are now working. 🎉

For domain upgrade and additional configuration, see: `RESEND_DOMAIN_VERIFICATION_REQUIRED.md`
