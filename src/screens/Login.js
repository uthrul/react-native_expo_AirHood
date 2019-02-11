import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View, Text, ScrollView, StyleSheet, KeyboardAvoidingView,
} from 'react-native';

import InputField from '../components/form/InputField';
import NextArrowButton from "../components/buttons/NextArrowButton";

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    handleNextButton() {
        alert('next Button pressed')
    }
    render() {
        return (
            <KeyboardAvoidingView
                style={styles.wrapper}
            >
                <View style={styles.scrollViewWrapper}>
                    <ScrollView style={styles.scrollView}>
                        <Text style={styles.loginHeader}> Log In </Text>
                        <InputField
                            labelText="EMAIL ADDRESS"
                            labelTextSize={14}
                            labelColor={'white'}
                            textColor={'white'}
                            borderBottomColor={'white'}
                            inputType="email"
                            customeStyle={{ marginBottom: 30, }}
                        />

                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={'white'}
                            textColor={'white'}
                            borderBottomColor={'white'}
                            inputType="password"
                            customeStyle={{ marginBottom: 30, }}
                        />
                    </ScrollView>
                </View>
                <NextArrowButton
                    style={styles.nextButton}
                    handleNextButton={this.handleNextButton}
                />
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        backgroundColor: 'black',
    },
    scrollViewWrapper: {
        marginTop: 70,
        flex: 1,
    },
    scrollView: {
        paddingLeft: 30,
        paddingRight: 30,
        paddingTop: 20,
        flex: 1,
    },
    loginHeader: {
        color: 'white',
        fontSize: 34,
        fontWeight: '300',
        marginBottom: 40,
    },
    nextButton: {
        alignItems: 'flex-end',
        right: 20,
        bottom: 0,
    },
});
