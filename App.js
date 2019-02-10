import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import LoggedOut from './src/screens/LoggedOut'

export default class App extends React.Component {
  render() {
    return (
      <LoggedOut />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
