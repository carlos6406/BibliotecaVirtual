import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';



const LogoImg = require('./LOGO.png'); 

export default function InicioScreen({ navigation }) {
  return (
    <View style={styles.container}>
         <Image source={LogoImg} style={styles.logo} />

      <Text style={styles.title}>Biblioteca de Objetos</Text>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#1E90FF' }]}
          onPress={() => navigation.navigate('IniciarSesion')}
        >
          <Text style={styles.buttonText}>Iniciar Sesión</Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, { backgroundColor: '#1E90FF' }]}
          onPress={() => navigation.navigate('Registrarse')}
        >
          <Text style={styles.buttonText}>Registrarse</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    alignItems: 'center',
    backgroundColor: '#fff', 
    marginTop: 100,
  },
   header: {
    alignItems: 'center',     // Centra imagen y título
    marginBottom: 40,         // Espacio entre header y botones
  },
  logo: {
    width: 300,
    height: 300,
    marginBottom: 20,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 20, 
  },
  buttonsContainer: {
    marginTop: 30, 
    width: '80%',
  },
  button: {
    paddingVertical: 35,
    borderRadius: 100,
    alignItems: 'center',
    marginVertical: 30,
  },
  buttonText: {
    color: '#fcf7f7ff',
    fontSize: 30,
    fontWeight: 'bold',
     marginTop:0,
  },
});
