# Complete Deployment Roadmap: Dev Rajwadi Portfolio

## Prerequisites

Before running this app on your personal computer, ensure you have:

1. **Node.js** (version 18 or higher)
   - Download from: https://nodejs.org/
   - Check version: `node --version`

2. **npm** (comes with Node.js)
   - Check version: `npm --version`

3. **Git** (for version control)
   - Download from: https://git-scm.com/
   - Check version: `git --version`

4. **VS Code** (recommended editor)
   - Download from: https://code.visualstudio.com/

## Step-by-Step Setup Guide

### 1. Download the Project

**Option A: Download ZIP (Recommended)**
1. Click the "Download" button in Replit
2. Extract the ZIP file to your desired folder
3. Open the folder in VS Code

**Option B: Clone from Git (if connected to GitHub)**
```bash
git clone <your-repository-url>
cd portfolio-project
```

### 2. Install Dependencies

Open terminal in VS Code (`Ctrl/Cmd + \``) and run:

```bash
# Install all project dependencies
npm install
```

This will install all required packages including:
- React, TypeScript, Vite
- Tailwind CSS, shadcn/ui components
- Express.js for backend
- All other dependencies listed in package.json

### 3. Project Structure Overview

```
portfolio-project/
├── client/                 # Frontend React app
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Main page components
│   │   ├── assets/        # Images and static files
│   │   └── hooks/         # Custom React hooks
├── server/                # Backend Express app
│   ├── index.ts          # Main server file
│   └── routes.ts         # API routes
├── shared/               # Shared types and schemas
├── package.json          # Dependencies and scripts
├── vite.config.ts       # Vite configuration
├── tailwind.config.ts   # Tailwind CSS config
└── tsconfig.json        # TypeScript config
```

### 4. Running the Application

#### Development Mode (Recommended)
```bash
# Start the development server
npm run dev
```

This command will:
- Start the Express backend on port 5000
- Start the Vite frontend development server
- Enable hot-reload for instant updates
- Open your browser to http://localhost:5000

#### Production Build
```bash
# Build the app for production
npm run build

# Preview the production build
npm run preview
```

### 5. VS Code Setup and Extensions

**Recommended VS Code Extensions:**
1. **ES7+ React/Redux/React-Native snippets**
2. **Tailwind CSS IntelliSense**
3. **TypeScript Importer**
4. **Auto Rename Tag**
5. **Prettier - Code formatter**
6. **ESLint**

**VS Code Settings for this project:**
1. Create `.vscode/settings.json`:
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "tailwindCSS.includeLanguages": {
    "typescript": "typescript",
    "typescriptreact": "typescriptreact"
  }
}
```

### 6. Environment Setup

#### Development Environment
No additional environment variables needed for basic functionality.

#### Adding Resume PDF
1. Place your resume PDF in `client/public/` folder
2. Name it `DevRajwadi_Resume.pdf` or update the path in components

### 7. Making Changes and Customization

#### Updating Personal Information
1. **Contact Info**: Edit `client/src/pages/Contact.tsx`
2. **About Section**: Edit `client/src/pages/About.tsx`
3. **Projects**: Edit `client/src/pages/Projects.tsx`
4. **Hero Section**: Edit `client/src/pages/Index.tsx`

#### Updating Styling
1. **Colors**: Edit `client/src/index.css` (CSS variables)
2. **Components**: Files in `client/src/components/`
3. **Tailwind Config**: `tailwind.config.ts`

#### Adding New Pages
1. Create new file in `client/src/pages/`
2. Add route in `client/src/App.tsx`
3. Update navigation in `client/src/components/Layout/Navigation.tsx`

### 8. Building for Production

#### Local Production Build
```bash
# Build the app
npm run build

# The built files will be in the 'dist' folder
# You can serve this folder with any static file server
```

#### Deployment Options

**Option 1: Vercel (Recommended)**
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow the prompts

**Option 2: Netlify**
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to Netlify

**Option 3: GitHub Pages**
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json scripts: `"deploy": "gh-pages -d dist"`
3. Run: `npm run deploy`

### 9. Troubleshooting Common Issues

#### Port Already in Use
```bash
# Kill process on port 5000
npx kill-port 5000

# Or use a different port
PORT=3000 npm run dev
```

#### Node Modules Issues
```bash
# Clear npm cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

#### TypeScript Errors
```bash
# Check TypeScript issues
npx tsc --noEmit
```

#### Build Errors
```bash
# Clear Vite cache
rm -rf node_modules/.vite
npm run dev
```

### 10. File Structure for Assets

```
client/public/           # Static files (accessible via /filename)
├── DevRajwadi_Resume.pdf
├── favicon.ico
└── ...

client/src/assets/       # Imported assets
├── hero-bg.jpg
├── movie-app.jpg
├── dashboard.jpg
└── mental-health-app.jpg
```

### 11. Development Workflow

1. **Start Development Server**: `npm run dev`
2. **Make Changes**: Edit files in `client/src/`
3. **View Changes**: Browser auto-refreshes
4. **Test**: Check all pages and functionality
5. **Build**: `npm run build` before deployment

### 12. Performance Tips

- **Images**: Optimize images before adding to assets folder
- **Dependencies**: Only install packages you actually use
- **Code Splitting**: Already configured with Vite
- **Bundle Analysis**: Use `npm run build` to see bundle size

## Quick Command Reference

```bash
# Setup
npm install                 # Install dependencies
npm run dev                # Start development server
npm run build              # Build for production
npm run preview            # Preview production build

# Development
npm run type-check         # Check TypeScript
npm run lint               # Run ESLint
```

## Support and Resources

- **React Documentation**: https://react.dev/
- **Vite Documentation**: https://vitejs.dev/
- **Tailwind CSS**: https://tailwindcss.com/
- **TypeScript**: https://www.typescriptlang.org/
- **shadcn/ui**: https://ui.shadcn.com/

## Final Notes

This portfolio is fully self-contained and ready to run on any system with Node.js. The development server provides hot-reload, and the production build is optimized for deployment to any static hosting service.

For any questions or issues, refer to the documentation links above or check the project's configuration files.