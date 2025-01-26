// import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './app.tsx';
import { SearchSettingsProvider } from './context/app.ctx.tsx';
import { FavPropertiesProvider } from './context/fav.ctx.tsx';

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
  <SearchSettingsProvider>
    <FavPropertiesProvider>
      <App />
    </FavPropertiesProvider>
  </SearchSettingsProvider>
  // </StrictMode>
);
