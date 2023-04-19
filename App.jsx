import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import WelcomePage from './src/screens/ScreenOne';
import HomePage from './src/screens/HomePage';
import {createStackNavigator} from '@react-navigation/stack';
const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomePage"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="WelcomePage" component={WelcomePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default App;
