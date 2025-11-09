# GitHub Secrets Setup Guide

## 🔐 Required GitHub Secrets

You need to add the following secrets to your GitHub repository for the CI/CD pipeline to work correctly.

### How to Add Secrets

1. Go to your repository: `https://github.com/iswnischay/mem08`
2. Click on **Settings** (tab at the top)
3. In the left sidebar, click **Secrets and variables** → **Actions**
4. Click **New repository secret**
5. Add each secret below

---

## Firebase Configuration Secrets

Get these values from your [Firebase Console](https://console.firebase.google.com/):

- Select your project
- Go to **Project Settings** (gear icon)
- Scroll down to **Your apps** section
- Click on the web app (</> icon)
- Copy the config values

Add these **6 secrets**:

| Secret Name                         | Description             | Example Value            |
| ----------------------------------- | ----------------------- | ------------------------ |
| `VITE_FIREBASE_API_KEY`             | Your Firebase API Key   | `AIzaSyC...`             |
| `VITE_FIREBASE_AUTH_DOMAIN`         | Firebase Auth Domain    | `mem08.firebaseapp.com`  |
| `VITE_FIREBASE_PROJECT_ID`          | Firebase Project ID     | `mem08`                  |
| `VITE_FIREBASE_STORAGE_BUCKET`      | Firebase Storage Bucket | `mem08.appspot.com`      |
| `VITE_FIREBASE_MESSAGING_SENDER_ID` | Messaging Sender ID     | `123456789`              |
| `VITE_FIREBASE_APP_ID`              | Firebase App ID         | `1:123456789:web:abc123` |

---

## Docker Hub Secrets (Optional)

Only needed if you want to push Docker images to Docker Hub:

| Secret Name       | Description                              |
| ----------------- | ---------------------------------------- |
| `DOCKER_USERNAME` | Your Docker Hub username                 |
| `DOCKER_PASSWORD` | Your Docker Hub password or access token |

---

## GitHub Token Secret

| Secret Name | Description                  | How to Get                                                                                                                                                                                                                               |
| ----------- | ---------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `TOKEN`     | GitHub Personal Access Token | 1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)<br>2. Click "Generate new token (classic)"<br>3. Select scope: `repo` (Full control of private repositories)<br>4. Generate and copy the token |

> **Note**: The token is needed for the `peaceiris/actions-gh-pages` action to deploy to GitHub Pages.

---

## 🧪 Testing Locally

To test Firebase configuration locally:

1. Copy `.env.example` to `.env`:

   ```bash
   cp .env.example .env
   ```

2. Edit `.env` and add your actual Firebase values

3. Run the development server:

   ```bash
   npm run dev
   ```

4. **Important**: Never commit your `.env` file! It's already in `.gitignore`.

---

## ✅ Verification Checklist

- [ ] All 6 Firebase secrets added to GitHub
- [ ] TOKEN secret added for GitHub Pages deployment
- [ ] Docker secrets added (if using Docker Hub push)
- [ ] `.env` file created locally for development (not committed)
- [ ] Pushed changes to trigger GitHub Actions workflow
- [ ] Checked GitHub Actions tab for successful build and deployment

---

## 🐛 Troubleshooting

### Build fails with "Firebase configuration is incomplete"

- Check that all 6 Firebase secrets are added to GitHub
- Verify secret names match exactly (case-sensitive)
- Check Firebase Console for correct values

### GitHub Pages shows blank page

- Check browser console for errors
- Verify `base: "/mem08/"` in `vite.config.js` matches your repo name
- Ensure GitHub Pages is enabled in repository settings

### Docker push fails

- Verify Docker Hub credentials are correct
- Check if `DOCKER_USERNAME` and `DOCKER_PASSWORD` secrets are set
- Ensure Docker Hub account exists

---

## 📚 Reference

Example from nexsuspay repository structure:

- Individual secrets are more reliable than JSON parsing
- Environment variables are injected at build time by Vite
- Secrets should never be committed to the repository
