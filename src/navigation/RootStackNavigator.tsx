import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Splash from '../screens/Splash';
import AuthNavigation from './auth';
import BottomTabNavigator from './BottomTab';
import DrawerNavigation from './drawer';
// import DrawerNavigation from './drawer';

const Stack = createNativeStackNavigator();
// const Drawer = createDrawerNavigator();

const RootStackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BTN">
        <Stack.Screen name="Auth" component={AuthNavigation} />
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="BTN"
          component={BottomTabNavigator}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Drawer"
          component={DrawerNavigation}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootStackNavigator;
