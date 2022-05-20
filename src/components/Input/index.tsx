import React, {useContext} from 'react';
import {Control, Controller} from 'react-hook-form';
import {TextInput, TextInputProps, View} from 'react-native';
import {ThemeCtx} from '../../Contexts/ThemeContext';

interface Props extends TextInputProps {
  control: Control<any>;
  name: string;
}

const Input = ({style, name, control, ...props}: Props) => {
  const {activeTheme} = useContext(ThemeCtx);

  return (
    <View>
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, value, ...formArgs}}) => (
          <TextInput
            style={[
              {
                backgroundColor: activeTheme.palette.neutral,
                borderRadius: 4,
                width: 300,
                paddingLeft: 20,
                color: activeTheme.palette.text,
              },
              style,
            ]}
            placeholderTextColor={activeTheme.palette.textFade}
            {...props}
            {...formArgs}
            value={value}
            onChangeText={onChange}
          />
        )}
      />
    </View>
  );
};

export default Input;
