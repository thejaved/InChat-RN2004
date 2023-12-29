import React from 'react';
import {Image} from 'react-native';
import {isIos} from '../../config/isIos';
import {colors, fonts} from '../../config';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AuthController from './AuthController';
import {bgImage, googleImage} from '../../assets/images';
import {Text, TouchableOpacity, View} from 'react-native';
import {StyleSheet, ImageBackground, StatusBar, ScrollView} from 'react-native';

export default class Auth extends AuthController {
  render() {
    return (
      <>
        <StatusBar translucent backgroundColor="transparent" />
        <ScrollView style={styles.container}>
          <ImageBackground style={styles.container} source={bgImage}>
            <View style={styles.innerContainer}>
              <TouchableOpacity
                style={styles.btnContainer}
                onPress={this.onGoogleButtonPress}>
                <Image source={googleImage} style={styles.googleImageStyle} />
                <Text style={styles.googleTextStyle}>Sign In With Google</Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ScrollView>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: responsiveHeight(100),
  },
  innerContainer: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
    paddingVertical: responsiveWidth(10),
    paddingHorizontal: responsiveWidth(5),
  },
  btnContainer: {
    width: '100%',
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: isIos ? responsiveHeight(10) : responsiveHeight(5),
    alignSelf: 'center',
    padding: responsiveWidth(2),
    borderRadius: responsiveWidth(10),
    flexDirection: 'row',
    alignItems: 'center',
  },
  googleImageStyle: {
    width: responsiveWidth(10),
    height: responsiveWidth(10),
  },
  googleTextStyle: {
    fontFamily: fonts.MulishExtraBold,
    color: colors.black,
    marginLeft: responsiveWidth(17),
  },
});
