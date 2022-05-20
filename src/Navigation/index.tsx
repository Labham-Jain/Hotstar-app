import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import HomeScreen from '../screens/Home';
import Login from '../screens/Login';
import {ThemeCtx} from '../Contexts/ThemeContext';
import Register from '../screens/Register';

export type RoutesParamList = {
  Login: undefined;
  Register: undefined;
  Home: undefined;
};

const Tab = createBottomTabNavigator<RoutesParamList>();

function Navigation() {
  const {activeTheme} = useContext(ThemeCtx);

  return (
    <Tab.Navigator
      initialRouteName="Login"
      screenOptions={{
        tabBarActiveTintColor: '#e91e63',
        headerShown: false,
      }}
      sceneContainerStyle={{backgroundColor: activeTheme.palette.secondary}}>
      <Tab.Screen
        name="Login"
        component={Login}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="Register"
        component={Register}
        options={{
          tabBarStyle: {
            display: 'none',
          },
          tabBarButton: () => null,
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <MaterialCommunityIcons name="home" color={color} size={24} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
export default Navigation;
