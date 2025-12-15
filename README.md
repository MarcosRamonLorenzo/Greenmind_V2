# 🌱 Greenmind

A modern sustainability and eco-friendly challenges application built with React and Vite. Greenmind helps users track their environmental impact through daily challenges, rewards, and gamification features.

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Environment Variables](#environment-variables)
- [Scripts](#scripts)
- [Dependencies](#dependencies)
- [Contributing](#contributing)

## 🌍 Overview

Greenmind is a sustainability-focused web application that encourages users to adopt eco-friendly habits through gamified challenges. Users can complete various environmental challenges across different categories like mobility, recycling, and plastic reduction, earning rewards and tracking their progress.

## ✨ Features

- **🔐 User Authentication**: Secure login and signup system powered by Supabase
- **🏆 Challenge System**: Browse and complete eco-friendly challenges across multiple categories
- **🎯 Progress Tracking**: Monitor weekly goals and track completion percentages
- **💰 Rewards System**: Earn points and claim rewards with animated confetti celebrations
- **📊 User Profile**: View personal statistics and achievements
- **🗺️ Interactive Maps**: Explore challenges and locations using React Leaflet
- **📱 Responsive Design**: Mobile-first design with bottom navigation
- **🎨 Modern UI**: Beautiful animations using Framer Motion and Lucide icons
- **📸 QR Code Scanning**: Scan QR codes to complete challenges

## 🛠️ Tech Stack

### Core Framework
- **React 19.2.0** - Modern UI library with latest features
- **Vite 7.2.4** - Next-generation frontend build tool
- **React Router DOM 7.9.6** - Declarative routing for React

### Backend & Database
- **Supabase 2.86.0** - Backend-as-a-Service for authentication and database

### UI & Styling
- **Lucide React 0.555.0** - Beautiful & consistent icon set
- **React Icons 5.5.0** - Popular icon library
- **Motion 12.23.26** - Production-ready animation library (Framer Motion)
- **Canvas Confetti 1.9.4** - Celebration animations

### Maps & Location
- **React Leaflet 5.0.0** - Interactive map components

### Development Tools
- **ESLint 9.39.1** - Code linting and quality
- **Babel Plugin React Compiler 1.0.0** - React compiler for optimization
- **Vite Plugin React 5.1.1** - Official React plugin for Vite

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher recommended)
- npm or yarn package manager
- Supabase account and project

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/greenmind.git
cd greenmind
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root directory:
```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

4. Start the development server:
```bash
npm run dev
```

The application will be available at `http://localhost:3000`

## 📁 Project Structure

```
greenmind/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images and media files
│   ├── components/     # Reusable React components
│   │   ├── BottomNav.jsx
│   │   ├── ConfettiModal.jsx
│   │   ├── GoBack.jsx
│   │   ├── HomeCard.jsx
│   │   ├── Map.jsx
│   │   ├── MoneyInfo.jsx
│   │   └── ProgressBar.jsx
│   ├── contexts/       # React Context providers
│   │   └── UserProvider.jsx
│   ├── data/          # Static data and constants
│   │   └── data.js
│   ├── hooks/         # Custom React hooks
│   │   └── useUser.jsx
│   ├── pages/         # Page components
│   │   ├── Home.jsx
│   │   ├── LogIn.jsx
│   │   ├── SignUp.jsx
│   │   ├── Categories.jsx
│   │   ├── CategoryPage.jsx
│   │   ├── ChallengeInfo.jsx
│   │   ├── Profile.jsx
│   │   ├── Recompensas.jsx
│   │   └── Scan.jsx
│   ├── supabase/      # Supabase configuration
│   │   └── supabase.js
│   ├── App.jsx        # Main application component
│   ├── main.jsx       # Application entry point
│   └── index.css      # Global styles
├── .env               # Environment variables
├── index.html         # HTML entry point
├── package.json       # Project dependencies
└── vite.config.js     # Vite configuration
```

## 🔐 Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_KEY=your_supabase_anon_key
```

## 📜 Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint for code quality

## 📦 Dependencies

### Production Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| `@supabase/supabase-js` | ^2.86.0 | Supabase client library |
| `canvas-confetti` | ^1.9.4 | Confetti animations |
| `lucide-react` | ^0.555.0 | Icon library |
| `motion` | ^12.23.26 | Animation library |
| `react` | ^19.2.0 | React library |
| `react-dom` | ^19.2.0 | React DOM renderer |
| `react-icons` | ^5.5.0 | Icon components |
| `react-leaflet` | ^5.0.0 | Leaflet maps for React |
| `react-router-dom` | ^7.9.6 | Routing library |

### Development Dependencies

| Package | Version | Description |
|---------|---------|-------------|
| `@eslint/js` | ^9.39.1 | ESLint JavaScript config |
| `@types/react` | ^19.2.5 | TypeScript types for React |
| `@types/react-dom` | ^19.2.3 | TypeScript types for React DOM |
| `@vitejs/plugin-react` | ^5.1.1 | Vite React plugin |
| `babel-plugin-react-compiler` | ^1.0.0 | React compiler plugin |
| `eslint` | ^9.39.1 | Code linting tool |
| `eslint-plugin-react-hooks` | ^7.0.1 | ESLint rules for React Hooks |
| `eslint-plugin-react-refresh` | ^0.4.24 | ESLint rules for React Refresh |
| `globals` | ^16.5.0 | Global identifiers |
| `vite` | ^7.2.4 | Build tool |

## 🎨 Key Features Explained

### Authentication Flow
The app uses Supabase for authentication, with protected routes that redirect unauthenticated users to the login page.

### Challenge Categories
- **Mobility**: Challenges related to sustainable transportation (bike, bus, carpool)
- **Recycling**: Waste reduction and recycling challenges
- **Plastic**: Plastic-free lifestyle challenges
- **Shopping**: Sustainable shopping habits

### Rewards System
Users earn points by completing challenges and can claim rewards through an animated modal with confetti effects.

### Progress Tracking
Weekly goals are tracked with visual progress bars, and users can see their streak and total earnings.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.

## 🙏 Acknowledgments

- Supabase for the excellent backend infrastructure
- The React team for the amazing framework
- All contributors to the open-source libraries used in this project

---


