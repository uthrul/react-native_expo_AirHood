import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';


import {
    View, Text, TextInput,
    TouchableOpacity, StyleSheet,
} from 'react-native';

export default class InputField extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    render() {
        const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customeStyle } = this.props;
        const fontSize = labelTextSize || 14;
        const color = labelColor || 'white';
        const inputColor = textColor || 'white';
        const borderBottom = borderBottomColor || 'transparent';
        //alert(inputType)
        return (
            <View style={[{ customeStyle }, styles.wrapper]}>
                <Text style={[{ color, fontSize }, styles.label]}> {labelText}</Text>
                <TextInput
                    autoCorrect="false"
                    style={[{ color: inputColor, borderBottomColor: borderBottom }, styles.inputField]}
                    secureTextEntry={inputType === 'password'}
                />
            </View>
        );
    }
}

InputField.propTypes = {
    labelText: PropTypes.string.isRequired,
    labelTextSize: PropTypes.number,
    labelColor: PropTypes.string,
    textColor: PropTypes.string,
    borderBottomColor: PropTypes.string,
    inputType: PropTypes.string.isRequired,
    customeStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
    },
    label: {
        fontWeight: '700',
        marginTop: 10,
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,

    }
});