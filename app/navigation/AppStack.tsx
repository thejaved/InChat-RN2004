import {Auth, Main, Splash} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';
import MyTabs from './MyTabs';

const Stack = createStackNavigator();

function AppStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="Auth" component={Auth} />
      <Stack.Screen name="MyTabs" component={MyTabs} />
    </Stack.Navigator>
  );
}

export default AppStack;
