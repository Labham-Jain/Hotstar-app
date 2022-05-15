import Navigation from './Navigation';
import React from 'react';
import {SafeAreaView, ScrollView, StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';

const App = () => {
  return (
    <NavigationContainer>
      <SafeAreaView>
        <StatusBar />
        <ScrollView contentInsetAdjustmentBehavior="automatic">
          <Navigation />
        </ScrollView>
      </SafeAreaView>
    </NavigationContainer>
  );
};
export default App;
