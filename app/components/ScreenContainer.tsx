import React from 'react';
import {colors} from '../config';
import {
  SafeAreaView,
  StatusBar,
  StatusBarProps,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {StatusBarStyle} from 'react-native';

interface ScreenContainerProps extends StatusBarProps {
  children?: any;
  backgroundColor?: string;
  barStyle?: null | StatusBarStyle | undefined;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  barStyle,
  backgroundColor,
  ...props
}) => {
  return (
    <>
      <StatusBar
        barStyle={barStyle ? barStyle : 'light-content'}
        backgroundColor={backgroundColor ? backgroundColor : colors.primary}
        {...props}
      />
      <SafeAreaView style={styles.container}>
        <View style={styles.mainContainer}>{children}</View>
      </SafeAreaView>
    </>
  );
};

export default ScreenContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
  },
  mainContainer: {
    flex: 1,
    backgroundColor: colors.bgColor,
  },
});
