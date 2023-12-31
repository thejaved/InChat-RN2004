import {
  Text,
  StyleSheet,
  View,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {colors} from '../../config';
import MainController from './MainController';
import {ScreenContainer} from '../../components';
import AppHeader from '../../components/AppHeader';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

export default class Main extends MainController {
  render() {
    return (
      <>
        <ScreenContainer translucent={false}>
          <SafeAreaView style={styles.container}>
            <AppHeader title="Main" />
            <View>
              <Text>Main Screen</Text>
            </View>
            <TouchableOpacity
              style={styles.addUserStyle}
              onPress={this.addUserToChat}>
              <AntDesign
                name="plus"
                color={colors.white}
                size={responsiveFontSize(3)}
              />
            </TouchableOpacity>
          </SafeAreaView>
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
  addUserStyle: {
    alignItems: 'center',
    position: 'absolute',
    justifyContent: 'center',
    right: responsiveWidth(5),
    bottom: responsiveWidth(5),
    width: responsiveWidth(15),
    height: responsiveWidth(15),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(7.5),
  },
});
