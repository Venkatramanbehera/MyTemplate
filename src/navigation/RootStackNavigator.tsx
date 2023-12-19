import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
// import Splash from '../screens/Splash';
import AuthNavigation from './auth';
import DrawerNavigation from './drawer';

const RootStackNavigator = () => {
  const [isAuthenticate, setAuthenticate] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setAuthenticate(true);
    }, 2000);
  }, []);
  return (
    <NavigationContainer>
      {isAuthenticate ? <DrawerNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default RootStackNavigator;
