<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# New Horizon - Travel Exploration App

Explore your next adventure with New Horizon - an AI-powered travel exploration platform.

View your app in AI Studio: https://ai.studio/apps/e8249fb5-88fe-4632-a9de-9dc9a2ec0466

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in [.env.local](.env.local) to your Gemini API key
3. Run the app:
   ```bash
   npm run dev
   ```

## Build for Production

To build the app for production:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Deploy to GitHub Pages

This app is configured to deploy to GitHub Pages at `https://emirsaffar-collab.github.io/New-Horizon/`.

The following configuration is already set up:
- Base path: `/New-Horizon/` in `vite.config.ts`
- React Router basename: `/New-Horizon` in `src/App.tsx`
- GitHub Actions workflow in `.github/workflows/deploy.yml`

### Automatic Deployment

The app automatically deploys to GitHub Pages when changes are pushed to the `main` branch. The GitHub Actions workflow:
1. Builds the app using `npm run build`
2. Deploys the `dist` folder to GitHub Pages

### Manual Deployment

You can also trigger a deployment manually:
1. Go to the "Actions" tab in the GitHub repository
2. Select the "Deploy to GitHub Pages" workflow
3. Click "Run workflow"

The app will be available at: https://emirsaffar-collab.github.io/New-Horizon/
