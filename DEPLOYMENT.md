# 🚀 Quick Deployment Guide

## Option 1: Netlify (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial wedding website"
   git branch -M main
   git remote add origin https://github.com/yourusername/jibin-weds-jisly.git
   git push -u origin main
   ```

2. **Deploy on Netlify**
   - Go to [netlify.com](https://netlify.com)
   - Click "New site from Git"
   - Connect your GitHub repository
   - Build settings: Leave empty (static site)
   - Publish directory: `.` (root)
   - Click "Deploy site"

3. **Custom Domain** (Optional)
   - Go to Site settings > Domain management
   - Add your custom domain
   - Update DNS records as instructed

## Option 2: Vercel

1. **Push to GitHub** (same as above)

2. **Deploy on Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Framework preset: Other
   - Click "Deploy"

## Option 3: GitHub Pages

1. **Push to GitHub** (same as above)

2. **Enable GitHub Pages**
   - Go to repository Settings
   - Pages section
   - Source: Deploy from a branch
   - Branch: main, folder: / (root)
   - Save

## Option 4: Traditional Hosting

1. **Upload Files**
   - Upload all files to your web server
   - Ensure `index.html` is in the root directory
   - Maintain the folder structure

2. **Test**
   - Visit your domain
   - Check all functionality works

## 🌐 Before Deploying

### Required Assets
- ✅ Replace `/public/video/hero.mp4` with your wedding video
- ✅ Replace `/public/hero-poster.jpg` with video fallback image
- ✅ Add 12 photos to `/public/gallery/` (1.jpg through 12.jpg)

### Customization
- ✅ Update wedding details in `index.html`
- ✅ Modify Google Maps embed URL
- ✅ Customize story content and quotes
- ✅ Update venue information

### Testing
- ✅ Test locally with `python -m http.server 8000`
- ✅ Verify countdown works correctly
- ✅ Check gallery lightbox functionality
- ✅ Test mobile responsiveness
- ✅ Verify all buttons work

## 📱 Post-Deployment

1. **Test Everything**
   - Countdown timer
   - Navigation links
   - Gallery lightbox
   - Add to Calendar button
   - Map buttons
   - Mobile menu

2. **Performance Check**
   - Run Lighthouse audit
   - Target 90+ in all categories
   - Optimize images if needed

3. **Share**
   - Send the URL to family and friends
   - Test on different devices
   - Check social media previews

## 🔧 Troubleshooting

### Common Issues
- **Video not playing**: Check file format and size
- **Images not loading**: Verify file paths and permissions
- **Countdown not working**: Check JavaScript console for errors
- **Mobile issues**: Test on actual devices

### Support
- Check browser console for errors
- Verify all file paths are correct
- Test with different browsers
- Check mobile responsiveness

---

**Your wedding website is ready to go live! 🎉**

*Remember to replace placeholder assets with your actual wedding content.*
