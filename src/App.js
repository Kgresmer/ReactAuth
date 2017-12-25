import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button, Spinner} from './components/common';
import LoginForm from './components/LoginForm';
import {CardSection} from "./components/common/CardSection";


class App extends Component {
    state = {loggedIn: null};

    componentWillMount() {
        // Initialize Firebase
        firebase.initializeApp({
            apiKey: "AIzaSyCNLeFO_FltcDfSx3i8dTwT5LR2qjQXQHc",
            authDomain: "authreactapp.firebaseapp.com",
            databaseURL: "https://authreactapp.firebaseio.com",
            projectId: "authreactapp",
            storageBucket: "authreactapp.appspot.com",
            messagingSenderId: "1038118464062"
        });

        firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({loggedIn: true});
            } else {
                this.setState({loggedIn: false});
            }
        });
    }

    renderContent() {
        switch (this.state.loggedIn) {
            case true:
                return (
                    <CardSection>
                        <Button onPress={() => firebase.auth().signOut()}>
                            Log Out
                        </Button>
                    </CardSection>
                );
            case false:
                return <LoginForm/>;
            default:
                return (
                    <Spinner size="large" />
                );
        }
    }

    render() {
        return (
            <View style={styles.containerStyles}>
                <View style={styles.headerStyles}>
                    <Header headerText="Authentication"/>
                </View>
                <View style={styles.spinnerStyles}>
                {this.renderContent()}
                </View>
            </View>
        );
    }
}

const styles = {
    spinnerStyles: {
        flex: 9
    },
    headerStyles: {
        flex: 1
    },
    containerStyles: {
        flex: 1,
        flexDirection: 'column',
    }
};

export default App;

