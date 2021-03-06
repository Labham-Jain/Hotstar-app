import {TouchableOpacity, View} from 'react-native';
import React, {useCallback, useContext} from 'react';
import Input from '../../components/Input';
import Logo from '../../../assets/images/logo.svg';
import Button from '../../components/Button';
import {ThemeCtx} from '../../Contexts/ThemeContext';
import Typography from '../../components/Typography';
import {useNavigation} from '@react-navigation/native';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {RoutesParamList} from '../../Navigation';
import {AuthCtx} from '../../Contexts/AuthContext';
import {useForm} from 'react-hook-form';

type LoginScreenProps = BottomTabScreenProps<RoutesParamList, 'Login'>;

const Login = () => {
  const {activeTheme} = useContext(ThemeCtx);
  const navigation = useNavigation<LoginScreenProps['navigation']>();
  const {login} = useContext(AuthCtx);
  const {handleSubmit, control} = useForm<any>();

  const handleLogin = async (data: any) => {
    const response: any = await login(data);
    if (response.status === 200) {
      navigation.navigate('Home');
    }
  };

  const openRegisterPage = useCallback(() => {
    navigation.navigate('Register');
  }, [navigation]);

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View>
        <Logo style={{marginBottom: 30}} width={350} />
      </View>
      <View>
        <Input
          placeholder="Email/Phone"
          style={{marginBottom: 10}}
          keyboardType="default"
          control={control}
          name="phoneOrEmail"
        />
        <Input
          placeholder="Password"
          secureTextEntry
          control={control}
          name="password"
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
            Don't have an account?
          </Typography>
          <TouchableOpacity onPress={openRegisterPage}>
            <Typography
              style={{
                color: activeTheme.palette.accent,
                fontWeight: 'bold',
                fontSize: 14,
              }}>
              Register Now
            </Typography>
          </TouchableOpacity>
        </View>
        <Button text="LOGIN" onPress={handleSubmit(handleLogin)} />
      </View>
    </View>
  );
};

export default Login;
