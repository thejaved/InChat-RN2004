import {Component} from 'react';
import auth from '@react-native-firebase/auth';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

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

  async onGoogleButtonPress() {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      console.log('userInfo', userInfo);
    } catch (error: any) {
      if (error.code === statusCodes.SIGN_IN_CANCELLED) {
        // user cancelled the login flow
        console.log('1');
      } else if (error.code === statusCodes.IN_PROGRESS) {
        // operation (e.g. sign in) is in progress already
        console.log('2');
      } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
        // play services not available or outdated
        console.log('error', error);
        console.log('3');
      } else {
        // some other error happened
        console.log('4');
        console.log('error', error);
      }
    }
  }
}
