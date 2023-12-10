import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Profile from '../../screens/Profile';
import Setting from '../../screens/Setting';
import {Image, StyleSheet, View} from 'react-native';
import {HomeTab, ProfileTab, SettingTab} from '../../assets/images';
import {widthScale} from '../../utils/responsive.utils';
import {colors} from '../../assets/colors/colors';
import {useRoute} from '@react-navigation/native';

type TabBarIconProps = {
  focused: boolean;
};

const TabBarIcon = ({focused}: TabBarIconProps) => {
  const route = useRoute();

  return (
    <View style={styles.tabContainer}>
      <Image
        resizeMode={'contain'}
        source={
          route.name === 'Profile'
            ? ProfileTab
            : route.name === 'Setting'
            ? SettingTab
            : HomeTab
        }
        style={[
          styles.tabIcon,
          focused
            ? {tintColor: colors.primary}
            : {tintColor: colors.black + '50'},
        ]}
      />
    </View>
  );
};

const BottomTabNavigator = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      backBehavior="firstRoute"
      initialRouteName="Home"
      screenOptions={{
        tabBarIcon: TabBarIcon,
        headerShown: false,
      }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Profile" component={Profile} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
  tabContainer: {
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    alignContent: 'center',
  },
  tabIcon: {
    height: widthScale(24),
    width: widthScale(24),
  },
});
