# Email Setup Guide for HelixCore Studio

## Overview
The contact form now uses Nodemailer to send emails directly to your inbox at `hamzahakim12235@gmail.com`.

## Setup Instructions

### 1. Create Environment File

Create a `.env.local` file in the root directory of your project:

```bash
# In project root
touch .env.local
```

### 2. Configure Gmail App Password

For security, Gmail requires an "App Password" instead of your regular password:

1. **Enable 2-Step Verification** (if not already enabled):
   - Go to https://myaccount.google.com/security
   - Click on "2-Step Verification"
   - Follow the setup instructions

2. **Generate App Password**:
   - Go to https://myaccount.google.com/apppasswords
   - Select "Mail" for app type
   - Select "Other (Custom name)" for device
   - Enter "HelixCore Studio Website" as the name
   - Click "Generate"
   - Copy the 16-character password (remove spaces)

### 3. Add Environment Variables

Add these lines to your `.env.local` file:

```env
EMAIL_USER=helixcorestudio@gmail.com
EMAIL_PASSWORD=lzor cdrx sdnn ednv


**Important**: Replace `your-16-character-app-password-here` with the actual App Password you generated.

### 4. Restart Development Server

After adding the environment variables, restart your development server:

```bash
npm run dev
```

## How It Works

### Email Flow
1. **User submits form** → Form data sent to `/api/send-email`
2. **API validates data** → Checks for required fields
3. **Two emails sent**:
   - **To Admin** (`hamzahakim12235@gmail.com`): Contains full inquiry details
   - **To Client**: Confirmation email with next steps

### Admin Email Includes:
- Client name and email
- Company name (if provided)
- Service required
- Budget range (if provided)
- Detailed project description
- Professional HTML formatting
- Reply-to set to client's email

### Client Confirmation Email Includes:
- Thank you message
- What to expect next
- Contact information
- Professional branding

## Testing

### Test the Contact Form:
1. Go to `http://localhost:3000` (or your deployment URL)
2. Scroll to the Contact section
3. Fill out the form with test data
4. Submit the form
5. Check both:
   - `hamzahakim12235@gmail.com` for the inquiry
   - The email you entered for confirmation

## Troubleshooting

### "Failed to send email" error:
- **Check environment variables**: Make sure `.env.local` exists and has correct values
- **Verify App Password**: Ensure you're using the App Password, not your regular Gmail password
- **2-Step Verification**: Must be enabled on your Google account
- **Restart server**: After changing `.env.local`, always restart the dev server

### Emails not arriving:
- Check spam/junk folders
- Verify the EMAIL_USER is correct in `.env.local`
- Check console for error messages
- Verify Gmail account has sufficient storage

### Rate Limiting:
Gmail has sending limits:
- **Free Gmail**: ~500 emails per day
- **Google Workspace**: ~2,000 emails per day

## Production Deployment

### Vercel / Netlify:
Add environment variables in your deployment platform:
1. Go to project settings
2. Find "Environment Variables" section
3. Add:
   - `EMAIL_USER` = `helixcorestudio@gmail.com`
   - `EMAIL_PASSWORD` = `your-app-password`

### Other Platforms:
Follow similar process to add environment variables before deployment.

## Security Notes

1. **Never commit `.env.local`** to git (already in `.gitignore`)
2. **App Password is safer** than your main Gmail password
3. **Email validation** is done server-side in the API route
4. **Rate limiting** should be implemented for production use

## Alternative Email Services

If you prefer not to use Gmail, you can use:

### SendGrid:
```typescript
// In route.ts, replace transporter with:
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
```

### AWS SES:
```typescript
// Configure AWS SES credentials
const transporter = nodemailer.createTransporter({
  SES: new AWS.SES({ apiVersion: '2010-12-01' })
});
```

### Resend (Recommended for Next.js):
```bash
npm install resend
```

## Support

If you encounter issues:
1. Check this guide first
2. Verify all environment variables
3. Check server console for detailed error messages
4. Ensure Gmail account settings allow app access

## Files Modified

- `app/api/send-email/route.ts` - Email API endpoint
- `components/Contact.tsx` - Updated form with API integration
- `.env.local.example` - Environment variables template
- `package.json` - Added nodemailer dependency

---

**Last Updated**: January 2026
**Contact**: hamzahakim12235@gmail.com

