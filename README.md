# StoryTime AI 📚✨

An engaging, child-friendly AI application for generating personalized bedtime stories. StoryTime AI combines the magic of storytelling with artificial intelligence to create unique, educational, and entertaining stories for children.

## Features

### 🎨 Modern, Child-Friendly Interface
- Playful color palette with coral and turquoise themes
- Animated elements and smooth transitions
- Responsive design for all devices
- Accessibility-focused implementation

### 📖 Story Generation
- Support for multiple main characters
- Customizable story themes and genres
- Adjustable story length
- Age-appropriate content filtering
- Additional customization options

### 👤 User Features
- Personal profile management
- Customizable settings
- Achievement system
- Story library
- Parental controls

### 💎 Premium Features
- Unlimited story creation
- 50+ story themes
- Advanced customization
- AI illustrations
- Multiple child profiles
- Priority support
- Ad-free experience

## Technical Stack

- **Frontend**: React with TypeScript
- **UI Framework**: Material-UI
- **Animations**: Framer Motion
- **Routing**: React Router
- **Styling**: Emotion

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

### Available Scripts

#### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

#### `npm test`

Launches the test runner in interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

#### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Main application pages
│   ├── LandingPage.tsx
│   ├── StoryGenerator.tsx
│   ├── Profile.tsx
│   └── PricingPage.tsx
├── theme/           # Theme configuration
└── utils/           # Utility functions
```

## Design System

### Colors
- Primary: Coral (#FF6B6B)
- Secondary: Turquoise (#4ECDC4)
- Accent: Yellow (#FFD93D)
- Accent: Mint (#95E1D3)

### Typography
- Headings: Bubblegum Sans
- Body: Nunito

## Routes

- `/`: Landing Page
- `/auth`: Authentication
- `/pricing`: Pricing Plans
- `/create`: Story Generator
- `/profile`: User Profile
- `/library`: Story Collection (Planned)

## Future Development

- AI story generation service integration
- Backend API implementation
- Enhanced user authentication
- Advanced story customization options
- Interactive story preview
- Mobile app development

## Security Considerations

- Secure authentication implementation
- Content filtering for child safety
- Parental control features
- Data encryption
- Privacy protection

## Performance Optimization

- Component lazy loading
- Bundle size optimization
- Efficient routing
- Optimized animations

## Learn More

- [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started)
- [React documentation](https://reactjs.org/)
- [Material-UI documentation](https://mui.com/)
- [Framer Motion documentation](https://www.framer.com/motion/)
