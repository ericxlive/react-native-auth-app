import React from 'react';
import { Text } from 'react-native';

const ErrorArea = ({ message }) => (
        <Text style={styles.error}>
            { message }
        </Text>
    );

const styles = {
    error: {
        fontSize: 20,
        alignSelf: 'center',
        color: 'red',
    }
};

export { ErrorArea };
