import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors/colors';
import {heightScale, widthScale} from '../utils/responsive.utils';
import {HamburgerMenu} from '../assets/images';
import {useNavigation} from '@react-navigation/native';

interface HeaderProps {
  screen: string;
}

const Header = (props: HeaderProps) => {
  const {screen} = props;
  const navigation = useNavigation();
  return (
    <View style={styles.root}>
      <TouchableOpacity>
        <Image
          resizeMode="contain"
          source={HamburgerMenu}
          tintColor={colors.primary}
          style={{
            height: widthScale(20),
            width: widthScale(20),
          }}
        />
      </TouchableOpacity>
      <View>
        <Text> {screen} </Text>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  root: {
    // position: 'absolute',
    // top: 30,
    // left: 0,
    width: '100%',
    backgroundColor: colors.container,
    elevation: 5,
    height: heightScale(50),
    display: 'flex',
    flexDirection: 'row',
    paddingHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
