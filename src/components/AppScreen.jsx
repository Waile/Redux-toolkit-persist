import {StatusBar, StyleSheet, View} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {colors} from '../utils';

const AppScreen = ({children}) => {
  return (
    <View style={styles.mainContainer}>
      <StatusBar barStyle={'dark-content'} backgroundColor={colors.white} />
      <SafeAreaView style={styles.safeAreaContainer}>{children}</SafeAreaView>
    </View>
  );
};

export default AppScreen;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
  safeAreaContainer: {
    flex: 1,
    backgroundColor: colors.white,
  },
});
