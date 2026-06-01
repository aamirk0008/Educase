# PopX — Mobile Web App

A pixel-perfect mobile-first web application built with React + Vite and Tailwind CSS v4. PopX simulates a real-world authentication flow with a centered mobile app interface on desktop browsers.

🔗 **Live Demo:** [https://educase-red-gamma.vercel.app/](https://educase-red-gamma.vercel.app/)

## 🔑 Demo Credentials

Use these to log in instantly without signing up:

```
Email:    marry@gmail.com
Password: marry123
```

---

---

## 📱 Screenshots

| Welcome | Login | Sign Up | Account Settings |
|---------|-------|---------|-----------------|
| Landing screen with CTAs | Email & password login | Full registration form | Profile view with logout |

---

## ✨ Features

- 📱 **Mobile App Interface** — 390×844px phone frame centered on desktop
- 🔐 **Auth Flow** — Login, Sign Up, and protected routes
- 💾 **LocalStorage Persistence** — Session survives page refresh
- 🧭 **React Router Navigation** — Seamless page transitions with back button UX
- ✅ **Form Validation** — Required fields, error messages, active/disabled button states
- 🎨 **Pixel-perfect UI** — Matches original Figma/design specs closely
- 👤 **Demo Credentials** — Pre-seeded user for instant login testing

---

## 🚀 Tech Stack

| Tech | Version | Purpose |
|------|---------|---------|
| React | 18+ | UI library |
| Vite | 5+ | Build tool & dev server |
| Tailwind CSS | v4 | Utility-first styling |
| React Router DOM | v6 | Client-side routing |

---

## 🗂️ Project Structure

```
src/
├── components/
│   └── MobileFrame.jsx       # Centered phone frame wrapper
├── context/
│   └── AuthContext.jsx       # Auth state, login, signup, logout
├── pages/
│   ├── Welcome.jsx           # Landing page with CTAs
│   ├── Login.jsx             # Sign in form
│   ├── SignUp.jsx            # Registration form
│   └── AccountSettings.jsx  # Protected profile page
├── App.jsx                   # Routes + protected route logic
├── main.jsx                  # App entry point
└── index.css                 # Tailwind v4 import
```

---

## ⚙️ Getting Started

### Prerequisites

- Node.js v18+
- npm v9+

### Installation

```bash
# 1. Clone the repository
git clone https://github.com/your-username/popx-app.git
cd client-side

# 2. Install dependencies
npm install

# 3. Start development server
npm run dev
```

App will be running at `http://localhost:5173`

### Build for Production

```bash
npm run build
npm run preview
```

---

## 🔑 Demo Credentials

Use these to log in instantly without signing up:

```
Email:    marry@gmail.com
Password: marry123
```

---

## 📄 Pages & Routes

| Route | Page | Access |
|-------|------|--------|
| `/` | Welcome | Public |
| `/login` | Login | Public (redirects if logged in) |
| `/signup` | Sign Up | Public (redirects if logged in) |
| `/account` | Account Settings | Protected (redirects to `/` if not logged in) |

---

## 🧠 Auth Logic

- On **Sign Up** — new user is saved to `localStorage` under `popx_users` array
- On **Login** — credentials are matched against saved users + demo user
- On **Logout** — active session (`popx_user`) is cleared from `localStorage`
- **Protected routes** — redirect unauthenticated users back to `/`
- **Authenticated routes** (login/signup) — redirect logged-in users to `/account`

---

## 🌐 Deployment

This app is deployed on **Vercel**.

To deploy your own fork:

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel
```

Or connect your GitHub repo directly at [vercel.com](https://vercel.com) for automatic deployments on every push.

---

## 👨‍💻 Author

**Sheikh Aamir**
- 📧 aamirsheikh0008@gmail.com
- 🔗 [LinkedIn](https://linkedin.com/in/your-profile)
- 🐙 [GitHub](https://github.com/your-username)
- 🌐 [Portfolio](https://your-portfolio.com)

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).
