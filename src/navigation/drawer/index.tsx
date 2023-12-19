import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import BottomTabNavigator from '../BottomTab';
import DrawerContent from './DrawerContent';
import Refer from '../../screens/Refer';

const CustomDrawerContent = (props: any) => {
  return <DrawerContent {...props} />;
};

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="BTN"
      screenOptions={{drawerType: 'front'}}
      drawerContent={CustomDrawerContent}>
      <Drawer.Screen name="Refer" component={Refer} />
      <Drawer.Screen name="BTN" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
