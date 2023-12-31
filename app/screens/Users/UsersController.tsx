import {Component} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {addUser, getUsers} from '../../controllers/UserController';

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
    // let User = {
    //   user: {
    //     id: '0931039103',
    //     name: 'Rahul4',
    //     email: 'rahul4@gmail.com',
    //     photo:
    //       'https://lh3.googleusercontent.com/a/ACg8ocIYlkIudBPdUFMg3bR94njY7NSsPPDXqJLJd719e66BHg=s96-c',
    //     familyName: 'string',
    //     givenName: 'string',
    //   },
    //   scopes: ['string', 'string'],
    //   idToken: 'string',
    //   serverAuthCode: 'string',
    // };

    // addUser(User);

    this.setState({isLoading: true});
    let users = await getUsers('yes.confirmation@gmail.com');
    this.setState({allUsers: users, isLoading: false});
  };

  handleGoBack = () => this.props.navigation?.goBack();
}
