import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
// App.js
import LoginScreen from './PROYECTO/Login/LoginScreen.jsx';
import InisiarSesion from './PROYECTO/Login/InisiarSesion.jsx';
import Registrarse from './PROYECTO/Login/Registrarse.jsx'; 


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Inicio">
        <Stack.Screen 
          name="Inicio" 
          component={LoginScreen} 
          options={{ headerShown: false }}
        />
        <Stack.Screen name="IniciarSesion" component={InisiarSesion} />
        <Stack.Screen name="Registrarse" component={Registrarse} />
    
      </Stack.Navigator>
    </NavigationContainer>
  );
}