import {Component} from 'react';
import {getUsers} from '../../controllers/UserController';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {
  isLoading: boolean;
  allUsers: any;
}

export default class UsersController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {
      isLoading: false,
      allUsers: [],
    };
  }

  componentDidMount() {
    this.getAllUsers();
  }

  getAllUsers = async () => {
    this.setState({isLoading: true});
    const AUTHID = await AsyncStorage.getItem('AUTHID');
    if (AUTHID) {
      let users = await getUsers(AUTHID);
      this.setState({allUsers: users, isLoading: false});
    }
  };

  handleGoBack = () => this.props.navigation?.goBack();
  handleChat = (item: any) => this.props.navigation?.navigate('Chat', {item});
}
