# Jibin & Jisly Wedding Website

A luxurious, animated single-page wedding website built with modern web technologies, inspired by the Adrian Z portfolio aesthetic.

## ✨ Features

- **Fullscreen Video Hero**: Autoplay video background with elegant overlay
- **Real-time Countdown**: Accurate countdown to November 24, 2025, 10:30 AM IST
- **Smooth Animations**: Framer Motion-inspired animations with CSS transitions
- **Responsive Design**: Mobile-first approach with touch-friendly interactions
- **Gallery Lightbox**: Fullscreen image viewer with navigation
- **Interactive Navigation**: Smooth scrolling with scrollspy highlighting
- **Calendar Integration**: Download .ics file for easy calendar addition
- **Google Maps**: Embedded maps with location buttons
- **Christian Quotes**: Auto-rotating inspirational quotes
- **Custom Cursor**: Elegant cursor effects (desktop only)
- **Performance Optimized**: Lazy loading, intersection observers, and optimizations

## 🎨 Design Features

- **Minimal Luxury Aesthetic**: Clean, spacious design with gold/rose accents
- **Typography**: Playfair Display (serif) for headings, Inter (sans) for body text
- **Color Scheme**: Monochrome base with #d4af37 gold accents
- **Animations**: Smooth fade-ins, hover effects, and micro-interactions
- **Grid Layouts**: CSS Grid for responsive, elegant layouts
- **Backdrop Filters**: Modern glassmorphism effects

## 🚀 Quick Start

### Prerequisites
- Modern web browser (Chrome, Safari, Firefox, Edge)
- Local web server (for development)

### Installation

1. **Clone or Download**
   ```bash
   git clone <repository-url>
   cd jibin-weds-jisly
   ```

2. **Add Your Assets**
   - Replace `/public/video/hero.mp4` with your wedding video
   - Replace `/public/hero-poster.jpg` with a video fallback image
   - Add 12 photos to `/public/gallery/` (1.jpg through 12.jpg)

3. **Customize Content**
   - Update wedding details in `index.html`
   - Modify the Google Maps embed URL in the details section
   - Customize quotes, story text, and other content

4. **Local Development**
   ```bash
   # Using Python 3
   python -m http.server 8000
   
   # Using Node.js
   npx serve .
   
   # Using PHP
   php -S localhost:8000
   ```

5. **Open Browser**
   Navigate to `http://localhost:8000`

## 📁 File Structure

```
jibin-weds-jisly/
├── index.html              # Main HTML file
├── styles.css              # CSS styles and animations
├── script.js               # JavaScript functionality
├── README.md               # This file
└── public/                 # Public assets
    ├── gallery/            # Wedding photos (1.jpg - 12.jpg)
    ├── video/              # Hero video
    │   └── hero.mp4
    └── hero-poster.jpg     # Video fallback image
```

## 🎯 Customization

### Colors
Update the CSS custom properties in `styles.css`:
```css
:root {
    --primary-gold: #d4af37;
    --primary-black: #000000;
    --primary-white: #ffffff;
    --accent-gray: #111111;
}
```

### Wedding Details
Modify these sections in `index.html`:
- Wedding date and time
- Venue information
- Google Maps embed URL
- Story content
- Quotes

### Gallery Images
- Add 12 high-quality photos to `/public/gallery/`
- Recommended size: 800x600 or larger
- Format: JPG or PNG
- Optimize for web (compress if needed)

## 🌐 Deployment

### Netlify
1. Connect your GitHub repository
2. Build command: (leave empty - static site)
3. Publish directory: `.` (root)
4. Deploy!

### Vercel
1. Import your repository
2. Framework preset: Other
3. Deploy!

### GitHub Pages
1. Enable GitHub Pages in repository settings
2. Source: Deploy from a branch
3. Branch: main, folder: / (root)

### Traditional Hosting
Upload all files to your web server's public directory.

## 📱 Browser Support

- **Chrome**: 90+ ✅
- **Safari**: 14+ ✅
- **Firefox**: 88+ ✅
- **Edge**: 90+ ✅
- **Mobile**: iOS Safari, Chrome Mobile ✅

