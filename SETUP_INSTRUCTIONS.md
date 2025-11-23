# Portfolio Setup Instructions

## Contact Form Setup

The contact form uses Web3Forms for email functionality. To make it work:

1. **Get a Web3Forms Access Key:**

   - Visit [https://web3forms.com](https://web3forms.com)
   - Sign up for a free account
   - Get your access key

2. **Configure the Contact Form:**

   - Open `src/app/component/contact.tsx`
   - Find line 35: `access_key: "YOUR_WEB3FORMS_ACCESS_KEY"`
   - Replace `YOUR_WEB3FORMS_ACCESS_KEY` with your actual key
   - Example: `access_key: "a1b2c3d4-e5f6-7890-abcd-ef1234567890"`

3. **Test the Form:**
   - Run the development server: `npm run dev`
   - Navigate to the contact section
   - Fill out and submit the form
   - Check your email for the message

## Theme Toggle

The portfolio now features a dark/light theme toggle:

- Click the sun/moon icon in the navbar to switch themes
- Theme preference is saved in localStorage
- Respects system preferences on first visit

## Professional Color Scheme

The portfolio uses a professional color palette:

**Light Theme:**

- Primary Blue: #3B82F6
- Background: #F9FAFB
- Text: #111827

**Dark Theme:**

- Primary Blue: #60A5FA
- Background: #111827
- Text: #F9FAFB

## Development

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm build

# Start production server
npm start
```

## Features

✅ Professional dark/light theme
✅ Smooth theme transitions
✅ Working contact form with validation
✅ Responsive design
✅ Modern UI with shadows and hover effects
✅ Accessible form labels
✅ Form submission feedback
✅ Email integration via Web3Forms

## Notes

- All color classes use CSS variables for theme switching
- Components are optimized for both light and dark modes
- The contact form includes loading states and error handling
- Form data is validated on the client side before submission
