# 🐸 Ribbit Up: Frog Climber - Press Kit

A beautiful, responsive press kit website for the indie game **Ribbit Up: Frog Climber** - a charming cozy adventure game featuring a frog protagonist on a climbing journey.

![Ribbit Up: Frog Climber](https://img.shields.io/badge/Game-Ribbit%20Up%3A%20Frog%20Climber-green?style=for-the-badge)
![Build Status](https://img.shields.io/badge/Build-Passing-brightgreen?style=for-the-badge)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)

## 🎮 About the Game

**Ribbit Up: Frog Climber** is a cozy climbing adventure game where players take on the role of Ribbit, a charming frog seeking revenge on the witch who pushed them down. The game features:

- **Open-world exploration** in a mysterious swamp environment
- **Climbing mechanics** - if you can reach it, you can climb it!
- **Multiplayer support** - play solo or with friends online
- **Cozy gameplay** with puzzle-solving and cooking elements
- **Character customization** and base building
- **Meaningful relationships** with diverse NPCs

**Release Date:** February 20, 2025  
**Developer:** Team K6  
**Contact:** ka6andev@gmail.com

## 🌟 Features

This press kit website includes:

- **Interactive Media Gallery** with YouTube video integration and screenshot carousel
- **Responsive Design** that works on all devices
- **Game Information Panel** with release details, reviews, and tags
- **Contact Information** with copy-to-clipboard functionality
- **Multi-language Support** indicators
- **Dark/Light Mode** support
- **Modern UI** built with Tailwind CSS

## 🚀 Quick Start

### Prerequisites

- Node.js (version 16 or higher)
- pnpm (recommended) or npm

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/presskit.git
   cd presskit
   ```

2. **Install dependencies**
   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Start the development server**
   ```bash
   pnpm dev
   # or
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173`

## 🛠️ Development

### Available Scripts

- `pnpm dev` - Start development server with hot reload
- `pnpm build` - Build for production
- `pnpm preview` - Preview production build locally

### Project Structure

```
presskit/
├── public/
│   ├── assets/          # Game screenshots and media
│   │   ├── assets/          # Game screenshots and media
│   │   └── vite.svg
│   ├── src/
│   │   ├── components/      # UI components
│   │   │   ├── hero.ts      # Main hero section with media gallery
│   │   │   ├── header.ts    # Navigation header
│   │   │   ├── footer.ts    # Footer with links
│   │   │   ├── backgroundHero.ts  # Background component
│   │   │   ├── logos.ts     # Logo components (unused)
│   │   │   └── screenshots.ts     # Screenshot components (unused)
│   │   ├── main.ts          # Main application entry point
│   │   ├── style.css        # Global styles
│   │   └── vite-env.d.ts    # TypeScript declarations
│   ├── index.html           # HTML template
│   ├── package.json         # Dependencies and scripts
│   ├── tsconfig.json        # TypeScript configuration
│   └── vite.config.ts       # Vite configuration
```

### Tech Stack

- **Framework:** Vanilla TypeScript with Vite
- **Styling:** Tailwind CSS v4
- **Build Tool:** Vite
- **Type Checking:** TypeScript 5.8+
- **Package Manager:** pnpm (recommended)

## 🎨 Customization

### Adding New Screenshots

1. Add your images to the `public/assets/` directory
2. Update the thumbnail gallery in `src/components/hero.ts`
3. Add new thumbnail items with appropriate `data-src` attributes

### Updating Game Information

Edit the game details in `src/components/hero.ts`:
- Game description
- Release dates
- Contact information
- Tags and languages
- Review scores

### Styling

The project uses Tailwind CSS v4. You can:
- Modify existing styles in component files
- Add global styles in `src/style.css`
- Configure Tailwind in `vite.config.ts`

## 📱 Responsive Design

The press kit is fully responsive and optimized for:
- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (320px - 767px)

## 🔧 Configuration

### Vite Configuration

The project uses a minimal Vite configuration with Tailwind CSS plugin:

```typescript
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [tailwindcss()],
})
```

### TypeScript Configuration

Configured for modern TypeScript with strict type checking and Vite-specific settings.

## 🚀 Deployment

### Build for Production

```bash
pnpm build
```

The built files will be in the `dist/` directory, ready for deployment to any static hosting service.

### Deployment Options

- **Vercel:** Connect your GitHub repository for automatic deployments
- **Netlify:** Drag and drop the `dist` folder or connect via Git
- **GitHub Pages:** Use GitHub Actions for automated deployment
- **Any static hosting:** Upload the `dist` folder contents

### Environment Variables

No environment variables are required for basic functionality. For custom API endpoints or analytics, you may need to add:

```bash
VITE_ANALYTICS_ID=your-analytics-id
VITE_API_BASE_URL=your-api-url
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📧 Contact

**Team K6**
- Email: ka6andev@gmail.com
- Game Release: February 20, 2025

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/) for fast development experience
- Styled with [Tailwind CSS](https://tailwindcss.com/) for modern UI
- Game media placeholder images from [Placehold.co](https://placehold.co/)
- Icons from [Heroicons](https://heroicons.com/)

---

**Note:** This is a press kit website for promotional purposes. The actual game "Ribbit Up: Frog Climber" is developed by Team K6 and is scheduled for release on February 20, 2025.
