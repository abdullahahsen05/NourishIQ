# NourishIQ - Nutrition & Wellness Dashboard

A modern, comprehensive nutrition and wellness tracking dashboard built with React, TypeScript, and TailwindCSS. Track your daily nutrition intake, exercise, sleep, water consumption, and weight progress with an intuitive AI-powered interface.

## 🎯 Features

- **📊 Dashboard**: Get a comprehensive overview of your daily wellness metrics
- **📅 Calendar Integration**: Plan and track meals and activities
- **📈 Progress Tracking**: Visualize your nutrition and fitness progress over time
- **🤖 AI Assistant**: Get personalized nutrition and wellness recommendations
- **💧 Hydration Tracking**: Monitor daily water intake
- **💪 Exercise Metrics**: Track steps and physical activity
- **😴 Sleep Monitoring**: Log and analyze sleep patterns
- **⚖️ Weight Management**: Track weight changes and trends
- **🍽️ Daily Meal Planning**: Plan and log daily meals
- **📋 Smart Recommendations**: AI-powered suggestions based on your data

## 🛠️ Tech Stack

### Frontend
- **React** 18.3 - UI library
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **TailwindCSS** - Utility-first styling framework
- **shadcn/ui** - High-quality, accessible UI components
- **Radix UI** - Unstyled, accessible component primitives

### State Management & Data
- **TanStack React Query** - Server state management
- **React Hook Form** - Performant, flexible form validation
- **Zod** - TypeScript-first schema validation

### Features & Utilities
- **React Router** 6 - Client-side routing
- **Recharts** - Composable charting library
- **date-fns** - Date utilities
- **Lucide React** - Beautiful SVG icons
- **Sonner** - Toast notifications
- **next-themes** - Theme switching (light/dark mode)

### Development
- **Vitest** - Unit and integration testing
- **ESLint** - Code quality
- **PostCSS** - CSS processing

## 📁 Project Structure

```
NourishIQ/
├── src/
│   ├── pages/
│   │   ├── Index.tsx          # Dashboard home page
│   │   ├── Calendar.tsx       # Calendar planning page
│   │   ├── Progress.tsx       # Progress tracking page
│   │   ├── AIChat.tsx         # AI assistant page
│   │   └── NotFound.tsx       # 404 page
│   ├── components/
│   │   ├── Header.tsx         # Navigation header
│   │   ├── NavLink.tsx        # Navigation links
│   │   ├── ui/                # shadcn UI components
│   │   └── widgets/           # Dashboard widgets
│   │       ├── AIAssistant.tsx
│   │       ├── DailyInputs.tsx
│   │       ├── NutritionCard.tsx
│   │       ├── SleepCard.tsx
│   │       ├── StepsCard.tsx
│   │       ├── TodaysPlan.tsx
│   │       ├── WaterCard.tsx
│   │       └── WeightCard.tsx
│   ├── hooks/                 # Custom React hooks
│   ├── lib/                   # Utilities and helpers
│   ├── assets/                # Static assets
│   ├── App.tsx                # Main app component
│   └── main.tsx               # Entry point
├── public/                    # Static files
├── package.json               # Dependencies & scripts
├── vite.config.ts             # Vite configuration
├── tailwind.config.ts         # TailwindCSS configuration
├── tsconfig.json              # TypeScript configuration
└── vitest.config.ts           # Vitest configuration
```

## 🚀 Getting Started

### Prerequisites
- Node.js 18+ or Bun runtime
- npm, yarn, or bun package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/abdullahahsen05/NourishIQ.git
cd NourishIQ
```

2. Install dependencies:
```bash
npm install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
bun run dev
```

The application will be available at `http://localhost:5173`

## 📝 Available Scripts

- `npm run dev` - Start the development server with hot module replacement
- `npm run build` - Create an optimized production build
- `npm run build:dev` - Create a development build
- `npm run preview` - Preview the production build locally
- `npm run lint` - Run ESLint to check code quality
- `npm run test` - Run tests with Vitest once
- `npm run test:watch` - Run tests in watch mode for development

## 🎨 Design System

The project uses a modern design system built on:
- **shadcn/ui** - Pre-built, customizable components
- **TailwindCSS** - Utility-first CSS framework
- **Radix UI** - Accessible component primitives
- Responsive design supporting mobile, tablet, and desktop

## 🔐 Type Safety

Full TypeScript support ensures:
- Type-safe components
- Compile-time error detection
- Better IDE autocomplete and documentation
- Safer refactoring

## 📦 Component Library

### UI Components (shadcn/ui)
- Accordion, Alert Dialog, Avatar, Button
- Calendar, Card, Checkbox, Dialog
- Dropdown Menu, Form, Input, Label
- Select, Slider, Switch, Tabs, Toast
- Popover, Progress, Radio Group, ScrollArea
- And many more...

### Custom Widgets
Domain-specific widgets for nutrition and wellness tracking with pre-built functionality for common health metrics.

## 🧪 Testing

The project uses **Vitest** for unit and integration testing:

```bash
# Run tests once
npm run test

# Watch mode for development
npm run test:watch
```

## 📈 Performance Optimizations

- Vite's optimized bundling
- TailwindCSS tree-shaking for minimal CSS
- React 18 concurrent features
- Code splitting and lazy loading via React Router
- Hardware-accelerated animations with TailwindCSS

## 🌐 Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📄 License

This project is private and maintained by the NourishIQ team.

## 🤝 Contributing

For contributions, please:
1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For issues, questions, or suggestions, please open an issue on the GitHub repository.

---

**Last Updated**: May 1, 2026
**Version**: 0.0.0
