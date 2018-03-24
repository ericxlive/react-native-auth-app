import React from 'react';
import { View } from 'react-native';
import Firebase from 'firebase';
import { Button, Spinner, Header } from './src/components/common';
import LoginForm from './src/components/LoginForm';

class App extends React.Component {

    state = { isLoggedIn: null };

    componentWillMount() {
        Firebase.initializeApp({
            apiKey: 'AIzaSyBBZBiRlZflcCMGglfxq-7T0DbbJhf898I',
            authDomain: 'auth-40e48.firebaseapp.com',
            databaseURL: 'https://auth-40e48.firebaseio.com',
            projectId: 'auth-40e48',
            storageBucket: 'auth-40e48.appspot.com',
            messagingSenderId: '926538053005'
        });

        Firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                this.setState({ isLoggedIn: true });
            } else {
                this.setState({ isLoggedIn: false });
            }
        });
    }

    renderContent() {
        switch (this.state.isLoggedIn) {
            case true: 
                return (    
                    <View style={{ height: 40, marginTop: 5 }}>
                        <Button onPress={() => { Firebase.auth().signOut(); }}>
                            Log Out 
                        </Button>
                    </View>
                );
            case false: 
                return <LoginForm />;
            default: 
                // Use view tag and centralize the spinner.
                return <Spinner size="large" />;
        }
    }

    render() {
        return (
            <View>
                <Header headerText="Auth" />
                {this.renderContent()}
            </View>
        );
    }
}

export default App;

