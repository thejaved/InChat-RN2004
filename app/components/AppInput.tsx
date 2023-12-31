import React from 'react';
import {colors, fonts} from '../config';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TouchableOpacity,
  View,
  ViewStyle,
} from 'react-native';
import {
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface AppInputProps extends TextInputProps {
  placeholder?: string;
  containerStyle?: StyleProp<ViewStyle>;
}

const AppInput: React.FC<AppInputProps> = ({
  placeholder,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[styles.inputContianer, containerStyle]}>
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        placeholderTextColor={colors.black}
        {...props}
      />
    </View>
  );
};

export default AppInput;

const styles = StyleSheet.create({
  inputContianer: {
    width: '100%',
    borderBottomWidth: 2,
    borderColor: colors.primary,
    height: responsiveHeight(6),
    backgroundColor: colors.white,
  },
  input: {
    width: '100%',
    height: '100%',
    fontFamily: fonts.MulishRegular,
    color: colors.black,
    paddingHorizontal: responsiveWidth(2),
  },
});
