import React, { Component } from 'react';
import { StyleSheet, Text, View, Image, TouchableHighlight, } from 'react-native';
import RoundedButton from '../components/buttons/RoundedButton';
import Icon from 'react-native-vector-icons/FontAwesome';
//import colors from '../../styles/colors';


export default class LoggedOut extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    onFacebookPress() {
        alert('FB');
    }

    onCreateAccountPress() {
        alert('Account');
    }

    onMoreOptionsPress() {
        alert('More Option');
    }

    render() {
        return (
            <View style={styles.wrapper}>
                <View style={styles.wellcomeWrapper}>
                    <Image
                        source={require('../img/airbnb-logo.png')}
                        style={styles.logo}
                    />
                    <Text style={styles.wellcomeText}>Wellcome To AirHood</Text>
                    <RoundedButton
                        text="Continue with Facebook"
                        TextColor={'black'}
                        background={'red'}
                        icon={<Icon
                            name="facebook" size={20} color="black"
                            style={styles.facbookButtonIcon} />}
                        handleOnPress={this.onFacebookPress}
                    />

                    <RoundedButton
                        text="Create Account"
                        TextColor={'black'}
                        background={'white'}
                        icon={<Icon
                            name="rocket" size={20} color="black"
                            style={styles.facbookButtonIcon} />}
                        handleOnPress={this.onCreateAccountPress}
                    />

                    <TouchableHighlight
                        style={styles.moreOptionButton}
                        onPress={this.onMoreOptionsPress}
                    >
                        <Text style={styles.moreOptionButtonText}>More Option</Text>
                    </TouchableHighlight>

                    <View style={styles.termsAndConditions}>
                        <Text style={styles.termsText}>
                            By tapping Continue, Create Account or More
                        </Text>
                        <Text style={styles.termsText}>options,</Text>
                        <Text style={styles.termsText}>I aggre To AirHood's </Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Terms of service.</Text>
                        </TouchableHighlight>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Payments Terms ofservice</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>,</Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Privacy Police</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>, and</Text>
                        <TouchableHighlight style={styles.linkButton}>
                            <Text style={styles.termsText}>Nondiscrimination Policy</Text>
                        </TouchableHighlight>
                        <Text style={styles.termsText}>.</Text>
                    </View>
                </View >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: 'center',
    },
    wellcomeWrapper: {
        flex: 1,
        display: 'flex',
        marginTop: 30,
        padding: 20,
    },
    logo: {
        width: 50,
        height: 50,
        marginTop: 50,
        paddingBottom: 40,
    },
    wellcomeText: {
        fontSize: 30,
        color: 'white',
        fontWeight: '300',
        marginBottom: 40,
    },
    facbookButtonIcon: {
        position: 'relative',
        left: 20,
        zIndex: 8,
    },
    moreOptionButton: {
        marginTop: 15,
    },
    moreOptionButtonText: {
        color: 'white',
        fontSize: 16,
    },
    termsAndConditions: {
        flexWrap: 'wrap',
        alignItems: 'flex-start',
        flexDirection: 'row',
        marginTop: 20,
    },
    termsText: {
        color: 'white',
        fontSize: 13,
        fontWeight: '600',
    },
    linkButton: {
        borderBottomWidth: 1,
        borderBottomColor: 'white',
    }
});