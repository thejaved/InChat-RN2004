import {Component} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import {
  createChatRoom,
  getMessagesByRoomId,
  sendMessage,
} from '../../controllers/Messages';
import {addChatRoomToUser} from '../../controllers/UserController';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface P {
  route?: any;
  navigation?: NavigationProp<ParamListBase>;
}

interface S {
  chatUser: any;
  textValue: string;
  messages: any;
}

export default class ChatController extends Component<P, S> {
  scrollViewRef: any;
  constructor(props: P) {
    super(props);
    this.state = {
      chatUser: this.props.route.params.item,
      textValue: '',
      messages: [],
    };
  }

  async componentDidMount() {
    this.getMessages();
  }

  handleTextValue = (val: string) => this.setState({textValue: val});

  handlePress = () => this.props.navigation?.goBack();

  sendMessage = async () => {
    try {
      let userID = await AsyncStorage.getItem('AUTHID');

      if (userID) {
        let chatRoomId = await createChatRoom(userID, this.state.chatUser.id);
        if (chatRoomId) {
          await addChatRoomToUser(this.state.chatUser.id, chatRoomId);
          await addChatRoomToUser(userID, chatRoomId);
          await sendMessage(chatRoomId, userID, this.state.textValue, 'text');
          this.setState({textValue: ''});
          this.getMessages();
        }
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  getMessages = async () => {
    let userID = await AsyncStorage.getItem('AUTHID');
    if (userID) {
      let chatRoomId = await createChatRoom(userID, this.state.chatUser.id);
      if (chatRoomId) {
        let messages = await getMessagesByRoomId(chatRoomId);
        this.setState({messages});
      }
    }
  };
}
