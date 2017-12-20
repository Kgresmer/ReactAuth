import React, { Component } from 'react';
import { Button, Card, CardSection, Input } from "./common";

class LoginForm extends Component {
    state = { email: '', password: '' };

    render() {

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

              <CardSection>
                  <Button textStyleDyn={{color: 'green'}} buttonStyleDyn={{borderColor: 'green', backgroundColor: 'purple'}}>
                      Log In/Register
                  </Button>
              </CardSection>
          </Card>
        );
    }
}

export default LoginForm;