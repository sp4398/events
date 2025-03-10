# CommunionHub - A Modern React-based Community Event Platform

CommunionHub is a web application that helps communities organize and discover events. Built with React and Tailwind CSS, it provides a clean, responsive interface for users to browse events and access community information.

The application features a modern single-page architecture using React Router for seamless navigation between different sections. It leverages Tailwind CSS for a polished, utility-first styling approach and Vite for fast development and optimized builds. The platform consists of three main sections: Home, Events, and About, making it easy for users to find relevant community information and activities.

## Repository Structure
```
communionhub/
├── src/                      # Source code directory
│   ├── main.jsx             # Application entry point
│   ├── App.jsx              # Main application component with routing
│   ├── index.css            # Global styles with Tailwind imports
│   └── pages/               # Page components
│       ├── Home.jsx         # Home page component
│       ├── Events.jsx       # Events listing page component
│       └── About.jsx        # About page component
├── index.html               # HTML entry point
├── vite.config.js           # Vite build configuration
├── eslint.config.js         # ESLint configuration
└── package.json             # Project dependencies and scripts
```

## Usage Instructions

### Prerequisites
- Node.js (version 14 or higher)
- npm (Node Package Manager) or yarn
- Modern web browser

### Installation
1. Clone the repository:
```bash
git clone <repository-url>
cd communionhub
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Quick Start
1. Start the development server:
```bash
npm run dev
# or
yarn dev
```

2. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

### More Detailed Examples

#### Navigation
The application uses React Router for navigation. Here's how to implement programmatic navigation:
```javascript
import { useNavigate } from 'react-router-dom';

function NavigationExample() {
  const navigate = useNavigate();
  
  return (
    <button onClick={() => navigate('/events')}>
      Go to Events
    </button>
  );
}
```

#### Adding New Routes
To add a new route to the application:
```javascript
import { Route } from 'react-router-dom';
import NewPage from './pages/NewPage';

// In App.jsx, add within the Routes component:
<Route path="/new-page" element={<NewPage />} />
```

### Troubleshooting

#### Common Issues

1. **White screen after starting the application**
- Problem: Application fails to load
- Solution: Check the console for errors and ensure all dependencies are installed
```bash
npm install
# or
yarn install
```

2. **Styles not applying**
- Problem: Tailwind classes not working
- Solution: Verify that Tailwind is properly imported in index.css
```css
@import 'tailwindcss/base';
@import 'tailwindcss/components';
@import 'tailwindcss/utilities';
```

#### Debugging
- Enable React Developer Tools in your browser
- Check the browser console for errors
- Use the Network tab to verify asset loading
- For development debugging, add the following to your components:
```javascript
console.log('Component rendered:', props);
```

## Data Flow

CommunionHub follows a component-based architecture where data flows from parent to child components through props. The routing system manages page transitions and component rendering.

```ascii
[Browser] <-> [React Router]
     ↓            ↓
  [App.jsx] -> [Navigation]
     ↓
[Page Components]
     ↓
[UI Elements]
```

Component Interactions:
- React Router handles URL-based navigation and route matching
- App.jsx serves as the main container and routing hub
- Navigation component maintains the application's navigation state
- Page components (Home, Events, About) render based on the current route
- UI elements receive props from their parent components