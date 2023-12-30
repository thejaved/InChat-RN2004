import {Component} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {GoogleSignin} from '@react-native-google-signin/google-signin';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {}

export default class SplashController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.navigation?.addListener('focus', () => {
      this.handleAuth();
    });
    this.handleAuth();
  }

  handleAuth = async () => {
    const currentUser = await GoogleSignin.getCurrentUser();

    console.log('currentUser', currentUser);
    setTimeout(() => {
      if (currentUser) this.props.navigation?.navigate('MyTabs');
      else this.props.navigation?.navigate('Auth');
      // this.props.navigation?.navigate('Auth');
    }, 500);
  };
}
