import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {colors} from '../assets/colors/colors';
import {Logo} from '../assets/images';
import {fonts} from '../assets/constants/index.constants';
import {fontScale} from '../utils/responsive.utils';

const Splash = () => {
  return (
    <View style={styles.root}>
      <View style={styles.logoContainer}>
        <Image source={Logo} />
        <Text style={styles.logoNameText}>TeamMate</Text>
      </View>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({
  root: {
    display: 'flex',
    flex: 1,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  logoContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  logoNameText: {
    color: colors.primaryText,
    fontFamily: fonts[700],
    fontSize: fontScale(25),
  },
});
