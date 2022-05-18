import React, {createContext} from 'react';
import {GenericContextComponentType} from '..';

export const ThemeCtx = createContext<{}>({});
const ThemeContext = ({children}: GenericContextComponentType) => {
  return <ThemeCtx.Provider value={{}}>{children}</ThemeCtx.Provider>;
};

export default ThemeContext;
