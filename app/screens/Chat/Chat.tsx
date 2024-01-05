import React from 'react';
import {colors, fonts} from '../../config';
import ChatController from './ChatController';
import {ScreenContainer} from '../../components';
import AppHeader from '../../components/AppHeader';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveWidth,
} from 'react-native-responsive-dimensions';
import Feather from 'react-native-vector-icons/Feather';

export default class Chat extends ChatController {
  render() {
    return (
      <ScreenContainer translucent={false}>
        <SafeAreaView style={styles.container}>
          <AppHeader
            leftPress={this.handlePress}
            title={this.state.chatUser.name}
            profileURI={this.state.chatUser.photo}
          />
          <ScrollView
            contentContainerStyle={styles.scrollViewContent}
            ref={ref => (this.scrollViewRef = ref)}
            onContentSizeChange={() =>
              this.scrollViewRef.scrollToEnd({animated: true})
            }
            showsVerticalScrollIndicator={false}>
            {this.state.messages.map((message: any) => (
              <View
                key={message.messageId}
                style={[
                  styles.messageContainer,
                  {
                    alignSelf:
                      message.senderId === this.state.chatUser.id
                        ? 'flex-start'
                        : 'flex-end',
                  },
                ]}>
                <Text style={styles.messageText}>{message.text}</Text>
              </View>
            ))}
          </ScrollView>
          <View style={styles.sendInutContainer}>
            <TextInput
              style={styles.sendInut}
              multiline
              value={this.state.textValue}
              placeholder="Type something..."
              onChangeText={this.handleTextValue}
              placeholderTextColor={colors.black}
            />
            {this.state.textValue !== '' && (
              <View style={styles.sendButtonContainer}>
                <TouchableOpacity
                  style={styles.sendButton}
                  onPress={this.sendMessage}>
                  <Feather
                    name="send"
                    color={colors.white}
                    size={responsiveFontSize(2)}
                  />
                </TouchableOpacity>
              </View>
            )}
          </View>
        </SafeAreaView>
      </ScreenContainer>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
  scrollViewContent: {
    padding: 16,
  },
  messageContainer: {
    maxWidth: '70%',
    padding: responsiveWidth(3),
    marginVertical: responsiveWidth(2),
    borderTopRightRadius: responsiveWidth(4),
    borderBottomLeftRadius: responsiveWidth(4),
    backgroundColor: colors.primary,
  },
  messageText: {
    fontFamily: fonts.MulishSemiBold,
    fontSize: responsiveFontSize(1.8),
    color: colors.white,
  },
  sendInutContainer: {
    width: '100%',
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  sendInut: {
    flex: 1,
    fontFamily: fonts.MulishRegular,
    paddingVertical: responsiveWidth(4),
    paddingHorizontal: responsiveWidth(4),
  },
  sendButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsiveWidth(1),
  },
  sendButton: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: responsiveWidth(3),
    backgroundColor: colors.primary,
    borderRadius: responsiveWidth(10),
  },
});
