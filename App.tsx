/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import Main from './screens/Main';
import Exam from './screens/Exam';
import Answer from './screens/Answer';

const Stack = createNativeStackNavigator();

const App: () => React.JSX.Element = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Main">
        <Stack.Screen name="Main" component={Main} />
        <Stack.Screen name="Exam" component={Exam} />
        <Stack.Screen name="Answer" component={Answer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
