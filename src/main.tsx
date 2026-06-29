import { createRoot } from 'react-dom/client';      // Imports React's rendering engine.
// createRoot() is responsible for creating a React root where the application will be rendered.
// Without this: React cannot display anything on the screen.

import App from './App.tsx';    // Imports the root component of your application

import './index.css';   // Loads global CSS styles.
// This CSS becomes available throughout the entire application.

createRoot(document.getElementById("root")!).render(<App/>);
// createRoot() is responsible for creating a React root where the application will be rendered
// Without this: React cannot display anything on the screen.