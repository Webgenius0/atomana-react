import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './app';
import './assets/styles.css';

console.l = (param) => {
  if (import.meta.env.VITE_DEVELOPER === "hisam" && import.meta.env.DEV) {
      console.log(param);
    }
}


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
