import {Component} from 'react';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';
import {addUser} from '../../controllers/UserController';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {}

export default class AuthController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {};
  }

  async componentDidMount() {
    GoogleSignin.configure({
      webClientId:
        '146914449350-2nhj6jofare2i7oqct0iiioaj11i1aao.apps.googleusercontent.com',
    });
  }

  onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      let user = await addUser(userInfo);
      if (user) {
        await AsyncStorage.setItem('AUTHID', user.id);
        this.props.navigation?.navigate('Splash');
      }
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        console.log('error', error);
      } else if (error.code === statusCodes.IN_PROGRESS) {
        console.log('error', error);
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        console.log('error', error);
      } else {
        console.log('error', error);
      }
    }
  };
}
