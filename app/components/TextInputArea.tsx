import React from 'react';
import {colors, fonts} from '../config';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface TextInputAreaProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const TextInputArea: React.FC<TextInputAreaProps> = ({
  placeholder,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.inputContianer, containerStyle]}>
      <TextInput
        multiline
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.black}
        {...props}
      />
    </View>
  );
};

export default TextInputArea;

const styles = StyleSheet.create({
  inputContianer: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: colors.primary,
    backgroundColor: colors.white,
    minHeight: responsiveHeight(20),
    borderTopLeftRadius: responsiveWidth(2),
    borderTopRightRadius: responsiveWidth(2),
  },
  input: {
    width: '100%',
    fontFamily: fonts.MulishRegular,
    paddingHorizontal: responsiveWidth(2),
    color: colors.black,
  },
});
