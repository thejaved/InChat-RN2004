import React from 'react';
import {colors} from '../../config';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import SplashController from './SplashController';
import {StatusBar} from 'react-native';
import {responsiveWidth} from 'react-native-responsive-dimensions';

export default class Splash extends SplashController {
  render() {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <View style={styles.container}>
          <View style={styles.iconContainer}>
            <ActivityIndicator size="large" color={colors.primary} />
          </View>
        </View>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.bgColor,
  },
  iconContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(50),
    height: responsiveWidth(50),
    backgroundColor: colors.white,
    borderRadius: responsiveWidth(10),
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
  },
});
