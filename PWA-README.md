# Tegel - Progressive Web App (PWA)

Tegel is now a fully-functional Progressive Web App! This means you can install it on your phone or computer and use it like a native app.

## ✨ Features

- 📱 **Install on your home screen** - Works like a native app
- 🔌 **Offline support** - Play even without internet connection
- 🚀 **Fast loading** - Cached for instant startup
- 📵 **No browser UI** - Fullscreen gaming experience
- 💾 **Persistent data** - Your settings and high scores are saved

## 📲 How to Install on Mobile

### Android (Chrome/Edge)
1. Open `game.html` in Chrome or Edge browser
2. Tap the menu (⋮) in the top right
3. Tap "Add to Home screen" or "Install app"
4. Confirm the installation
5. The Tegel icon will appear on your home screen!

### iOS (Safari)
1. Open `game.html` in Safari
2. Tap the Share button (square with arrow pointing up)
3. Scroll down and tap "Add to Home Screen"
4. Tap "Add" in the top right
5. The Tegel icon will appear on your home screen!

## 💻 How to Install on Desktop

### Chrome/Edge/Brave
1. Open `game.html` in your browser
2. Look for the install icon (⊕) in the address bar
3. Click it and confirm "Install"
4. Tegel will open in its own window!

### Alternative method
1. Click the menu (⋮)
2. Select "Install Tegel" or "Install app"
3. Confirm the installation

## 🎮 Using the Installed App

Once installed:
- Launch Tegel from your home screen (mobile) or apps menu (desktop)
- It opens in fullscreen without browser UI
- Works offline - no internet needed after first install
- All your settings and high scores are saved locally

## 🔔 Getting Updates

Tegel automatically checks for updates every time you open the app!

**When a new version is available:**
1. A notification banner appears at the bottom: "🎉 New version available!"
2. You have two options:
   - **Update Now** - Installs the update immediately and reloads the app
   - **Later** - Dismisses the notification, you can update next time

**How it works:**
- Updates are detected automatically when you open the app
- The new version downloads in the background
- You choose when to activate it
- The app reloads with the new version when you click "Update Now"
- Your game data (settings, high scores) is preserved

**No notification?** That means you're running the latest version! 🎉

## 🛠️ Technical Details

The PWA implementation includes:
- **manifest.json** - App configuration and metadata
- **sw.js** - Service worker for offline caching
- **SVG icons** - Scalable app icons (192x192 and 512x512)
- **LocalStorage** - Persistent game data

## 🎨 Custom Icons (Optional)

The app currently uses SVG icons. If you want to generate custom PNG icons:

1. Open `generate-icons.html` in your browser
2. Click "Generate Icons" button
3. Download the generated PNG files
4. Replace the SVG references in the manifest with PNG

## 🔧 Serving Requirements

For the PWA to work properly:
- Must be served over HTTPS (or localhost for testing)
- Service worker requires same-origin
- All cached files must be accessible

## 📝 Files Added for PWA

- `manifest.json` - App manifest with metadata
- `sw.js` - Service worker for caching
- `icon-192.svg` - App icon (192x192)
- `icon-512.svg` - App icon (512x512)
- `generate-icons.html` - Optional PNG icon generator
- `PWA-README.md` - This file

## 🎯 Testing

To test the PWA:
1. Serve the files using a local server (e.g., `python -m http.server`)
2. Open in browser
3. Check DevTools > Application > Service Workers
4. Look for the install prompt

## 🌟 Enjoy!

Your Tegel game is now a fully installable Progressive Web App. Share it with friends, install it on all your devices, and enjoy playing offline anytime!
