import {Component} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

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
    const AUTHID = await AsyncStorage.getItem('AUTHID');
    setTimeout(() => {
      if (AUTHID) this.props.navigation?.navigate('MyTabs');
      else this.props.navigation?.navigate('Auth');
    }, 500);
  };
}
