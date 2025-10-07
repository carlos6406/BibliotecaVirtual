import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PRIMARY_COLOR = '#1E90FF'; // Azul Dodger

export default function Registrarse({ navigation }) {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleRegister = () => {
    if (!nombre || !email || !password || !confirmPassword) {
      Alert.alert('❌ Error', 'Por favor completa todos los campos');
      return;
    }

    if (password !== confirmPassword) {
      Alert.alert('❌ Error', 'Las contraseñas no coinciden');
      return;
    }

    Alert.alert('✅ Cuenta creada', '¡Registro exitoso! Ahora puedes iniciar sesión');
    navigation.navigate('IniciarSesion'); 
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Registrarse</Text>

      {/* Campo Nombre */}
      <Text style={styles.inputLabel}>Nombre</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu nombre"
        placeholderTextColor="#999"
        value={nombre}
        onChangeText={setNombre}
        color="#333"
      />

      {/* Campo Correo */}
      <Text style={styles.inputLabel}>Correo</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu correo"
        placeholderTextColor="#999"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        color="#333"
      />

      {/* Campo Contraseña */}
      <Text style={styles.inputLabel}>Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Escribe tu contraseña"
        placeholderTextColor="#999"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        color="#333"
      />

      {/* Campo Confirmar Contraseña */}
      <Text style={styles.inputLabel}>Confirmar Contraseña</Text>
      <TextInput
        style={styles.input}
        placeholder="Repite tu contraseña"
        placeholderTextColor="#999"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
        secureTextEntry
        color="#333"
      />

      {/* Botón Crear Cuenta */}
      <TouchableOpacity style={styles.registerButton} onPress={handleRegister}>
        <Text style={styles.registerButtonText}>Crear Cuenta</Text>
      </TouchableOpacity>

      {/* Enlace a iniciar sesión */}
      <TouchableOpacity
        onPress={() => navigation.navigate('IniciarSesion')}
        style={styles.loginLinkContainer}
      >
        <Text style={styles.loginLinkText}>
          ¿Ya tienes cuenta? <Text style={styles.loginLinkHighlight}>Iniciar Sesión</Text>
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    justifyContent: 'center',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 30,
    textAlign: 'center',
  },
  inputLabel: {
    fontSize: 16,
    color: '#000',
    marginBottom: 8,
    marginTop: 15,
  },
  input: {
    width: '100%',
    height: 60,
    backgroundColor: '#f0f0f0',
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    marginBottom: 16,
    color: '#333',
  },
  registerButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 30,
    borderRadius: 30,
    width: '100%',
    alignItems: 'center',
    marginTop: 20,
  },
  registerButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  loginLinkContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
  loginLinkText: {
    fontSize: 14,
    color: '#000',
  },
  loginLinkHighlight: {
    color: PRIMARY_COLOR,
    fontWeight: 'bold',
  },
});
