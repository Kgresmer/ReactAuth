import React, {Component} from 'react';
import { Text, View } from 'react-native';
import firebase from 'firebase';
import {Header} from "./components/common";


export default class App extends Component<{}> {
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
    }

    render() {
        return (
            <View>
                <Header headerText="Authentication"/>
                <Text>
                    Stuff and Things
                </Text>
            </View>
        );
    }
}


