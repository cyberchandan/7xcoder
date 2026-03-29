# Contact Form Email Setup Guide - Resend Integration

## Overview

The contact form has been successfully configured to send emails to **info@visiomatix.in** using **Resend** as the email service provider.

## Files Created/Modified

### New Files Created:

1. **Contact-backend/controllers/contactController.js** - Handles contact form submissions and sends emails via Resend
2. **Contact-backend/routes/contactRoutes.js** - Defines the contact API route

### Files Modified:

1. **Contact-backend/index.js** - Updated to:
   - Remove old inline contact endpoint
   - Import contactRoutes
   - Mount contact routes at `/api/contact`
   - Add environment variable validation for Resend API key

## How It Works

1. **Frontend (Contact Form)**: Located at `src/components/Home/HomePage8/Contact.jsx`
   - Collects user information (name, email, business name, phone, service, message)
   - Validates form data locally
   - Sends POST request to `https://visiomatix.onrender.com/api/contact`

2. **Backend (API Endpoint)**: `/api/contact` (POST)
   - Validates all required fields
   - Validates email and phone number formats
   - Sends formatted email to info@visiomatix.in via Resend
   - Includes reply-to address so you can easily respond to the user
   - Returns success/error response to frontend

3. **Email Template**: Professional HTML-formatted email with:
   - Sender's name and email
   - Business name
   - Phone number
   - Service of interest
   - Full message
   - Reply-to capability

## Required Environment Variables

Add the following environment variables to your `.env` file in the `Contact-backend` directory:

```env
# Resend API Configuration (Required)
RESEND_API_KEY=your_resend_api_key_here

# Email Configuration
CONTACT_EMAIL=info@visiomatix.in
RESEND_FROM_EMAIL=noreply@yourdomain.com  # Optional: defaults to onboarding@resend.dev

# Other existing variables...
MONGODB_URI=your_mongodb_connection_string
ADMIN_EMAIL=your_admin_email
ADMIN_PASSWORD=your_admin_password
PORT=5000
```

## Getting Resend API Key

1. Go to [Resend.com](https://resend.com)
2. Sign up for a free account
3. Navigate to API Keys section
4. Copy your API key
5. Add it to your `.env` file as `RESEND_API_KEY`

## Email From Address

By default, emails are sent from `onboarding@resend.dev` (Resend's test domain).

**For production**, you should:

1. Verify your own domain with Resend
2. Set `RESEND_FROM_EMAIL` in your .env to your verified domain email (e.g., `noreply@visiomatix.in`)

## Testing the Integration

1. Start the backend server:

   ```bash
   cd Contact-backend
   npm install  # if you haven't already
   npm run start
   ```

2. Fill out the contact form at the contact page
3. Submit the form
4. Check info@visiomatix.in for the received email

## Error Handling

If emails aren't being sent, check:

1. `RESEND_API_KEY` is set correctly in `.env`
2. Backend server is running on the correct port
3. CONTACT_EMAIL environment variable is set
4. Browser console for any submission errors
5. Backend console logs for detailed error messages

## Email Features

- **Validation**: Checks name, email, phone number (10 digits), and message
- **Formatting**: Professional HTML email template
- **Reply-to**: Automatically sets reply-to address to the user's email
- **Error Handling**: Returns meaningful error messages if validation fails
- **Logging**: Logs all email send attempts for debugging

## API Response Examples

### Success Response (200 OK)

```json
{
  "success": true,
  "message": "Your message has been sent successfully!",
  "data": {
    "id": "email_xxxxx"
  }
}
```

### Error Response (400/500)

```json
{
  "success": false,
  "error": "Description of what went wrong"
}
```

---

**Setup Date**: March 16, 2026
**Integration**: Resend Email Service
**Recipient**: info@visiomatix.in
