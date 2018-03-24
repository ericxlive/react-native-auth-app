import React from 'react';
import { View, ActivityIndicator } from 'react-native';

const Spinner = ({ size }) => (
        <View>
            <ActivityIndicator style={styles.spinner} size={size || 'large'} />
        </View>
    );

const styles = {
    spinner: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
};

export { Spinner };
