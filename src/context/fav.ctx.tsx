import { createContext, useContext, useMemo, useState } from 'react';
import { Property } from '@/types';

type CtxFavProperties = {
  properties: Property[] | null;
};

export const initialFavProperties: CtxFavProperties = {
  properties: null,
};

// Context Creation
const FavPropertiesContext = createContext<{
  favorites: CtxFavProperties;
  setFavorites: React.Dispatch<React.SetStateAction<CtxFavProperties>>;
}>({
  favorites: initialFavProperties,
  setFavorites: () => {},
});

// Provider Component
export const FavPropertiesProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [favorites, setFavorites] =
    useState<CtxFavProperties>(initialFavProperties);

  const memoedValue = useMemo(() => ({ favorites, setFavorites }), [favorites]);
  return (
    <FavPropertiesContext.Provider value={memoedValue}>
      {children}
    </FavPropertiesContext.Provider>
  );
};

// Custom Hook
export const useFavProperties = () => useContext(FavPropertiesContext);
