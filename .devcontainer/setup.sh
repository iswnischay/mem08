#!/bin/bash

# mem8 Codespaces Setup Script
# Run this after creating a new Codespace

echo "🚀 Setting up mem8 in GitHub Codespaces..."

# Check if .env exists
if [ ! -f .env ]; then
    echo "📝 Creating .env file..."
    cat > .env << 'EOF'
VITE_FIREBASE_API_KEY=AIzaSyC5ieG4PgXYXTn0BvUFVK_NixcCXElnXjE
VITE_FIREBASE_AUTH_DOMAIN=mem-08.firebaseapp.com
VITE_FIREBASE_PROJECT_ID=mem-08
VITE_FIREBASE_STORAGE_BUCKET=mem-08.firebasestorage.app
VITE_FIREBASE_MESSAGING_SENDER_ID=1079446292353
VITE_FIREBASE_APP_ID=1:1079446292353:web:99f079538f51adbefd0a80
EOF
    echo "✅ .env file created"
else
    echo "✅ .env file already exists"
fi

# Install dependencies if not already installed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    echo "✅ Dependencies installed"
else
    echo "✅ Dependencies already installed"
fi

echo ""
echo "🎉 Setup complete!"
echo ""
echo "To start the development server, run:"
echo "  npm run dev"
echo ""
echo "Then open the forwarded port 5173 in your browser."
