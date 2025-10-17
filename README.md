# Unique File Organizer - Website

This is the official website for Unique File Organizer, a smart file organization tool for Windows.

## 📁 Structure

```
website/
├── index.html          # Home page
├── download.html       # Download page
├── faq.html           # FAQ page
├── css/
│   └── styles.css     # Main stylesheet
├── js/
│   ├── main.js        # Main JavaScript
│   ├── paypal.js      # PayPal integration
│   └── faq.js         # FAQ functionality
└── README.md          # This file
```

## 🚀 Features

### All Pages Include:
- ✅ Responsive design (mobile, tablet, desktop)
- ✅ Sticky header with navigation
- ✅ Donate button always visible in header
- ✅ PayPal donation integration
- ✅ Advertisement placeholders (Google AdSense ready)
- ✅ Professional footer with links
- ✅ Smooth animations and transitions

### Home Page (index.html)
- Hero section with call-to-action
- Features showcase with icons
- Benefits section
- Multiple ad placements
- Call-to-action section

### Download Page (download.html)
- Download options for different Windows versions (64-bit, 32-bit, ARM64)
- Installation instructions
- System requirements
- Alternative download options
- Release notes
- Support section

### FAQ Page (faq.html)
- Categorized questions (General, Features, Technical, Troubleshooting)
- Accordion-style answers
- Interactive category filtering
- Search functionality (can be enabled)

## 💰 Monetization

### Advertisement Placeholders
The website includes multiple ad placeholders ready for Google AdSense or other ad networks:

1. **Replace the placeholder code** in each HTML file:
```html
<ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"  <!-- Replace with your publisher ID -->
     data-ad-slot="XXXXXXXXXX"                  <!-- Replace with your ad slot ID -->
     data-ad-format="auto"
     data-full-width-responsive="true"></ins>
```

2. **Ad Locations:**
   - Home page: 2 ad units
   - Download page: 2 ad units
   - FAQ page: 1 ad unit

### PayPal Donation Integration

#### Setup Instructions:

1. **Get PayPal Client ID:**
   - Go to [PayPal Developer Dashboard](https://developer.paypal.com/dashboard/)
   - Create a new app or use existing one
   - Copy your Client ID

2. **Update Configuration:**
   Open `js/paypal.js` and update:
   ```javascript
   const PAYPAL_CONFIG = {
       clientId: 'YOUR_PAYPAL_CLIENT_ID_HERE',  // Replace with your Client ID
       currency: 'USD',
       environment: 'sandbox'  // Change to 'production' for live
   };
   ```

3. **Alternative: Use PayPal.me Link**
   If you prefer a simpler approach, update the `openPayPalDonation()` function:
   ```javascript
   function openPayPalDonation() {
       const paypalUrl = 'https://www.paypal.com/paypalme/yourusername';
       window.open(paypalUrl, '_blank');
   }
   ```

4. **Donation Buttons:**
   - Header donate button (all pages)
   - Footer donate button (all pages)
   - Support section buttons (download and FAQ pages)

## 🛠️ Setup & Deployment

### Local Testing

1. **Simple HTTP Server (Python):**
   ```bash
   cd unique-file-organizer/website
   python -m http.server 8000
   ```
   Then open: http://localhost:8000

2. **Using Node.js:**
   ```bash
   npx http-server
   ```

3. **Using VS Code:**
   - Install "Live Server" extension
   - Right-click on `index.html`
   - Select "Open with Live Server"

### Deployment Options

#### 1. GitHub Pages (Free)
```bash
# Push to GitHub repository
git add .
git commit -m "Add website"
git push origin main

# Enable GitHub Pages in repository settings
# Select branch: main, folder: /website
```

#### 2. Netlify (Free)
- Drag and drop the `website` folder to [Netlify Drop](https://app.netlify.com/drop)
- Or connect your GitHub repository for automatic deployments

#### 3. Vercel (Free)
```bash
npm i -g vercel
cd website
vercel
```

#### 4. Traditional Web Hosting
- Upload all files via FTP/SFTP
- Ensure proper file permissions
- Configure domain and SSL certificate

## 🎨 Customization

### Colors
Edit CSS variables in `css/styles.css`:
```css
:root {
    --primary-color: #2563eb;      /* Main brand color */
    --secondary-color: #64748b;    /* Secondary color */
    --success-color: #10b981;      /* Success messages */
    --danger-color: #ef4444;       /* Error messages */
    /* ... more colors ... */
}
```

### Content
- Update text content in HTML files
- Replace placeholder links (GitHub, email, etc.)
- Add your own images/logos
- Customize meta descriptions for SEO

### Analytics
Add Google Analytics or other tracking:
```html
<!-- Add before </head> in each HTML file -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

## 📝 Configuration Checklist

Before going live, update:

- [ ] PayPal Client ID in `js/paypal.js`
- [ ] Google AdSense publisher ID in all HTML files
- [ ] GitHub repository links
- [ ] Contact email addresses
- [ ] Meta descriptions for SEO
- [ ] Favicon (add to root directory)
- [ ] Open Graph tags for social sharing
- [ ] Google Analytics tracking ID
- [ ] Actual download links in `download.html`
- [ ] Microsoft Store link (when available)

## 🔒 Security Notes

- All PayPal transactions are handled securely by PayPal
- No sensitive data is stored on the website
- HTTPS is recommended for production deployment
- Keep dependencies updated

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🐛 Troubleshooting

### PayPal Button Not Showing
- Check browser console for errors
- Verify Client ID is correct
- Ensure PayPal SDK script is loading
- Check network connectivity

### Ads Not Displaying
- Verify AdSense account is approved
- Check ad unit IDs are correct
- Ensure ads.txt file is configured
- Wait 24-48 hours after setup

### Styling Issues
- Clear browser cache
- Check CSS file is loading
- Verify no conflicting styles
- Test in different browsers

## 📄 License

This website is part of the Unique File Organizer project, licensed under MIT License.

## 🤝 Contributing

Contributions are welcome! Please:
1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For issues or questions:
- Open an issue on GitHub
- Email: support@example.com (update with your email)

---

**Made with ❤️ for the Unique File Organizer community**