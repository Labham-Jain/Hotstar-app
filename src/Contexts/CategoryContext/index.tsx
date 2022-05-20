import React, {createContext} from 'react';
import {GenericContextComponentType} from '..';

export const CategoryCtx = createContext<any>({});

const CategoryContext = ({children}: GenericContextComponentType) => {
  return (
    <CategoryCtx.Provider value={{activeCategory: 'cricket'}}>
      {children}
    </CategoryCtx.Provider>
  );
};

export default CategoryContext;
