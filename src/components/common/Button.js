import React from 'react';
import {Text, TouchableOpacity } from 'react-native';

const Button = ({ children, onPress, buttonStyleDyn, textStyleDyn }) => {
    const { buttonStyle, textStyle } = styles;
    const combinedButtonStyles = Stylesheet.flatten([buttonStyle, buttonStyleDyn]);
    const combinedTextStyles = Stylesheet.flatten([textStyle, textStyleDyn]);
    return (
        <TouchableOpacity onPress={onPress} style={combinedButtonStyles}>
            <Text style={combinedTextStyles}>
                {children}
            </Text>
        </TouchableOpacity>
    )
};

const styles = Stylesheet.create({
    buttonStyle: {
        flex: 1,
        alignSelf: 'stretch', //stretch to fill the limits of the container
        backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    }
});

export { Button };