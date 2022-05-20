import {TouchableOpacity, View} from 'react-native';
import React, {useCallback, useContext} from 'react';
import Input from '../../components/Input';
import Logo from '../../../assets/images/logo.svg';
import Button from '../../components/Button';
import {ThemeCtx} from '../../Contexts/ThemeContext';
import Typography from '../../components/Typography';
import {useNavigation} from '@react-navigation/native';
import {RoutesParamList} from '../../Navigation';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';

type RegisterScreenProps = BottomTabScreenProps<RoutesParamList, 'Register'>;

const Register = () => {
  const {activeTheme} = useContext(ThemeCtx);
  const navigation = useNavigation<RegisterScreenProps['navigation']>();
  const openLoginPage = useCallback(() => {
    navigation.navigate('Login');
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Logo style={{marginBottom: 30}} width={350} />
      </View>
      <View>
        <Input
          placeholder="Name"
          style={{marginBottom: 10}}
          keyboardType="email-address"
        />
        <Input
          placeholder="Email"
          style={{marginVertical: 10}}
          keyboardType="email-address"
        />
        <Input
          placeholder="Password"
          secureTextEntry
          style={{marginTop: 10, marginBottom: 15}}
        />
        <View style={{flexDirection: 'row', marginBottom: 15}}>
          <Typography
            style={{
              color: activeTheme.palette.text,
              marginRight: 3,
              fontWeight: 'bold',
              fontSize: 14,
            }}>
            Have an account?
          </Typography>
          <TouchableOpacity onPress={openLoginPage}>
            <Typography
              style={{
                color: activeTheme.palette.accent,
                fontWeight: 'bold',
                fontSize: 14,
              }}>
              Login
            </Typography>
          </TouchableOpacity>
        </View>
        <Button text="REGISTER" />
      </View>
    </View>
  );
};

export default Register;
