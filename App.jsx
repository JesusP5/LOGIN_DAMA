import React, { useState } from 'react';
import { View, Text, Alert, SafeAreaView, StatusBar } from 'react-native';
import CustomInput from './components/inputs';
import CustomButton from './components/button';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username.length != 6) {
      Alert.alert('Error', 'El nombre de usuario debe tener 6 caracteres');
      return;
    }

    if (password.length < 8) {
      Alert.alert('Error', 'La contraseña debe tener al menos 8 caracteres');
      return;
    }
    Alert.alert('Éxito', 'Inicio de sesión exitoso');
  };

  return (
    <SafeAreaView style={styles.container}>
    <View>
      <View style={{alignItems: 'center', marginTop: 60}}> 
        <Text style={styles.title} >Login</Text>
      </View>
      <View>
        <CustomInput placeholder=" Expediente" maxLength={10} onChangeText={setUsername} />
        <CustomInput placeholder=" Contraseña" maxLength={10} onChangeText={setPassword} />
        <CustomButton onPress={handleLogin}>Iniciar sesión</CustomButton>
      </View>
    </View>
    </SafeAreaView>
  );
};
const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#ffffff',
    barStyle: 'dark-content',
    
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
};

export default App;