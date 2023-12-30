import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Component} from 'react';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {
  userName: string;
  bio: string;
}

export default class ProfileController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      userName: '',
      bio: '',
    };
  }
  async componentDidMount() {
    await GoogleSignin.signOut();
  }
}
