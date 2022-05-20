import React, {ReactNode} from 'react';
import AuthContext from './AuthContext';
import CategoryContext from './CategoryContext';
import ThemeContext from './ThemeContext';

export interface GenericContextComponentType {
  children: ReactNode;
}
const Contexts = ({children}: GenericContextComponentType) => {
  return (
    <>
      <AuthContext>
        <CategoryContext>
          <ThemeContext>{children}</ThemeContext>
        </CategoryContext>
      </AuthContext>
    </>
  );
};

export default Contexts;
