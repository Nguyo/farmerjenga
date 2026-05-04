# 🌱 JengaFarmer — FarmIQ Platform

Farm-to-table marketplace connecting Kenyan farmers, consumers, and riders via AI-powered agriculture tools and M-Pesa escrow payments.

## 📁 Project Structure

```
jengafarmer/
├── index.html      ← Main app (all screens)
├── styles.css      ← All styling & design system
├── app.js          ← UI logic (persona switching, OTP, interactions)
├── vercel.json     ← Vercel deployment config
├── package.json    ← Project metadata
└── README.md       ← This file
```

## 🚀 Deploy to Vercel (3 ways)

### Option 1 — Drag & Drop (Easiest, no account needed)
1. Go to [vercel.com](https://vercel.com) and sign up (free)
2. On your dashboard, click **"Add New Project"**
3. Drag and drop the entire `jengafarmer/` folder onto the page
4. Click **Deploy** — you're live in ~30 seconds!

### Option 2 — GitHub (Recommended for ongoing updates)
1. Create a free GitHub account at [github.com](https://github.com)
2. Create a new repository called `jengafarmer`
3. Upload all files in this folder to the repository
4. Go to [vercel.com](https://vercel.com) → **Add New Project** → **Import from GitHub**
5. Select your `jengafarmer` repo → click **Deploy**
6. Every time you push to GitHub, Vercel auto-deploys!

### Option 3 — Vercel CLI
```bash
# Install Vercel CLI
npm install -g vercel

# Inside the jengafarmer folder
cd jengafarmer
vercel

# Follow the prompts — your site is live!
```

## 🌍 Custom Domain (.co.ke)

After deploying on Vercel:
1. Go to your project → **Settings → Domains**
2. Add your domain e.g. `jengafarmer.co.ke`
3. Register `.co.ke` domains at [KENIC](https://kenic.or.ke) or [Safaricom Domains](https://domains.safaricom.co.ke)
4. Point DNS to Vercel's nameservers (Vercel shows you the records)

## 📱 Screens Included

| Persona | Screen | Features |
|---------|--------|----------|
| 🌾 Farmer | Dashboard | Weather widget, task list, earnings, quick actions |
| 🛒 Consumer | Marketplace | Search, category filters, produce grid, M-Pesa badge |
| 🏍️ Rider | Job Board | Earnings stats, cold-chain alert, accept/skip jobs |
| 🔬 AI Doctor | Plant Scanner | Scan animation, diagnosis card, treatment recommendations |
| 📦 Delivery | OTP Confirm | Status bar, OTP entry, M-Pesa payment release animation |

## 🔧 Next Steps (Backend Integration)

To make the app fully functional, integrate:
- **M-Pesa Daraja API** → [developer.safaricom.co.ke](https://developer.safaricom.co.ke)
- **Africa's Talking** → SMS/USSD for low-connectivity farmers
- **Google Maps API** → Live rider tracking
- **Firebase / Supabase** → User auth and database
- **TensorFlow.js** → On-device plant disease detection

## 🎨 Design System

- **Primary Green:** `#2E7D32`
- **Light Green:** `#A5D6A7`
- **Accent Orange:** `#FB8C00`
- **Alert Red:** `#E53935`
- **Background:** `#F4F9F4`
- **Font:** Plus Jakarta Sans

---

Built with ❤️ for Kenyan farmers.
