import express from 'express';
import nodemailer from 'nodemailer';
import Contact from '../models/Contact.js';

const router = express.Router();

router.post('/', async (req, res) => {
  // 1. Immediately acknowledge the lead to the client for lightning fast (milliseconds) UI response
  res.status(200).json({ 
    success: true, 
    message: 'Message received! We will get back to you soon.' 
  });

  // 2. Process everything else in the background so the user doesn't wait
  try {
    const { name, email, businessName, mobile, service, message } = req.body;

    // Background Database Save
    const saveToDb = async () => {
      try {
        const newContact = new Contact({ name, email, businessName, mobile, service, message });
        await newContact.save();
        console.log('✅ Background: Lead saved to database');
      } catch (dbError) {
        console.error('⚠️ Background: Database save failed:', dbError.message);
      }
    };

    // Background Email Send
    const sendEmail = async () => {
      if (process.env.EMAIL_PASS && process.env.EMAIL_USER) {
        try {
          const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
              user: process.env.EMAIL_USER,
              pass: process.env.EMAIL_PASS
            }
          });

          const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER,
            replyTo: email,
            subject: `New Lead: ${name} from ${businessName || 'Website'} - 7xcoder`,
            text: `
              New contact form submission!
              
              Name: ${name}
              Email: ${email}
              Business: ${businessName || 'N/A'}
              Mobile: ${mobile || 'N/A'}
              Service Interested: ${service}
              Message: ${message}
            `
          };

          await transporter.sendMail(mailOptions);
          console.log('✅ Background: Email notification sent');
        } catch (mailError) {
          console.error('❌ Background: Email failed:', mailError.message);
        }
      }
    };

    // Execute background tasks concurrently without blocking
    saveToDb();
    sendEmail();

  } catch (criticalError) {
    console.error('❌ Critical Background Error:', criticalError);
  }
});

export default router;
