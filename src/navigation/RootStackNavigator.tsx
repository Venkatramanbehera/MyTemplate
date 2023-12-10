import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import AuthNavigation from './auth';
import BottomTabNavigator from './BottomTab';

const Stack = createNativeStackNavigator();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BTN">
        <Stack.Group>
          <Stack.Screen name="Auth" component={AuthNavigation} />
        </Stack.Group>
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Group>
          <Stack.Screen
            name="BTN"
            component={BottomTabNavigator}
            options={{headerShown: false}}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
