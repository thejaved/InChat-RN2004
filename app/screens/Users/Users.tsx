import React from 'react';
import {colors, fonts} from '../../config';
import {
  StyleSheet,
  SafeAreaView,
  FlatList,
  View,
  Image,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native';
import UsersController from './UsersController';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {AppInput, ScreenContainer} from '../../components';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import AppHeader from '../../components/AppHeader';

export default class Users extends UsersController {
  renderItem = ({item}: any) => (
    <View style={styles.item}>
      <View style={styles.infoUserContainer}>
        <Image source={{uri: item.photo}} style={styles.photo} />
        <View style={styles.leftContent}>
          <Text style={styles.labelName}>{item.name}</Text>
          <Text style={styles.labelEmail}>{item.email}</Text>
        </View>
      </View>
      <TouchableOpacity onPress={() => this.handleChat(item)}>
        <Fontisto
          name="hipchat"
          size={responsiveFontSize(3)}
          color={colors.primary}
        />
      </TouchableOpacity>
    </View>
  );

  render() {
    return (
      <>
        <ScreenContainer translucent={false}>
          <SafeAreaView style={styles.container}>
            <AppHeader title="Users" leftPress={this.handleGoBack} />
            <View style={styles.contentContainer}>
              <AppInput
                placeholder="Search..."
                containerStyle={styles.inputContainer}
              />
              <FlatList
                data={this.state.allUsers}
                onRefresh={this.getAllUsers}
                renderItem={this.renderItem}
                keyExtractor={item => item.id}
                refreshing={this.state.isLoading}
              />
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
  contentContainer: {
    padding: responsiveWidth(2),
  },
  inputContainer: {
    borderBottomWidth: 0,
    borderRadius: responsiveWidth(2),
  },
  item: {
    width: '100%',
    padding: 10,
    backgroundColor: colors.white,
    marginTop: responsiveWidth(2),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: responsiveWidth(4),
    borderRadius: responsiveWidth(2),
  },
  infoUserContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  leftContent: {
    marginLeft: responsiveWidth(3),
  },
  labelName: {
    fontSize: responsiveFontSize(2),
    fontFamily: fonts.MulishSemiBold,
    color: colors.black,
  },
  labelEmail: {
    fontSize: responsiveFontSize(1.5),
    fontFamily: fonts.MulishRegular,
    color: colors.black,
  },
  photo: {
    width: responsiveWidth(12),
    height: responsiveWidth(12),
    borderRadius: responsiveWidth(6),
  },
});
