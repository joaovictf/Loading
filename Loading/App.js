import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MainService from './android/app/services/mainservice';

export default class App extends Component {

  state = {
    loaded: false
  }

  constructor(){
    super();
    MainService.load(v => this.setState({loaded: true }))
  }

  render() {
    return (
      <View style={styles.container}>
        {this.state.loaded ? <Text>Hello</Text> : <Text>Loading...</Text>}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },

});