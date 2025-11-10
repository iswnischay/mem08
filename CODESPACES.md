# mem8 on GitHub Codespaces

Complete guide to running mem8 in GitHub Codespaces.

---

## 🚀 Quick Start (Automatic Setup)

### Method 1: Using devcontainer.json (Recommended)

1. **Create Codespace:**

   - Go to https://github.com/iswnischay/mem08
   - Click **Code** → **Codespaces** → **Create codespace on main**

2. **Wait for automatic setup:**

   - Dependencies install automatically
   - Environment configured
   - Extensions installed

3. **Start dev server:**

   ```bash
   npm run dev
   ```

4. **Open in browser:**
   - Click notification popup, or
   - Go to **PORTS** tab → Click globe icon next to port 5173

---

## 🛠️ Manual Setup

If you prefer manual setup or automatic setup fails:

### Step 1: Create Codespace

- Go to repository → Code → Codespaces → Create

### Step 2: Create Environment File

```bash
cat > .env << 'EOF'
VITE_FIREBASE_API_KEY=AIzaSyC5ieG4PgXYXTn0BvUFVK_NixcCXElnXjE
VITE_FIREBASE_AUTH_DOMAIN=mem-08.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=mem-08
VITE_FIREBASE_STORAGE_BUCKET=mem-08.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1079446292353
VITE_FIREBASE_APP_ID=1:1079446292353:web:99f079538f51adbefd0a80
EOF
```

### Step 3: Install Dependencies

```bash
npm install
```

### Step 4: Start Development Server

```bash
npm run dev
```

### Step 5: Access Application

- Codespaces will auto-forward port 5173
- Click the notification or go to PORTS tab
- Click globe icon to open in browser

---

## 🎯 What Works in Codespaces

✅ **Web Application**

- Full React development environment
- Hot module replacement (HMR)
- Firebase authentication
- Firestore CRUD operations

✅ **Development Tools**

- VS Code in browser
- Git integration
- Terminal access
- Port forwarding

✅ **Building & Testing**

```bash
# Development
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## ⚠️ Limitations in Codespaces

❌ **MCP Server**

- Requires Docker Desktop with MCP toolkit
- Not available in Codespaces
- Use on local machine instead

❌ **Discord Bot**

- Can run but won't persist when Codespace stops
- Better to run on local machine or dedicated server

✅ **Workaround:** Deploy to other services (see below)

---

## 🌐 Accessing Your Codespace

### Public URL

Codespaces provides a public URL for port 5173:

```
https://<codespace-name>-5173.app.github.dev
```

**Note:** This URL changes each time you create a new Codespace.

### Custom Domain (Optional)

For a permanent URL:

1. Deploy to GitHub Pages (already configured)
2. Access at: https://iswnischay.github.io/mem08/

---

## 🔐 Security in Codespaces

### Environment Variables

- `.env` file is gitignored
- Variables only exist in your Codespace
- Not shared with other users

### Secrets Management

For team collaboration:

1. Go to repository **Settings** → **Secrets and variables** → **Codespaces**
2. Add secrets:

   - `VITE_FIREBASE_API_KEY`
   - `VITE_FIREBASE_AUTH_DOMAIN`
   - etc.

3. Access in Codespace:
   ```bash
   echo $VITE_FIREBASE_API_KEY
   ```

---

## 🚀 Deployment from Codespaces

### Option 1: GitHub Pages (Automated)

Already configured! Just push to main:

```bash
git add .
git commit -m "Update"
git push
```

GitHub Actions will deploy automatically.

### Option 2: Manual Build & Deploy

```bash
# Build
npm run build

# Deploy (using GitHub CLI)
gh workflow run automation.yml
```

---

## 💡 Tips & Tricks

### 1. Keep Codespace Running

- Codespaces auto-sleep after 30 minutes of inactivity
- Keep a terminal command running to prevent sleep:
  ```bash
  npm run dev
  ```

### 2. Multiple Terminals

- Open multiple terminals: **Terminal** → **New Terminal**
- Run dev server in one, git commands in another

### 3. VS Code Extensions

Recommended extensions (auto-installed with devcontainer):

- ESLint
- Prettier
- ES7 React/Redux snippets
- Tailwind CSS IntelliSense

### 4. Port Management

View all forwarded ports:

- Click **PORTS** tab in bottom panel
- Add custom ports if needed
- Change visibility (public/private)

### 5. Persist Codespace

- Don't delete Codespace between sessions
- Resume existing Codespace for faster startup
- Manage Codespaces at: https://github.com/codespaces

---

## 🐛 Troubleshooting

### Port 5173 Not Accessible

```bash
# Check if Vite is running
ps aux | grep vite

# Check port forwarding
gh codespace ports
```

### Dependencies Not Installing

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Firebase Connection Issues

```bash
# Verify environment variables
cat .env

# Check if Firebase credentials are loaded
npm run dev
# Look for Firebase initialization logs
```

### Build Fails

```bash
# Check Node.js version (should be 20+)
node --version

# Update dependencies
npm update

# Try clean build
rm -rf dist
npm run build
```

---

## 📊 Codespaces vs Local Development

| Feature     | Codespaces          | Local            |
| ----------- | ------------------- | ---------------- |
| Setup Time  | 2-3 minutes         | 10-15 minutes    |
| Web App     | ✅ Full support     | ✅ Full support  |
| MCP Server  | ❌ Not available    | ✅ Full support  |
| Discord Bot | ⚠️ Limited          | ✅ Full support  |
| Cost        | Free (60 hrs/month) | Free             |
| Access      | Any device          | Specific machine |
| Performance | Cloud-based         | Local hardware   |

---

## 🎓 Common Workflows

### Daily Development

```bash
# Start Codespace
# (Open from https://github.com/codespaces)

# Start dev server
npm run dev

# Make changes
# (VS Code in browser)

# Commit & push
git add .
git commit -m "Your changes"
git push
```

### Quick Bug Fix

```bash
# Create Codespace
# Make fix
# Push
# Delete Codespace
```

### Collaboration

1. Share Codespace URL with teammate
2. Use Live Share extension
3. Or create separate Codespaces from same repo

---

## 📚 Additional Resources

- **Codespaces Docs:** https://docs.github.com/codespaces
- **Vite Docs:** https://vitejs.dev/
- **Firebase Docs:** https://firebase.google.com/docs

---

## 🔄 Updating Configuration

After creating the devcontainer configuration:

1. **Rebuild Codespace:**

   - Open Command Palette: `Ctrl+Shift+P` (or `Cmd+Shift+P`)
   - Type: "Codespaces: Rebuild Container"
   - Wait for rebuild

2. **Or create new Codespace:**
   - Delete current Codespace
   - Create new one (uses new config)

---

## 💰 Cost & Limits

**Free Tier:**

- 120 core hours/month
- 15 GB storage/month

**Your Usage:**

- mem8 uses ~2 cores
- ~60 hours of development time/month
- Well within free tier limits

---

## ✅ Checklist

- [ ] Codespace created
- [ ] `.env` file configured
- [ ] Dependencies installed (`npm install`)
- [ ] Dev server running (`npm run dev`)
- [ ] Port 5173 accessible
- [ ] Application loads in browser
- [ ] Firebase authentication works
- [ ] Can add/view/delete secrets

---

**You're all set! Start coding in the cloud! ☁️**

For issues, check the troubleshooting section or open an issue on GitHub.
