import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';
import {GenericContextComponentType} from '..';
import SERVER_API from '../../api';
import {CategoryCtx} from '../CategoryContext';
import DefaultTheme from './default';
import {Theme} from './Theme';

export const ThemeCtx = createContext<{activeTheme: Theme}>({
  activeTheme: DefaultTheme[0],
});
const ThemeContext = ({children}: GenericContextComponentType) => {
  const [themes, setThemes] = useState<Theme[]>([]);
  const [localThemes, setLocalThemes] = useState<Theme[]>([]);
  const [activeTheme, setActiveTheme] = useState<Theme>(DefaultTheme[0]);
  const {activeCategory} = useContext(CategoryCtx);
  const getLocalTheme = useCallback(async () => {
    const storageThemes = await AsyncStorage.getItem('themes');
    if (storageThemes === null) {
      return;
    }
    return JSON.parse(storageThemes) as Theme[];
  }, []);

  const getExternalTheme = useCallback(async () => {
    try {
      const response = (await SERVER_API.get('themes')).data;

      if (response.data) {
        return response.data as Theme[];
      } else {
        // some error occurred fallback to system default
        return DefaultTheme;
      }
    } catch (error) {
      return DefaultTheme;
    }
  }, []);

  useEffect(() => {
    (async () => {
      const localStorageThemes = await getLocalTheme();
      if (localStorageThemes) {
        setLocalThemes(localStorageThemes);
      } else {
        const externalThemes = await getExternalTheme();
        setThemes(externalThemes);
      }
    })();

    return () => {};
  }, [getExternalTheme, getLocalTheme]);

  useEffect(() => {
    if (localThemes) {
      const theme = localThemes.filter(
        filterThemes => filterThemes.category === activeCategory,
      )[0];
      if (theme) {
        setActiveTheme(theme);
      } else {
        const newTheme = themes.filter(
          filterThemes => filterThemes.category === activeCategory,
        )[0];

        if (newTheme) {
          setActiveTheme(newTheme);
        }
      }
    }
  }, [localThemes, themes, activeCategory]);

  return (
    <ThemeCtx.Provider
      value={{
        activeTheme,
      }}>
      {children}
    </ThemeCtx.Provider>
  );
};

export default ThemeContext;
