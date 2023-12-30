import React from 'react';
import {colors, fonts} from '../../config';
import {ImageBackground, TouchableOpacity} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import ProfileController from './ProfileController';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {Text, StyleSheet, SafeAreaView, View} from 'react-native';
import {bgImage} from '../../assets/images';
import {ScreenContainer} from '../../components';

export default class Profile extends ProfileController {
  render() {
    return (
      <>
        <ScreenContainer>
          <ImageBackground style={styles.bgContainer} source={bgImage}>
            <View style={styles.profileContainer}>
              <AntDesign
                name="user"
                size={responsiveFontSize(6)}
                color={colors.black}
              />
            </View>
          </ImageBackground>
          <View style={styles.contentContainer}>
            <TouchableOpacity style={styles.btnContainer}>
              <Entypo
                name="edit"
                color={colors.white}
                size={responsiveFontSize(2)}
              />
            </TouchableOpacity>
            <Text style={styles.lableName}>userName</Text>
            <Text style={styles.lableDes}>bio</Text>
          </View>
        </ScreenContainer>
      </>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  bgContainer: {
    width: '100%',
    height: responsiveHeight(20),
  },
  profileContainer: {
    width: responsiveHeight(15),
    height: responsiveHeight(15),
    borderRadius: responsiveHeight(10),
    backgroundColor: colors.white,
    position: 'absolute',
    bottom: responsiveHeight(-7.5),
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
    zIndex: 1,
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contentContainer: {
    width: '100%',
    backgroundColor: colors.white,
    alignItems: 'center',
    paddingTop: responsiveHeight(7.5),
    paddingHorizontal: responsiveWidth(3),
    paddingVertical: responsiveWidth(4),
    zIndex: -1,
  },
  btnContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: responsiveWidth(8),
    height: responsiveWidth(8),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(4),
    position: 'absolute',
    top: responsiveWidth(5),
    right: responsiveWidth(5),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 9.51,
    elevation: 15,
  },
  lableName: {
    fontFamily: fonts.MulishRegular,
    fontSize: responsiveFontSize(3),
    color: colors.black,
  },
  lableDes: {
    color: colors.black,
    fontFamily: fonts.MulishRegular,
  },
});
