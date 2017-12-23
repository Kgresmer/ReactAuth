import React, {Component} from 'react';
import {View} from 'react-native';
import firebase from 'firebase';
import {Header, Button} from './components/common';
import LoginForm from './components/LoginForm';
import {CardSection} from "./components/common/CardSection";


class App extends Component {
    state = {loggedIn: false};

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
        if (this.state.loggedIn) {
            return (
                <CardSection>
                    <Button>
                        Log Out
                    </Button>
                </CardSection>
            )
        }
        return <LoginForm/>;
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                {this.renderContent()}
            </View>
        );
    }
}

export default App;

