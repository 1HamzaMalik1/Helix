# 🚀 Deploy to Vercel - Complete Guide

## ✅ Your Site is Ready to Deploy!

Local build works perfectly. Now let's get it on Vercel.

---

## 🎯 Quick Fix for Current Error

The error you're getting is because Vercel needs to be told to use `--legacy-peer-deps`.

### **SOLUTION: Configure Vercel Install Command**

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Select your project**: `helixcore-studio`
3. **Go to Settings** → **General**
4. **Find "Build & Development Settings"**
5. **Override Install Command**:
   ```bash
   npm install --legacy-peer-deps
   ```
6. **Click Save**
7. **Go to Deployments** → **Redeploy**

**That's it!** Your site will deploy successfully.

---

## 📋 Alternative: Link to GitHub First

If you haven't linked to GitHub yet:

### Step 1: Create GitHub Repository

```bash
# Already initialized locally, just need to add remote

# If you have a GitHub repo URL, add it:
git remote add origin https://github.com/YOUR_USERNAME/helixcore-studio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

### Step 2: Connect Vercel to GitHub

1. Go to https://vercel.com/new
2. Click **Import Git Repository**
3. Select your GitHub repo
4. **IMPORTANT**: Before deploying, click **Environment Variables** (optional)
5. Click **Deploy**

---

## ⚙️ Required Vercel Configuration

When deploying, set this in Vercel:

### Build Settings:
- **Framework Preset**: Next.js
- **Build Command**: `npm run build` (default)
- **Install Command**: `npm install --legacy-peer-deps` ⚠️ **IMPORTANT**
- **Output Directory**: `.next` (default)
- **Node Version**: 18.x

---

## 🔧 What Was Fixed

### Removed Conflicting Dependencies:
- ❌ `@react-three/drei` (required React 19)
- ❌ `@react-three/fiber` (required React 19)
- ❌ `three` (not used)
- ❌ `components/Scene.tsx` (unused 3D component)

### Current Clean Dependencies:
```json
{
  "react": "^18.3.1",
  "react-dom": "^18.3.1",
  "next": "^14.2.35",
  "nodemailer": "^7.0.12",
  "framer-motion": "^12.26.0",
  "lucide-react": "^0.344.0",
  "react-intersection-observer": "^9.5.3"
}
```

---

## 📝 Files Created for Deployment

### `.npmrc` (tells npm to use legacy peer deps)
```
legacy-peer-deps=true
engine-strict=false
```

### `.vercelignore` (files to ignore during deployment)
```
node_modules
.next
.env.local
*.log
```

### `.gitignore` (should already exist)
Make sure it includes:
```
node_modules/
.next/
.env.local
.vercel
*.log
.DS_Store
```

---

## 🚨 Common Issues & Fixes

### Issue 1: "npm install" fails on Vercel
**Solution**: Set Install Command to `npm install --legacy-peer-deps` in Vercel dashboard

### Issue 2: Build succeeds but site is blank
**Solution**: Check console for errors, usually related to missing environment variables

### Issue 3: API routes not working
**Solution**: API routes work automatically, no special configuration needed

### Issue 4: Images not loading
**Solution**: Make sure images are in `/public` folder and referenced as `/image.png`

---

## 🎨 Current Site Features (All Working)

✅ Homepage with hero section
✅ Services section  
✅ Team section with member photos
✅ Process/Methodology section (mobile-optimized)
✅ Contact form (opens email client)
✅ Responsive navbar
✅ Footer with links
✅ All animations working
✅ Poppins font loaded
✅ Mobile-optimized (no scrollbars)

---

## 🌐 After Deployment

Once deployed, you'll get:
- **Production URL**: `https://helixcore-studio.vercel.app`
- **Custom domain**: You can add your own domain in Vercel settings
- **Automatic deployments**: Every push to main branch redeploys
- **Preview deployments**: Every PR gets a preview URL

---

## ✅ Deployment Checklist

- [x] Local build works (`npm run build`)
- [x] Dependencies cleaned
- [x] `.npmrc` file created
- [x] `.vercelignore` file created
- [x] Git initialized
- [x] All changes committed
- [ ] Connected to GitHub (optional)
- [ ] Vercel Install Command set to `npm install --legacy-peer-deps`
- [ ] Deploy triggered

---

## 🎯 DO THIS NOW:

### Quick Deploy (Current Setup):

Since you've already tried deploying with Vercel CLI:

1. **Go to Vercel Dashboard**: https://vercel.com/dashboard
2. **Find your project**: `helixcore-studio`
3. **Settings** → **General** → **Build & Development Settings**
4. **Override Install Command**: 
   ```
   npm install --legacy-peer-deps
   ```
5. **Save**
6. **Deployments tab** → Click **Redeploy**
7. ✅ **Success!**

---

## 💡 Pro Tips

### Custom Domain:
After deployment, add your domain:
- Vercel Dashboard → Project → Settings → Domains
- Add `helixcorestudio.com` or your domain
- Follow DNS instructions

### Environment Variables:
If using Web3Forms later:
- Settings → Environment Variables
- Add `WEB3FORMS_ACCESS_KEY`
- Redeploy

### Performance:
- Your site is already optimized
- Vercel's CDN will make it super fast
- Automatic image optimization included

---

## 📞 Contact Form Setup (After Deployment)

Your contact form currently uses mailto (opens email client).

**To enable automatic sending (optional):**
1. Sign up at https://web3forms.com (FREE)
2. Get your Access Key
3. Add to Vercel: Settings → Environment Variables
   - Key: `WEB3FORMS_ACCESS_KEY`
   - Value: `your-access-key`
4. Redeploy

---

## ✨ You're Almost There!

Just set the install command in Vercel dashboard and your site will be live! 🎉

**Current Status**:
- ✅ Build: Working locally
- ✅ Code: Clean & ready
- ✅ Git: Initialized & committed
- ⚠️ Vercel: Needs install command override

**Next Step**: Configure Vercel dashboard → Deploy → Done! 🚀