## ♿ Accessibility

- Semantic HTML structure
- ARIA labels and roles
- Keyboard navigation support
- Focus indicators
- Reduced motion support
- High contrast mode support
- Screen reader friendly

## 🔧 Performance

- **Lighthouse Score**: Target 90+ in all categories
- **Image Optimization**: Lazy loading and WebP support
- **CSS/JS Minification**: Ready for production builds
- **Resource Preloading**: Critical resources prioritized
- **Intersection Observer**: Efficient scroll animations

## 🎬 Video Requirements

### Hero Video
- **Format**: MP4 (H.264 codec)
- **Resolution**: 1920x1080 (minimum)
- **Frame Rate**: 24-30 fps
- **Duration**: 10-30 seconds (loop)
- **File Size**: Under 10MB for optimal loading
- **Content**: Romantic, elegant, wedding-themed

### Fallback Image
- **Format**: JPG
- **Resolution**: 1920x1080
- **Content**: Representative wedding image
- **Optimization**: Compressed for web

## 📸 Gallery Requirements

### Photo Specifications
- **Count**: 12 photos
- **Format**: JPG or PNG
- **Size**: 800x600 minimum, 1200x800 recommended
- **Quality**: High resolution, well-lit
- **Content**: Wedding photos, engagement shots, etc.

### Naming Convention
```
1.jpg, 2.jpg, 3.jpg, ..., 12.jpg
```

## 🗓️ Calendar Integration

The "Add to Calendar" button generates an .ics file with:
- **Event**: Jibin & Jisly Wedding
- **Date**: November 24, 2025
- **Time**: 10:30 AM - 2:30 PM
- **Location**: St. Mary's Church and Parish Hall
- **Reminder**: 1 hour before event

## 🗺️ Google Maps Integration

### Current Setup
- **Church**: St. Mary's Church
- **Reception**: Parish Hall
- **Map URL**: [Google Maps Link](https://maps.app.goo.gl/DXDbikKUhDCAuMpa9)

### Customization
1. Update the Google Maps embed URL in `index.html`
2. Modify venue names and addresses
3. Update the map buttons to point to correct locations

## 🎨 Animation Customization

### CSS Animations
Modify keyframes in `styles.css`:
```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
```

### JavaScript Animations
Adjust timing in `script.js`:
```javascript
// Quote rotation interval (5 seconds)
setInterval(nextQuote, 5000);
```

## 📱 Mobile Optimization

- Touch-friendly buttons and interactions
- Responsive grid layouts
- Mobile-first navigation
- Optimized touch targets (44px minimum)
- Swipe gestures for gallery

## 🔍 SEO Optimization

- Semantic HTML structure
- Meta tags for social sharing
- Open Graph and Twitter Card support
- Structured data markup ready
- Fast loading times
- Mobile-friendly design

## 🚀 Performance Tips

1. **Optimize Images**: Compress photos and use appropriate formats
2. **Video Optimization**: Keep hero video under 10MB
3. **Font Loading**: Google Fonts are preloaded for performance
4. **Lazy Loading**: Gallery images load as needed
5. **Minification**: CSS and JS are ready for production minification

## 🐛 Troubleshooting

### Common Issues

**Video Not Playing**
- Check file format (MP4 required)
- Ensure file path is correct
- Verify video codec (H.264)

**Images Not Loading**
- Check file paths in `/public/gallery/`
- Verify image formats (JPG/PNG)
- Check file permissions

**Countdown Not Working**
- Verify date format in `script.js`
- Check browser console for errors
- Ensure JavaScript is enabled

**Mobile Menu Issues**
- Check CSS media queries
- Verify JavaScript event listeners
- Test on actual mobile devices

### Debug Mode
Add this to browser console for debugging:
```javascript
localStorage.setItem('debug', 'true');
```

## 📞 Support

For technical support or customization requests:
- **Developer**: Jibin James
- **Email**: [Your Email]
- **GitHub**: [Your GitHub]

## 📄 License

This project is created for the wedding of Jibin & Jisly.
All rights reserved.

---

**Made with ❤️ for Jibin & Jisly's special day**

*November 24, 2025*
