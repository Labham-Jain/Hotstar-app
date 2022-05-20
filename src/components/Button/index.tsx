import React, {useContext} from 'react';
import {TouchableOpacity, TouchableOpacityProps} from 'react-native';
import {ThemeCtx} from '../../Contexts/ThemeContext';
import Typography from '../Typography';

interface Props extends TouchableOpacityProps {
  children?: React.ReactNode;
  text?: string;
}

const Button = ({children, text, ...props}: Props) => {
  const {activeTheme} = useContext(ThemeCtx);

  return (
    <TouchableOpacity
      style={{
        padding: 15,
        borderRadius: 4,
        backgroundColor: activeTheme.palette.primary,
      }}
      {...props}>
      {text ? (
        <Typography
          style={{
            color: activeTheme.palette.text,
            alignSelf: 'center',
            fontWeight: 'bold',
          }}>
          {text}
        </Typography>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;
