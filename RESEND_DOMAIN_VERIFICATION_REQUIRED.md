# CRITICAL: Resend Email Verification Required

## Issue Found

When testing the API, Resend returned this error:

```
You can only send testing emails to your own email address (visiomatixmedia@gmail.com).
To send emails to other recipients, please verify a domain at resend.com/domains,
and change the `from` address to an email using this domain.
```

This means:

- ✅ The API is working correctly
- ✅ Resend authentication is success
- ❌ You can currently only send to: **visiomatixmedia@gmail.com**
- ❌ You cannot send to: **info@visiomatix.in** (domain not verified)

---

## Solution: Verify Your Domain with Resend

### Option 1: Quick Test (Development)

Use your personal email to verify emails are being sent:

1. Change temporary test:

   ```bash
   CONTACT_EMAIL=visiomatixmedia@gmail.com
   ```

2. Test the contact form again
3. Check visiomatixmedia@gmail.com for incoming emails

### Option 2: Production Setup (Recommended)

Verify your business domain with Resend to send emails from any address:

#### Step 1: Access Resend Domain Verification

1. Go to: https://resend.com/domains
2. Click "Add New Domain"
3. Enter your domain: `visiomatix.in`

#### Step 2: Add DNS Records

Resend will provide DNS records to add. You'll need to:

1. Go to your domain registrar (GoDaddy, Namecheap, etc.)
2. Find DNS settings section
3. Add the records Resend provides:
   - SPF record
   - DKIM record
   - DMARC record (optional)

Example records format:

```
Type: TXT
Name: resend._domainkey
Value: [Resend-provided value]
```

#### Step 3: Verify Domain

1. Return to Resend dashboard
2. Click "Verify Domain"
3. Wait for Resend to confirm DNS propagation (usually 10-30 minutes)

#### Step 4: Update Environment Variables

Once domain is verified, update Render environment:

```env
RESEND_FROM_EMAIL=noreply@visiomatix.in
CONTACT_EMAIL=info@visiomatix.in
```

---

## Current Workaround (Immediate Fix)

**For immediate testing/production:**

Option A: Send contact form emails to your verified email

```env
CONTACT_EMAIL=visiomatixmedia@gmail.com
RESEND_FROM_EMAIL=onboarding@resend.dev
```

Option B: Send testing emails and forward them

- Emails arrive at visiomatixmedia@gmail.com
- Forward/reply to contact senders
- Complete domain verification later

---

## Testing Steps (Right Now)

### Step 1: Update Render Environment

Go to Render Dashboard > Your Backend Service > Settings > Environment

Add/Update:

```
CONTACT_EMAIL = visiomatixmedia@gmail.com
RESEND_FROM_EMAIL = onboarding@resend.dev
RESEND_API_KEY = re_xxxx... (your actual key)
```

Click "Save Changes" and wait for restart (1-2 minutes)

### Step 2: Test Contact Form

Submit a test form at: https://visiomatix.com/contact

Or test via curl:

```bash
curl -X POST "https://visiomatix.onrender.com/api/contact" \
  -H "Content-Type: application/json" \
  -d '{
    "name": "Test User",
    "email": "test@example.com",
    "businessName": "Test Business",
    "mobile": "9876543210",
    "service": "web-development",
    "message": "Test message"
  }'
```

### Step 3: Check Email

Check inbox at **visiomatixmedia@gmail.com** for:

- Subject: "New Lead from Test User – Visiomatix Media"
- Contact details from the form
- Reply-to address showing the user's email

---

## Email Flow With Current Setup

```
Contact Form Submission
           ↓
Frontend sends to /api/contact
           ↓
Backend validates & formats
           ↓
Resend API sends email:
   FROM: onboarding@resend.dev (Resend test domain)
   TO: visiomatixmedia@gmail.com (your verified email)
   REPLY-TO: user@example.com (user's email)
           ↓
Email arrives at visiomatixmedia@gmail.com
           ↓
You receive and manually respond to user
```

---

## Timeline to Full Resolution

### Immediate (Next 1 hour)

- [ ] Add `RESEND_API_KEY` to Render if not already done
- [ ] Update `CONTACT_EMAIL` to `visiomatixmedia@gmail.com`
- [ ] Restart Render service
- [ ] Test contact form
- [ ] Verify emails arrive

### Short Term (Next 24-48 hours)

- [ ] Choose domain to verify (info@visiomatix.in or marketing@visiomatix.in)
- [ ] Go to resend.com/domains
- [ ] Add and verify your domain
- [ ] Update Render environment with verified domain email

### Long Term

- [ ] All emails working from your own domain
- [ ] Professional email appearance
- [ ] Better deliverability rates
- [ ] No Resend domain exposure

---

## Subscriber Emails (Blog/Career Notifications)

The same issue applies to subscriber notifications. Subscribers will receive emails from:

- **To:** subscriber's email address (works with any email)
- **From:** onboarding@resend.dev (currently)
- **Reply-To:** info@visiomatix.in (from env variable)

To improve this, verify your domain, then update:

```
RESEND_FROM_EMAIL=noreply@visiomatix.in
```

---

## FAQ

**Q: Why can't I send to info@visiomatix.in right now?**
A: Resend requires domain verification for security. Free tier can only send to verified owner email initially.

**Q: Can I use info@visiomatix.in as the recipient?**
A: Not yet with current Resend configuration. Use your personal verified email (visiomatixmedia@gmail.com) temporarily.

**Q: How long does domain verification take?**
A: Usually 10-30 minutes after DNS records are added.

**Q: Will contact form emails be lost?**
A: No, they'll arrive at visiomatixmedia@gmail.com instead of info@visiomatix.in temporarily.

**Q: Do subscribers need action?**
A: No, they'll work fine. Emails will arrive in their inbox from onboarding@resend.dev (unless you verify domain).

**Q: Can I use a subdomain like noreply.visiomatix.in?**
A: Yes! That's recommended for production.

---

## Next Steps Summary

1. **Immediate (required):**
   - Set `CONTACT_EMAIL=visiomatixmedia@gmail.com` in Render
   - Set all other required environment variables
   - Test contact form

2. **Soon (recommended):**
   - Verify domain at resend.com/domains
   - Update Render environment with verified domain email

3. **Follow-up:**
   - Monitor Resend dashboard for email activity
   - Check email templates look professional
   - Ensure good deliverability

---

**Need Help?**

- Resend Docs: https://resend.com/docs/get-started/introduction
- Verify Domain Guide: https://resend.com/docs/concepts/domains
- Render Docs: https://render.com/docs

**Status:** ✅ API Working | ⏳ Needs Domain Verification for Production
