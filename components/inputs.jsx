import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const UserInput = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                onChangeText={setUsername}
                value={username}
                placeholder="Usuario"
            />
            <TextInput
                style={styles.input}
                onChangeText={setPassword}
                value={password}
                placeholder="Contraseña"
                secureTextEntry
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
    },
});

export default UserInput;