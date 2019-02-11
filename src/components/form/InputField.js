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
            secureInput: props.inputType === 'text' || props.inputType === 'email' ? false : true,
        };
        this.toggleShowPassword = this.toggleShowPassword.bind(this);
    }

    toggleShowPassword() {
        this.setState({ secureInput: !this.state.secureInput });
    }

    render() {
        const { labelText, labelTextSize, labelColor, textColor, borderBottomColor, inputType, customStyle } = this.props;
        const { secureInput } = this.state
        const fontSize = labelTextSize || 14;
        const color = labelColor || 'white';
        const inputColor = textColor || 'white';
        const borderBottom = borderBottomColor || 'transparent';
        //alert(inputType)
        return (
            <View style={[customStyle, styles.wrapper]}>
                <Text style={[{ color, fontSize }, styles.label]}> {labelText}</Text>

                {inputType === 'password' ?
                    <TouchableOpacity
                        style={styles.showButton}
                        onPress={this.toggleShowPassword}
                    >
                        <Text
                            style={styles.showButtonText}
                        >
                            {secureInput ? "Show" : 'Hide'}
                        </Text>
                    </TouchableOpacity>
                    : null}

                <TextInput
                    //autoCorrect="false"
                    style={[{ color: inputColor, borderBottomColor: borderBottom }, styles.inputField]}
                    secureTextEntry={secureInput}
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
    customStyle: PropTypes.object,
};

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        marginTop: 10,
    },
    label: {
        fontWeight: '700',
    },
    inputField: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 20,
    },
    showButton: {
        position: 'absolute',
        right: 0,
    },
    showButtonText: {
        color: 'white',
        fontWeight: '700',
    }
});