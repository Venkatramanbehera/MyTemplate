import {Image, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {colors} from '../assets/colors/colors';
import {Logo} from '../assets/images';
import {fonts} from '../assets/constants/index.constants';
import {fontScale} from '../utils/responsive.utils';
import Spinner from 'react-native-loading-spinner-overlay';

const Splash = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [loading]);

  if (loading) {
    return <Spinner visible={true} textContent="Loading" />;
  }
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
