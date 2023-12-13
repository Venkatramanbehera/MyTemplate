import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Saved from '../../screens/Saved';
import Refer from '../../screens/Refer';

const DrawerNavigation = () => {
  const Drawer = createDrawerNavigator();
  return (
    <Drawer.Navigator
      initialRouteName="Refer"
      screenOptions={{
        drawerType: 'front',
        drawerActiveTintColor: '#e91e63',
        drawerItemStyle: {
          marginVertical: 10,
        },
      }}>
      <Drawer.Screen name="Refer" component={Refer} />
      <Drawer.Screen name="Saved" component={Saved} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
