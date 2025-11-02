# 🚀 Deployment Guide for Jibin & Jisly Wedding Website

## Quick Deploy Options

### Option 1: Netlify (Recommended - Easiest) ⭐

**Steps:**
1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Wedding website ready"
   git branch -M main
   git remote add origin https://github.com/YOUR_USERNAME/jibin-weds-jisly.git
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com) and sign up/login
   - Click **"Add new site"** → **"Import an existing project"**
   - Connect your GitHub account
   - Select your repository `jibin-weds-jisly`
   - Build settings:
     - Build command: (leave empty)
     - Publish directory: `.` (root)
   - Click **"Deploy site"**
   - Your site will be live at `https://random-name.netlify.app`

3. **Custom Domain** (Optional)
   - Go to **Site settings** → **Domain management**
   - Click **"Add custom domain"**
   - Enter your domain (e.g., `jibin-weds-jisly.com`)
   - Follow DNS configuration instructions
   - Netlify will automatically provision SSL certificate

---

### Option 2: Vercel (Alternative)

**Steps:**
1. Push to GitHub (same as above)

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com) and sign up/login
   - Click **"Add New Project"**
   - Import your GitHub repository
   - Framework Preset: **Other**
   - Root Directory: `.` (leave as is)
   - Click **"Deploy"**
   - Your site will be live at `https://your-project.vercel.app`

---

### Option 3: GitHub Pages (Free)

**Steps:**
1. Push to GitHub (same as above)

2. **Enable GitHub Pages**
   - Go to your repository on GitHub
   - Click **Settings** → **Pages**
   - Under **Source**, select:
     - Branch: `main`
     - Folder: `/ (root)`
   - Click **Save**
   - Your site will be live at `https://YOUR_USERNAME.github.io/jibin-weds-jisly`

**Note:** For custom domain, add `CNAME` file in root with your domain name.

---

## 📋 Pre-Deployment Checklist

### Required Files
- [ ] `index.html` - Main page
- [ ] `styles.css` - Styling
- [ ] `script.js` - Functionality
- [ ] Gallery images in `/public/gallery/` (12 images: 1.jpg to 12.jpg)

### Customization
- [ ] Update wedding date in `script.js` (line 51)
- [ ] Verify venue location in `index.html`
- [ ] Check all Google Maps links
- [ ] Customize story text
- [ ] Update contact information (if added)

### Testing
- [ ] Test countdown timer
- [ ] Verify gallery lightbox works
- [ ] Check mobile responsiveness
- [ ] Test all navigation links
- [ ] Verify "Add to Calendar" button
- [ ] Test on different browsers

---

## 🔧 Manual Deployment (Traditional Hosting)

### Using FTP/SFTP:
1. Upload all files to your web server
2. Ensure `index.html` is in the root directory
3. Maintain folder structure:
   ```
   /
   ├── index.html
   ├── styles.css
   ├── script.js
   ├── public/
   │   ├── gallery/
   │   └── video/
   ```
4. Set proper file permissions (644 for files, 755 for folders)
5. Test at your domain

### Using cPanel:
1. Log into cPanel
2. Go to **File Manager**
3. Navigate to `public_html`
4. Upload all files
5. Ensure `index.html` is in root
6. Test your domain

---

## 🌐 Domain Configuration

### For Netlify:
1. In Site settings → Domain management
2. Add your custom domain
3. Netlify provides DNS records to add:
   - Add A record or CNAME as shown
4. SSL certificate auto-provisions (can take up to 24 hours)

### For GitHub Pages:
1. Create `CNAME` file in root directory
2. Add your domain name (one line): `jibin-weds-jisly.com`
3. Add CNAME record in your DNS:
   - Type: CNAME
   - Name: `@` or `www`
   - Value: `YOUR_USERNAME.github.io`

---

## ✅ Post-Deployment

### 1. Test Everything
- [ ] Countdown timer works correctly
- [ ] All images load properly
- [ ] Gallery lightbox functions
- [ ] Navigation smooth scrolling works
- [ ] Mobile menu works
- [ ] "Add to Calendar" downloads .ics file
- [ ] Map links open correctly

### 2. Performance Check
- Run Lighthouse audit (Chrome DevTools)
- Target scores:
  - Performance: 90+
  - Accessibility: 90+
  - Best Practices: 90+
  - SEO: 90+

### 3. Cross-Browser Testing
- Chrome
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

### 4. Mobile Testing
- Test on actual devices, not just browser dev tools
- Check:
  - Touch interactions
  - Responsive layout
  - Image loading
  - Navigation

---

## 🐛 Troubleshooting

### Images Not Loading
- Check file paths (should be `/public/gallery/1.jpg`)
- Verify file names match exactly
- Check file permissions

### Countdown Not Working
- Open browser console (F12)
- Check for JavaScript errors
- Verify wedding date format in `script.js`

### Styling Issues
- Clear browser cache
- Check CSS file loaded (Network tab)
- Verify no 404 errors

### Mobile Issues
- Test on actual device
- Check viewport meta tag
- Verify responsive CSS

---

## 📱 Performance Optimization Tips

1. **Image Optimization**
   - Compress images before upload
   - Use WebP format if possible
   - Keep images under 500KB each

2. **CDN** (Optional)
   - Netlify and Vercel use CDN automatically
   - For custom hosting, consider Cloudflare

3. **Caching**
   - Already configured in `netlify.toml`
   - Browser caching enabled

---

## 🔐 Security

- ✅ HTTPS enforced (automatic on Netlify/Vercel)
- ✅ Security headers configured in `netlify.toml`
- ✅ No sensitive data exposed

---

## 📞 Support

If you encounter issues:
1. Check browser console for errors
2. Verify all files uploaded correctly
3. Check file paths are correct
4. Test locally first with: `python -m http.server 8000`

---

**Your wedding website is ready to share with the world! 🎉**

*Recommended: Netlify is the easiest option with free SSL and custom domain support.*

