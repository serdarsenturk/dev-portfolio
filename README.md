# Personal Portfolio

A modern, responsive personal portfolio website built with Next.js 16, TypeScript, and Tailwind CSS. Features internationalization support for Turkish and English languages.

## ✨ Features

- **🌍 Internationalization**: Full support for Turkish and English languages
- **📱 Responsive Design**: Mobile-first approach with Tailwind CSS
- **🎨 Modern UI**: Beautiful gradient backgrounds and glass morphism effects
- **⚡ Performance**: Built with Next.js 16 App Router for optimal performance
- **🔧 TypeScript**: Full type safety throughout the application
- **📧 Contact Form**: Working contact form with EmailJS integration
- **🎮 Interactive Elements**: Animated skill cards and character sheet
- **🌙 Dark Mode**: Built-in dark/light theme support

## 🛠️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI
- **Icons**: Lucide React
- **Email Service**: EmailJS

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   ```

2. **Set up environment variables**

   ```bash
   cp .env.example .env.local
   ```

   Add your EmailJS credentials:

   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🌍 Internationalization

The portfolio supports two languages:

- **Turkish** (`/tr`) - Default language
- **English** (`/en`)

### Adding New Languages

1. Create a new dictionary file in `app/[lang]/dictionaries/`
2. Add the locale to `proxy.ts`
3. Update the `Locale` type in `lib/types.ts`

### Translation Files

- `app/[lang]/dictionaries/tr.json` - Turkish translations
- `app/[lang]/dictionaries/en.json` - English translations

## 🎨 Customization

### Personal Information

Update your personal details in `lib/constants.ts`:

```typescript
export const DEVELOPER_INFO = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  // ... other details
};
```

### Skills and Experience

Modify the data in `lib/constants.ts` to reflect your skills and experience.

### Styling

The portfolio uses Tailwind CSS with custom configurations. Main styling files:

- `app/[lang]/globals.css` - Global styles
- Component-specific styles are inline with Tailwind classes

## 📧 Contact Form Setup

1. **Create EmailJS account** at [emailjs.com](https://emailjs.com)
2. **Set up email service** (Gmail, Outlook, etc.)
3. **Create email template** with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
4. **Add credentials** to `.env.local`
