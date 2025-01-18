import {
  createContext,
  useContext,
  useMemo,
  useState,
} from 'react';
import { ELocation, EPropertyType } from '../types/constants';

type CtxSearchSettings = {
  location: ELocation;
  minPrice: number;
  maxPrice: number;
  numOfBeds: number;
  numOfBaths: number;
  propertyType: EPropertyType;
};

export const initialSearchSettingsValue: CtxSearchSettings = {
  location: ELocation.ABU_DHABI,
  minPrice: 10000,
  maxPrice: 50000,
  numOfBaths: 1,
  numOfBeds: 1,
  propertyType: EPropertyType.APARTMENT,
};

// Context Creation
const SearchSettingsContext = createContext<{
  searchSettings: CtxSearchSettings;
  setSearchSettings: React.Dispatch<React.SetStateAction<CtxSearchSettings>>;
}>({
  searchSettings: initialSearchSettingsValue,
  setSearchSettings: () => {},
});

// Provider Component
export const SearchSettingsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [searchSettings, setSearchSettings] = useState<CtxSearchSettings>(
    initialSearchSettingsValue
  );

  const memoedValue = useMemo(() => ({searchSettings, setSearchSettings}), [])

  return (
    <SearchSettingsContext.Provider value={memoedValue}>
      {children}
    </SearchSettingsContext.Provider>
  );
};

// Custom Hook
export const useSearchSettings = () => useContext(SearchSettingsContext);



