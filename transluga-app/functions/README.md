# Transluga Email Functions

This directory contains Firebase Cloud Functions that handle email sending for the Transluga application.

## Features

- **Newsletter Confirmation Emails**: Automatically sends confirmation emails to new newsletter subscribers
- **Contact Form Confirmation Emails**: Sends confirmation emails for contact form submissions
- **Company Notifications**: Notifies the company about new subscribers and contact form submissions

## Setup Instructions

### 1. Install Dependencies

```bash
cd functions
npm install
```

### 2. Configure Email Credentials

You need to set up environment variables for the email service:

```bash
firebase functions:config:set email.user="calvezgobbi@gmail.com" email.password="your-app-password" email.company="calvezgobbi@gmail.com"
```

**Note**: For Gmail, you'll need to use an "App Password" rather than your regular password. You can generate one in your Google Account settings.

### 3. Deploy Functions

```bash
firebase deploy --only functions
```

## Testing Locally

To test the functions locally:

1. Get the current environment config:
   ```bash
   firebase functions:config:get > .runtimeconfig.json
   ```

2. Start the emulator:
   ```bash
   npm run serve
   ```

## Important Notes

- The email service is configured to use Gmail by default. You can modify the `transporter` configuration in `index.ts` to use a different email service.
- For production use, consider using a dedicated email service like SendGrid or Mailchimp for better deliverability.
- Make sure your Gmail account has "Less secure app access" enabled or use OAuth2 authentication for better security.
