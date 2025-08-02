# Dev Rajwadi - Portfolio Project

A modern UI/UX Designer and Frontend Developer portfolio built with React, TypeScript, and Tailwind CSS.

## 🚀 Quick Start

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd dev-insights-crafted
```

2. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

- **Client**: http://localhost:3000
- **Server**: http://localhost:5000

### Building for Production

Build the application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

## 📁 Project Structure

```
dev-insights-crafted/
├── client/                 # React frontend application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   │   ├── Layout/     # Navigation and Footer
│   │   │   └── ui/         # shadcn/ui components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   ├── lib/            # Utility functions
│   │   └── assets/         # Static assets
│   ├── public/             # Public assets
│   └── index.html          # HTML entry point
├── server/                 # Express.js backend
│   ├── index.ts           # Server entry point
│   ├── routes.ts          # API routes
│   ├── storage.ts         # Data storage
│   └── vite.ts            # Vite integration
├── shared/                # Shared types and schemas
├── attached_assets/        # Project assets
└── vercel.json            # Vercel deployment config
```

## 🛠️ Technologies Used

### Frontend

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling with custom dark theme
- **shadcn/ui** - Accessible component library
- **Radix UI** - Primitive components
- **Framer Motion** - Animations and transitions
- **React Hook Form** - Form handling
- **Wouter** - Client-side routing
- **Lucide React** - Icons

### Backend

- **Express.js** - Web framework
- **Drizzle ORM** - Database ORM
- **Zod** - Schema validation

### Development

- **Vite** - Build tool and dev server
- **ESBuild** - TypeScript bundling
- **PostCSS** - CSS processing
- **Tailwind CSS** - Utility-first CSS

## 🎨 Features

- **Modern Design**: Clean, professional portfolio with dark theme
- **Responsive**: Works on all device sizes
- **Animations**: Smooth transitions and micro-interactions
- **Performance**: Optimized for fast loading
- **Accessibility**: WCAG compliant components
- **SEO Optimized**: Meta tags and structured data
- **Contact Form**: Functional contact form with validation
- **Project Showcase**: Detailed project case studies
- **Resume Download**: Direct PDF download functionality

## 📝 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run vercel-build` - Build for Vercel deployment
- `npm start` - Start production server
- `npm run check` - TypeScript type checking
- `npm run db:push` - Push database schema changes

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
NODE_ENV=development
PORT=5000
```

### Database

The project uses Drizzle ORM with PostgreSQL. Configure your database connection in `drizzle.config.ts`.

## 🚀 Deployment

### Vercel (Recommended)

The project is configured for Vercel deployment with the included `vercel.json`.

**Deployment Steps:**

1. Install Vercel CLI: `npm i -g vercel`
2. Login: `vercel login`
3. Deploy: `vercel --prod`

**Current Live URL:**
https://devrajwadi-portfolio-1isoa09ue-dev-rajwadis-projects.vercel.app

### Custom Domain Setup

To use a custom domain like `devrajwadi.vercel.app`:

1. Go to Vercel Dashboard
2. Select your project
3. Go to Settings → General
4. Change Project Name to `devrajwadi`
5. Save changes

### Other Platforms

The build output is in `client/dist` and can be deployed to any static hosting service.

## 🐛 Recent Fixes

### Navigation Issues (Fixed)

- ✅ Fixed client-side routing with Wouter components
- ✅ Replaced `<a href="">` with `<Link to="">` for internal navigation
- ✅ Fixed 404 errors on About page "View My Projects" buttons
- ✅ Updated all navigation links across all pages

### Build Configuration (Fixed)

- ✅ Fixed ES module compatibility issues
- ✅ Updated Vite configuration for proper build paths
- ✅ Fixed PostCSS and Tailwind config for ES modules
- ✅ Consolidated dependencies in root package.json

### Deployment Issues (Fixed)

- ✅ Configured vercel.json for hybrid deployment (static + serverless)
- ✅ Fixed build configuration for Vercel
- ✅ Added proper routes for client-side routing fallback
- ✅ Configured asset serving

## 📄 License

MIT License - see LICENSE file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

For questions or support, please open an issue on GitHub.

---

**Portfolio Owner**: Dev Rajwadi  
**Role**: Frontend Developer • UI/UX Designer • Data Analytics  
**Location**: Hyderabad, India  
**LinkedIn**: https://www.linkedin.com/in/dev-rajwadi/
