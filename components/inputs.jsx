import React from 'react';
import { TextInput, StyleSheet, Alert } from 'react-native';

const CustomInput = ({ placeholder, onChangeText, maxLength }) => {
    const handleChangeText = (text) => {
        if (text.length <= maxLength) {
            onChangeText(text);
        } else {
            Alert(`La entrada es demasiado corta. Debe tener ${maxLength} caracteres al menos.`);
        }
    };

    return <TextInput style={styles.input} placeholder={placeholder} onChangeText={handleChangeText} />;
};
const styles = StyleSheet.create({
    input: {
        height: 40,
        margin: 20,
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#c2e4cb',
    },
});

export default CustomInput;