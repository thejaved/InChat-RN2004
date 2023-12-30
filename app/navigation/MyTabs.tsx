import {Main, Profile} from '../screens';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  responsiveFontSize,
  responsiveHeight,
} from 'react-native-responsive-dimensions';
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../config';
import {isIos} from '../config/isIos';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.black,
        tabBarStyle: {
          height: isIos ? responsiveHeight(10) : responsiveHeight(8),
        },
      }}>
      <Tab.Screen
        name="Main"
        component={Main}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="hipchat" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
