# Veenoth M - Portfolio

A production-ready full-stack developer portfolio built with **Next.js 16**, **Sanity CMS**, and **Tailwind CSS v3**.

## Features

- ✅ **Headless CMS**: All content managed in Sanity Studio
- ✅ **Fully Responsive**: Mobile-first design with Tailwind v3
- ✅ **Dynamic Pages**: Skills, Projects, Experience, Contact
- ✅ **Contact Form**: Backend API route for submissions
- ✅ **Server-Side Rendering**: Fast, SEO-friendly pages
- ✅ **GROQ Queries**: Type-safe data fetching from Sanity
- ✅ **Embedded Sanity Studio**: Manage content at `/studio`

## Tech Stack

- **Frontend**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS 3.4.14
- **CMS**: Sanity (Headless)
- **Backend**: Next.js API Routes
- **Deployment**: Vercel

## Setup Instructions

### 1. Clone & Install

\`\`\`bash
npm install
# or
pnpm install
\`\`\`

### 2. Sanity Project Setup

Create a Sanity project at https://sanity.io:
- Create a new project
- Copy your Project ID
- Create an API token with write permissions

### 3. Environment Variables

Add to `.env.local`:

\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
SANITY_API_TOKEN=your_api_token
\`\`\`

### 4. Run Development Server

\`\`\`bash
npm run dev
\`\`\`

Visit:
- App: http://localhost:3000
- Sanity Studio: http://localhost:3000/studio

### 5. Add Content in Sanity Studio

1. Go to `/studio`
2. Create skill categories and skills
3. Add your projects with descriptions and links
4. Add your work experience
5. Configure contact information

## Deployment to Vercel

1. Push code to GitHub
2. Connect GitHub repo in Vercel
3. Add environment variables in Vercel Settings
4. Deploy!

### Vercel Environment Variables

Set these in your Vercel project settings:

\`\`\`
NEXT_PUBLIC_SANITY_PROJECT_ID
NEXT_PUBLIC_SANITY_DATASET
SANITY_API_TOKEN
\`\`\`

## Project Structure

\`\`\`
/app
  /api/contact         - Contact form handler
  /projects            - Projects page
  /experience          - Experience page
  /contact             - Contact page
  /studio              - Sanity Studio
  layout.tsx           - Root layout
  page.tsx             - Home page
  globals.css          - Global styles

/components
  Navbar.jsx          - Navigation
  Footer.jsx          - Footer
  SkillCard.jsx       - Skill display
  ProjectCard.jsx     - Project display
  ExperienceCard.jsx  - Experience display
  ContactForm.jsx     - Contact form

/lib
  sanity.client.js    - Sanity client config
  queries.js          - GROQ queries

/sanity/schemaTypes
  - skillCategory.js
  - skill.js
  - project.js
  - experience.js
  - contactInfo.js
\`\`\`

## Important Notes

- ⚠️ Uses **Tailwind CSS v3.4.14** (NOT v4)
- ⚠️ All content is CMS-managed (no hardcoding)
- ⚠️ Contact form data is logged to console (integrate email service as needed)
- ⚠️ Images must be uploaded through Sanity Studio

## Troubleshooting

### Sanity Connection Issues
- Verify Project ID and Dataset in `.env.local`
- Check CORS settings in Sanity dashboard
- Ensure API token has necessary permissions

### Tailwind Not Working
- Clear `.next` folder: \`rm -rf .next\`
- Restart dev server
- Ensure \`tailwind.config.js\` points to correct files

### Images Not Loading
- Upload images through Sanity Studio
- Ensure \`cdn.sanity.io\` is in \`next.config.mjs\` remotePatterns

## License

© 2025 Veenoth M. All rights reserved.
