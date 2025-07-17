# UI Components Library

A modern UI components library built with React, TypeScript, Tailwind CSS, Radix UI, and Storybook.

## 🚀 Technologies

- **React 19** - Latest version of React
- **TypeScript** - Code type safety
- **Vite** - Fast build tool
- **Tailwind CSS** - Utility-first CSS framework
- **Radix UI** - Accessible UI primitives
- **Storybook** - Component documentation and testing
- **ESLint** - Code linting
- **Prettier** - Code formatting

## 📦 Installation

```bash
# Clone the repository
git clone <repository-url>
cd ui-components

# Install dependencies
npm install
```

## 🛠️ Available Scripts

```bash
# Start dev server
npm run dev

# Build project
npm run build

# Preview build
npm run preview

# Lint code
npm run lint

# Auto-fix linting errors
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# TypeScript type checking
npm run type-check

# Start Storybook
npm run storybook

# Build Storybook
npm run build-storybook
```

## 📁 Project Structure

```
ui-components/
├── src/
│   ├── components/     # UI components
│   ├── lib/           # Utilities and configurations
│   ├── styles/        # CSS styles
│   └── stories/       # Storybook stories
├── .storybook/        # Storybook configuration
├── public/            # Static files
└── dist/              # Build output
```

## 🎨 Component Development

### Creating a New Component

1. Create component file in `src/components/`
2. Add TypeScript interfaces for props
3. Use Tailwind CSS for styling
4. Add Storybook story in `src/stories/`

### Component Example

## 📚 Storybook

Storybook allows you to:
- View components in isolation
- Test different component states
- Document component APIs
- Test accessibility (a11y)

### Starting Storybook

```bash
npm run storybook
```

Storybook will be available at: http://localhost:6006

## 🔧 Configuration

### ESLint

Project is configured with ESLint for:
- React best practices
- TypeScript rules
- Accessibility (a11y) rules
- Import/export rules

### Prettier

Automatic code formatting with settings:
- Single quotes
- 2 spaces indentation
- 80 characters line length
- Trailing commas

### Tailwind CSS

Configured with:
- Custom colors
- Responsive design
- Dark mode support
- Animations

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you have questions or issues, please create an issue in the repository.
