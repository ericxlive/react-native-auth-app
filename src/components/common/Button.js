import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const { buttonStyle, textStyle } = styles;

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                {children}
            </Text>
        </TouchableOpacity >
    );
};

const styles = {
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16, // Bold or thin. This is an enum.
        fontWeight: '600', // '600' pretty bold text.
        paddingTop: 10, // Space to the top.
        paddingBottom: 10 // Space bellow the text.
    },
    buttonStyle: {
        flex: 1, // Expand as possible.
        alignSelf: 'stretch', // Limits to the container.
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5, // Margin Attributes.
        marginRight: 5, 
    }, 
        
};

export { Button };
