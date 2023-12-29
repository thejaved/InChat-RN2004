import React from 'react';
import {colors} from '../../config';
import MainController from './MainController';
import {ScreenContainer} from '../../components';
import AppHeader from '../../components/AppHeader';
import {Text, StyleSheet, View, SafeAreaView} from 'react-native';

export default class Main extends MainController {
  render() {
    return (
      <>
        <ScreenContainer>
          <SafeAreaView style={styles.container}>
            <AppHeader title="Auth" />
            <View>
              <Text>Main Screen</Text>
            </View>
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
});
