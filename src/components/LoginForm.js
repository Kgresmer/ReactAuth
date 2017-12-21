import React, { Component } from 'react';
import { Text } from 'react-native';
import { Button, Card, CardSection, Input } from "./common";
import firebase from 'firebase';

class LoginForm extends Component {
    state = { email: '', password: '', error: '' };


    onButtonPress() {
        const { email, password, error } = this.state;

        firebase.auth().signInWithEmailAndPassword(email, password)
            .catch(() => {
                firebase.auth().createUserWithEmailAndPassword(email, password)
                    .catch(() => {
                        this.setState({error: "Authentication Failed"});
                    })
            });
    }

    render() {
        const styles = styles;
        return (
          <Card>
              <CardSection>
                  <Input
                      placeholder={'jeepers@creepers.com'}
                      label={'Email: '}
                      value={this.state.email}
                      onChangeText={email => this.setState({email})}/>
              </CardSection>

              <CardSection>
                  <Input
                      secureTextEntry={true}
                      placeholder="password"
                      label="Password: "
                      value={this.state.password}
                      onChangeText={password => this.setState({password})}
                  />
              </CardSection>

              <Text style={styles.errorTextStyle}>
                  {this.state.error}
              </Text>

              <CardSection>
                  <Button
                      onPress={this.onButtonPress.bind(this)}
                      textStyleDyn={{color: 'green'}}
                      buttonStyleDyn={{borderColor: 'green', backgroundColor: 'yellow'}}
                  >
                      Log In/Register
                  </Button>
              </CardSection>
          </Card>
        );
    }
}

const styles = {
    errorTextStyle: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red'
    }
};

export default LoginForm;