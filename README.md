# Rohith B's Portfolio Website

Welcome to my personal portfolio website, showcasing my expertise in AI, Machine Learning, and Data Science. This platform highlights my projects, skills, and experience, providing a comprehensive overview of my capabilities as a Machine Learning Engineer.

## Features

- **Interactive Navigation**: Smooth scrolling and active section highlighting for easy navigation.
- **Dynamic Project Showcase**: Detailed display of AI/ML projects with descriptions, technologies, and links to GitHub/demos.
- **Skill Categorization**: Organized presentation of programming languages, technologies, and ML libraries.
- **Experience Timeline**: A clear timeline of my education and professional experience.
- **Contact Form**: A functional contact form powered by EmailJS for direct communication.
- **Responsive Design**: Optimized for various devices and screen sizes.

## Technologies Used

This portfolio website is built using modern web technologies to ensure a robust, scalable, and interactive user experience.

- **Next.js**: A React framework for building performant web applications.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapid UI development.
- **Shadcn/ui**: A collection of reusable components built with Radix UI and Tailwind CSS.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **EmailJS**: For handling contact form submissions without a backend server.
- **Lucide React**: A collection of beautiful and customizable open-source icons.

## Project Structure

```
portfolio-1/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── theme-provider.tsx
│   └── ui/ (Shadcn/ui components)
├── hooks/
├── lib/
├── public/
│   ├── images/ (Project images)
│   └── resume/ (My resume PDF)
├── styles/
├── .gitignore
├── next.config.mjs
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
├── tsconfig.json
└── README.md (This file)
```

## Setup and Installation

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have Node.js and npm (or yarn/pnpm) installed on your machine.

- Node.js (v18.x or later)
- npm (v9.x or later) | yarn (v1.x or later) | pnpm (v8.x or later)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Rohith-AI-HUB/portfolio-1.git
   cd portfolio-1
   ```

2. Install dependencies:
   ```bash
   npm install
   # or yarn install
   # or pnpm install
   ```

3. Set up EmailJS (Optional, but recommended for contact form functionality):
   - Go to [EmailJS](https://www.emailjs.com/) and create an account.
   - Create a new Email Service (e.g., Gmail).
   - Create a new Email Template (e.g., `template_cligyur`).
   - Note down your Service ID, Template ID, and Public Key.
   - Update the `emailjs.send` call in `app/page.tsx` with your credentials:
     ```typescript
     await emailjs.send(
       "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
       "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
       { /* ... */ },
       "YOUR_PUBLIC_KEY", // Replace with your EmailJS public key
     )
     ```

### Running the Development Server

To run the development server:

```bash
npm run dev
# or yarn dev
# or pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Building for Production

To build the application for production:

```bash
npm run build
# or yarn build
# or pnpm build
```

This command creates an optimized production build in the `.next` folder.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=portfolio&utm_source=create-next-app&utm_campaign=create-next-app-intro) from the creators of Next.js.

Check out the [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

## Contact

Rohith B - [Your LinkedIn Profile](https://www.linkedin.com/in/rohith-b-0101/)

Project Link: [https://github.com/Rohith-AI-HUB/portfolio-1](https://github.com/Rohith-AI-HUB/portfolio-1)