import React from 'react';
import {colors, fonts} from '../config';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

interface AppHeaderProps {
  title: string;
}

const AppHeader: React.FC<AppHeaderProps> = ({title}) => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.header}>
        <View style={styles.leftIconContainer}>
          <TouchableOpacity>
            <AntDesign
              name="arrowleft"
              size={responsiveFontSize(3)}
              color={colors.white}
            />
          </TouchableOpacity>
          <Text style={styles.title}>{title}</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#ff0',
  },
  header: {
    width: '100%',
    justifyContent: 'center',
    height: responsiveHeight(8),
    backgroundColor: colors.primary,
    paddingHorizontal: responsiveWidth(5),
  },
  leftIconContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  title: {
    fontSize: 20,
    color: colors.white,
    fontFamily: fonts.MulishSemiBold,
    marginLeft: responsiveWidth(2),
  },
});

export default AppHeader;
