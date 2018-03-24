import React, { Component } from 'react';
import { Text } from 'react-native';
import Firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';

class LoginForm extends Component {

    // Default value and variable or property of text.
    // this.state.loading is false by default.
    state = { email: '', password: '', error: '', loading: false }; 
    
    onButtonPress() {
        const { email, password } = this.state;

        // The instant that the user presses the button, this loading flag goes true.
        this.setState({ error: '', loading: true });

        // It Tries to sign in.
        Firebase.auth().signInWithEmailAndPassword(email, password)
            .then(this.onLoginSuccess.bind(this)) // In case of success.
            .catch(() => { // In case of error.
                // It creates an account to that user.
                Firebase.auth().createUserWithEmailAndPassword(email, password)
                    .then(this.onLoginSuccess.bind(this))
                    .catch(this.onLoginFail.bind(this));
            });
    }

    onLoginFail() {
        this.setState({ 
            error: 'Auth failed', 
            loading: 'false' 
        });
    }

    onLoginSuccess() {
        this.setState({
            email: '',
            password: '',
            loading: false,
            error: '' 
        });
    }

    // Either return the spinner or it show the button tag.
    renderButton() {
        if (this.state.loading) {
            return <Spinner size='small' />;
        }
        // No need to put else, since this is return statement method.
        return (
            <Button onPress={this.onButtonPress.bind(this)}>
                Login
            </Button>
        );
    }

    render() {
        return (
            <Card>
                <CardSection >
                    
                    <Input 
                        label="Email"
                        placeholder="user@mail.com"
                        onChangeText={email => this.setState({ email })} 
                        value={this.state.email} // Bing this component to that state. 
                    />
                </CardSection>

                <CardSection>
                    <Input 
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })} 
                        label="Password"
                        secureTextEntry
                    />
                </CardSection>

                <Text style={styles.errorTextStyle}>
                    {this.state.error}
                </Text>
               
                <CardSection style={{ alignSelf: 'center', alignItems: 'center' }}>
                    {this.renderButton()}
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
