import {Component} from 'react';
import {NavigationProp, ParamListBase} from '@react-navigation/native';

interface P {
  navigation?: NavigationProp<ParamListBase>;
}

interface S {}

export default class MainController extends Component<P, S> {
  constructor(props: P) {
    super(props);
    this.state = {};
  }
}
