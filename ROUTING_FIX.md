# Routing Fix Guide for Uploaded Files

## Problem
When uploading React Router files to a web host, all routes redirect to a 404 error because the server doesn't know how to handle client-side routing.

## Solution
Your React app uses **client-side routing** - React Router handles navigation in the browser. The server must always serve `index.html` for any route request, and React Router will handle the rest.

## Configuration Files Added

### 1. **.htaccess** (For Apache Servers)
Location: `dist/.htaccess`

This file:
- Redirects all non-file/non-directory requests to `index.html`
- Enables gzip compression
- Sets cache headers for optimal performance

**Ensure your hosting provider has mod_rewrite enabled.**

### 2. **web.config** (For IIS Servers)
Location: `dist/web.config`

This file:
- Configures IIS URL rewrite module
- Redirects all routes to `index.html`
- Enables compression
- Sets caching policies

### 3. **netlify.toml** (For Netlify)
Location: Project root `netlify.toml`

Automatically handles:
- All routes redirect to `/index.html` with status 200
- Cache busting for assets
- Proper cache headers

### 4. **vercel.json** (For Vercel)
Location: Project root `vercel.json`

Automatically handles:
- Route rewrites to `/index.html`
- Cache control headers
- Asset optimization

## Deployment Steps by Host Type

### **Shared Hosting (cPanel, GoDaddy, Bluehost, etc.)**
1. Delete everything from your `public_html` folder
2. Upload contents of the `dist` folder to `public_html`
3. Upload `.htaccess` to the root of `public_html` (from dist folder)
4. Test your routes: `/Home`, `/About`, `/Products`, `/Buttons`, `/States`, `/Contacts`, `/Services`

**If routes still don't work:**
- Contact hosting support to enable `mod_rewrite`
- Ask them to use the `.htaccess` configuration

### **Netlify**
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. `netlify.toml` is automatically detected and applied
5. Deploy!

### **Vercel**
1. Import project from GitHub
2. Vercel auto-detects Vite + React
3. `vercel.json` is automatically used
4. Deploy!

### **IIS Server (Windows Hosting)**
1. Upload `dist` folder contents to your web root
2. Ensure `web.config` is in the root
3. Enable URL Rewrite module in IIS (ask hosting provider if not enabled)
4. Test your routes

### **Docker / Custom Linux Server**
Use Nginx configuration:

```nginx
server {
    listen 80;
    server_name your-domain.com;
    root /var/www/dist;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    location = /index.html {
        add_header Cache-Control "no-cache, no-store, must-revalidate";
    }
}
```

## Testing Routes Locally
Before uploading, test the production build:

```bash
npm run build
npm run preview
```

Visit `http://localhost:4173` and test all routes:
- `/` (home/banner)
- `/Home`
- `/About`
- `/Products`
- `/Buttons`
- `/States`
- `/Contacts`
- `/Services`

## Routes in Your App
Currently configured routes:

**Layout One:**
- `/` - Banner (home)
- `/Home` - Home page
- `/About` - About page
- `/Products` - Products page
- `/Buttons` - Buttons demo
- `/States` - States demo

**Layout Two:**
- `/Contacts` - Contacts page
- `/Services` - Services page

## Common Issues & Fixes

| Issue | Cause | Solution |
|-------|-------|----------|
| 404 on all routes | Server not rewriting to index.html | Ensure .htaccess or web.config is uploaded |
| Routes work but styling is broken | Asset paths are wrong | Check that all CSS/image paths use relative imports |
| Slow performance | No caching configured | Ensure cache headers are set (included in configs) |
| HTTPS issues | Mixed content | Ensure all asset URLs use relative paths |

## Verification Checklist

After uploading:
- [ ] Open browser dev tools (F12)
- [ ] Go to Network tab
- [ ] Click a route (e.g., `/About`)
- [ ] Verify `index.html` is loaded (not 404)
- [ ] Verify styles and images load correctly
- [ ] Check Console for any JavaScript errors

## Support

If routing still doesn't work:
1. Check hosting provider documentation for SPA deployment
2. Verify .htaccess or web.config is uploaded
3. Confirm mod_rewrite (Apache) or URL Rewrite (IIS) is enabled
4. Check browser console for JavaScript errors
5. Review server logs for rewrite rules

---

**Last Updated:** 29/11/2025
**Status:** Ready for deployment ✅
