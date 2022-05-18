import React, {ReactNode} from 'react';
import ThemeContext from './ThemeContext';

export interface GenericContextComponentType {
  children: ReactNode;
}
const Contexts = ({children}: GenericContextComponentType) => {
  return <ThemeContext>{children}</ThemeContext>;
};

export default Contexts;
