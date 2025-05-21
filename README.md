# 🖼️ ImageConvert

A modern, user-friendly web application for converting images between different formats. Built with React, TypeScript, and a beautiful UI.

## ✨ Features

- 🎯 **Multiple Format Support**: Convert between PNG, JPEG, WebP, and GIF formats
- 🚀 **Fast Conversion**: Quick and efficient image processing
- 🔒 **Secure**: All processing happens in your browser - your images never leave your device
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices
- 🎨 **Modern UI**: Clean and intuitive interface with smooth animations
- 📊 **Conversion History**: Track your past conversions
- 💾 **Easy Download**: One-click download of converted images
- 🎯 **Image Optimization**: Automatic compression and size optimization

## 🛠️ Tech Stack

- ⚡️ **Vite** - Lightning fast build tool
- 🔥 **React 18** - Latest React features
- 🧩 **TypeScript** - Type safety
- 🎨 **TailwindCSS** - Utility-first CSS framework
- 🧰 **ShadCN UI** - Beautiful and accessible components
- 📱 **Responsive Design** - Mobile-first approach
- 🧭 **React Router** - Client-side routing
- 🔄 **React Query** - Data management
- 📝 **React Hook Form** - Form handling with Zod validation

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/ImageConvert.git
cd ImageConvert
```

2. Install dependencies:
```bash
npm install
# or
yarn
# or
pnpm install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and visit `http://localhost:5173`

## 📁 Project Structure

ImageConvert/
├── src/
│ ├── components/ # Reusable components
│ │ ├── Dashboard/ # Dashboard components
│ │ ├── ImageConverter/ # Image conversion components
│ │ └── ui/ # UI components
│ ├── pages/ # Page components
│ ├── contexts/ # React contexts
│ ├── hooks/ # Custom React hooks
│ ├── lib/ # Utility functions
│ ├── App.tsx # Main application component
│ └── main.tsx # Application entry point
├── public/ # Static assets
├── .gitignore
├── package.json # Project dependencies
├── tailwind.config.ts # TailwindCSS configuration
├── tsconfig.json # TypeScript configuration
└── vite.config.ts # Vite configuration


## �� Usage

1. **Upload Image**: Drag and drop or click to select an image
2. **Choose Format**: Select your desired output format
3. **Convert**: Click the convert button
4. **Download**: Save your converted image

## 🔧 Configuration

- **Image Size Limit**: 10MB per file
- **Supported Formats**: PNG, JPEG, WebP, GIF
- **Compression**: Automatic optimization with configurable settings

## 🏗️ Building for Production

```bash
npm run build
# or
yarn build
# or
pnpm build
```

The built files will be in the `dist` directory, ready to be deployed.

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- [browser-image-compression](https://github.com/Donaldcwl/browser-image-compression) for image compression
- [file-saver](https://github.com/eligrey/FileSaver.js) for file download functionality
- [ShadCN UI](https://ui.shadcn.com/) for beautiful UI components
