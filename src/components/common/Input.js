import React from 'react';
import { View, Text, TextInput } from 'react-native';

const Input = ({ label, value, onChangeText, placeholder, secureTextEntry }) => {
    const { input, container } = styles;

    return (
        <View style={container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                secureTextEntry={secureTextEntry}
                style={input} 
                value={value}
                placeholder={placeholder}
                autoCorrect={false} // Destructure this one. A tag calling another tag.
                onChangeText={onChangeText}
            />
        </View>
    );
};

const styles = {
    container: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center', // Elements are verticaly aligned.
    },
    label: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1, // ?
    },
    input: { 
        color: '#000',
        height: 30, 
        width: 100,
        paddingRight: 5, // Stands off the edge.
        paddingLeft: 5,
        fontSize: 18,
        lineHeight: 23, // Space between each line of text.
        flex: 2, // ?
    },
};

export { Input };
