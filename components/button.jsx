import React from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';

const CustomButton = ({ onPress, children }) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{children}</Text>
        </TouchableOpacity>
    );
};
const styles = StyleSheet.create({
    button: {
        backgroundColor: '#141325',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginHorizontal: 100,
        marginVertical: 10,
        
    },
    text: {
        color: '#FFFFFF',
    },
});
export default CustomButton;