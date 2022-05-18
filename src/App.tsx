import Navigation from './Navigation';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Contexts from './Contexts';

const App = () => {
  return (
    <Contexts>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Contexts>
  );
};
export default App;
