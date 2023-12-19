import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerContentComponentProps,
} from '@react-navigation/drawer';

const DrawerContent: React.FC<DrawerContentComponentProps> = props => {
  return (
    <View style={styles.root}>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
    </View>
  );
};

export default DrawerContent;

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
});
