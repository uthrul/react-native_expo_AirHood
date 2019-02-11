import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';
import {
    View, Text, ScrollView, StyleSheet, KeyboardAvoidingView,
} from 'react-native';

import InputField from '../components/form/InputField';
import NextArrowButton from "../components/buttons/NextArrowButton";
import Notification from '../components/Notification';

export default class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            formValid: false,
        };
        this.handleCloseNotification = this.handleCloseNotification.bind(this);
    }

    handleNextButton() {
        alert('next Button pressed')
    }
    handleCloseNotification() {
        this.setState({ formValid: true });
    }
    render() {
        const { formValid } = this.state;
        const showNotification = formValid ? false : true;
        const background = formValid ? 'black' : 'red';
        return (
            <KeyboardAvoidingView
                style={[{ backgroundColor: background }, styles.wrapper]}
                behavior="padding"
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
                            customStyle={{ marginBottom: 30 }}
                        />

                        <InputField
                            labelText="PASSWORD"
                            labelTextSize={14}
                            labelColor={'white'}
                            textColor={'white'}
                            borderBottomColor={'white'}
                            inputType="password"
                            customStyle={{ marginBottom: 30 }}
                        />
                    </ScrollView>
                </View>
                <View style={styles.nextButton}>
                    <NextArrowButton
                        handleNextButton={this.handleNextButton}
                    />
                </View>
                <View style={showNotification ? { marginTop: 10 } : {}}>
                    <Notification
                        showNotification={showNotification}
                        handleCloseNotification={this.handleCloseNotification}
                        type="Error"
                        firstLine="Those credentials don't look right."
                        secondLine="Please try again"
                    />
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        display: 'flex',
        flex: 1,
        //backgroundColor: 'black',
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
        bottom: 20,
    },
});
