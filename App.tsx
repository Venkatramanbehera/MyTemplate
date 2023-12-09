import React from 'react';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import {SafeAreaView, StyleSheet} from 'react-native';
import {colors} from './src/assets/colors/colors';

const App = () => {
  return (
    <SafeAreaView style={styles.root}>
      <RootStackNavigator />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  root: {flex: 1, backgroundColor: colors.primary},
});
