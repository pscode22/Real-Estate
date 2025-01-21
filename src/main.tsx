// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app.tsx';
import { SearchSettingsProvider } from './components/context/app.ctx.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <SearchSettingsProvider>
    <App />
  </SearchSettingsProvider>

  // </StrictMode>
);
