import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TouchableNativeFeedback,
  Platform,
  StyleSheet,
} from 'react-native';


export default class RoundedButton extends Component {
  render() {
    const { text, textColor, background, handleOnPress, icon } = this.props;
    const backgroundColor = background || 'transparent';
    const color = textColor || 'white';
    return (
      <TouchableOpacity
        style={[{ backgroundColor }, styles.wrapper]}
        onPress={handleOnPress}
      >
        <View style={styles.buttonTextWrapper} >
          {icon}
          < Text style={[{ color }, styles.buttonText]}>{text}</Text>
        </View >
      </ TouchableOpacity >
    );
  }
}

RoundedButton.PropTypes = {
  text: PropTypes.string.isRequired,
  textColor: PropTypes.string,
  background: PropTypes.string,
  icon: PropTypes.object,
  handleOnPress: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    padding: 15,
    borderRadius: 40,
    borderWidth: 1,
    borderColor: 'white',
    marginBottom: 15,
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 20,
    width: '100%',
    color: 'black',
    fontWeight: '300',
    textAlign: 'center',

  },
  buttonTextWrapper: {
    flexDirection: 'row',
    justifyContent: 'flex-end'
  }

});

