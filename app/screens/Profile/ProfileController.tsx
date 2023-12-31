import AsyncStorage from '@react-native-async-storage/async-storage';
import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {Component} from 'react';
import {getUserById} from '../../controllers/AuthController';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {
  bio: string;
  photo: string;
  name: string;
}

export default class ProfileController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      bio: '',
      photo: '',
      name: '',
    };
  }
  async componentDidMount() {
    let userID = await AsyncStorage.getItem('AUTHID');
    if (userID) {
      const userData = await getUserById(userID);
      //@ts-ignore
      let {name, photo, bio} = userData;
      this.setState({name, photo, bio});
    }
  }
}
