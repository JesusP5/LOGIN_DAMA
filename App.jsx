import React, { useState } from 'react';
import {View, Text, TextInput, Button, StyleSheet, Alert} from 'react-native';
import UserInput from './components/inputs';

const App = () => {
  const [expediente, setExpediente] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    if (expediente.length >= 8 && password.length >= 8) {
      Alert.alert('Bienvenido');
    } else {
      Alert.alert('El expediente y/o el password están mal');
    }
  };

  const handleExp = (expediente) => {
    if (expediente.length === 6) {
      setExpediente(expediente);
    } else {
      Alert.alert('El expediente debe ser de 6 caracteres');
    }
  }

  const handlePass = (password) => {
    if (password.length >= 8) {
      setPassword(password);
    } else {
      Alert.alert('El password debe ser de mínimo 8 caracteres');
    }
  }
  return (
    <View>
      <View>
        <Text>Login</Text>
      </View>
        <View>
          <UserInput />
        </View>
    </View>
  )
}
export default App;