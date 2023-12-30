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

  onGoogleButtonPress = async () => {
    try {
      await GoogleSignin.hasPlayServices();
      const userInfo = await GoogleSignin.signIn();
      if (userInfo) {
        this.props.navigation?.navigate('Splash');
      }
      console.log('userInfo', userInfo);
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
