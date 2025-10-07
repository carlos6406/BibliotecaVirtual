import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const PRIMARY_COLOR = '#1E90FF'; // Azul Dodger
const TICK_COLOR = '#000000'; // Negro para el tick

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSession, setKeepSession] = useState(false);

  const handleLogin = () => {
    const staticEmail = 'joelviraca@gmail.com';
    const staticPassword = '12345678';

    if (email === staticEmail && password === staticPassword) {
      Alert.alert('✅ Login exitoso', 'Bienvenido a la Biblioteca de Objetos');
      
    } else {
      Alert.alert('❌ Error', 'Correo o contraseña incorrectos');
    }
  };

  return (
    <View style={styles.container}>
      
      <TouchableOpacity style={styles.topButton}>
        <Text style={styles.topButtonText}>Iniciar Sesión</Text>
      </TouchableOpacity>

      <Text style={styles.inputLabel}>Correo</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
        placeholder="Escribe tu correo"
        placeholderTextColor="#999" // placeholder claro
        color="#333" // texto dentro del input un gris oscuro
      />

      <Text style={styles.inputLabel}>Contraseña</Text>
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        placeholder="Escribe tu contraseña"
        placeholderTextColor="#999" // placeholder claro
        color="#333" // texto dentro del input un gris oscuro
      />

      {/* Checkbox tipo ticket sin bordes */}
      <TouchableOpacity
        style={styles.checkboxArea}
        onPress={() => setKeepSession(!keepSession)}
      >
        <Text style={[styles.checkboxIcon, { color: TICK_COLOR }]}>
          {keepSession ? '✅' : '⬜'}
        </Text>
        <Text style={styles.checkboxLabel}>Mantener sesión activa</Text>
      </TouchableOpacity>

      <Text style={styles.forgotPassword}>¿Olvidaste tu contraseña?</Text>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },

  topButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 30,
    paddingHorizontal: 50,
    borderRadius: 30,
    marginBottom: 40,
  },
  topButtonText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },

  inputLabel: {
    alignSelf: 'flex-start',
    width: '100%',
    color: '#000',
    fontSize: 16,
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
  },

  checkboxArea: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginTop: 25,
    marginBottom: 20,
    paddingHorizontal: 0,
  },
  checkboxIcon: {
    fontSize: 22,
    marginRight: 8,
  },
  checkboxLabel: {
    fontSize: 16,
    color: '#000',
  },

  forgotPassword: {
    alignSelf: 'flex-start',
    width: '100%',
    color: '#1E90FF',
    fontSize: 14,
    marginBottom: 40,
    marginTop: 10,
  },

  loginButton: {
    backgroundColor: PRIMARY_COLOR,
    paddingVertical: 15,
    borderRadius: 30,
    width: '40%',
    alignItems: 'center',
  },
  loginButtonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
