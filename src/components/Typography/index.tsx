import React, {useContext} from 'react';
import {Text, TextProps} from 'react-native';
import {ThemeCtx} from '../../Contexts/ThemeContext';

interface Props extends TextProps {
  children: string;
  textColor?: 'text' | 'textFade' | 'accent';
}

const Typography = ({children, textColor = 'text', ...props}: Props) => {
  const {activeTheme} = useContext(ThemeCtx);

  return (
    <Text
      style={{
        color: activeTheme.palette[textColor],
        fontFamily: 'Inter',
        fontWeight: 'normal',
      }}
      {...props}>
      {children}
    </Text>
  );
};

export default Typography;
