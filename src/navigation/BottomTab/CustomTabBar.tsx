import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {heightScale, widthScale} from '../../utils/responsive.utils';
import {colors} from '../../assets/colors/colors';

interface CustomTabBarProps {
  state: any;
  descriptors: any;
  navigation: any;
}

const CustomTabBar = (props: CustomTabBarProps) => {
  const {state, descriptors, navigation} = props;
  return (
    <View style={styles.root}>
      {state.routes?.length > 0
        ? state.routes.map((route: any, index: number) => {
            const {options} = descriptors[route.key];
            let disabled =
              state.routes &&
              state.routes[1].params &&
              state.routes[1].params.statusValue === 'Off Grid' &&
              (index === 2 || index === 3);
            let {tabBarIcon} = options;
            const label =
              options.tabBarLabel != undefined
                ? options.tabBarLabel
                : options.title != undefined
                ? options.title
                : route.name;
            const isFocused = state.index === index;
            const onPress = () => {
              if (route.name === 'EditListing') {
                navigation.navigate('EditListingPage');
                return;
              }
              const event = navigation.emit({
                type: 'tabPress',
                target: route.key,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate(route.name, {
                  statusValue: route.params && route.params.statusValue,
                });
              }
            };

            const onLongPress = () => {
              navigation.emit({
                type: 'tabLongPress',
                target: route.key,
              });
            };
            return (
              <TouchableOpacity
                key={index}
                accessibilityRole="button"
                accessibilityLabel={options.tabBarAccessibilityLabel}
                testID={options.tabBarTestID}
                onPress={onPress}
                onLongPress={onLongPress}
                disabled={disabled}
                style={{flex: 1, alignItems: 'center'}}>
                {tabBarIcon && tabBarIcon({focused: isFocused})}
              </TouchableOpacity>
            );
          })
        : null}
    </View>
  );
};

export default CustomTabBar;

const styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    paddingTop: widthScale(14),
    paddingBottom: widthScale(14),
    backgroundColor: colors.white,
    elevation: widthScale(3),
    shadowOffset: {width: 3, height: 3},
    shadowColor: colors.black,
    shadowOpacity: 1,
    borderColor: colors.primary,
    borderTopWidth: heightScale(3),
  },
});
