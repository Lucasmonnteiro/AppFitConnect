import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// telas
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import CriarTreinoScreen from '../screens/CriarTreinoScreen';
import TreinosScreen from '../screens/TreinosScreen';
import ProgressoScreen from '../screens/ProgressoScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login" screenOptions={{ headerShown: true }}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login' }} />
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
        <Stack.Screen name="CriarTreino" component={CriarTreinoScreen} options={{ title: 'Criar Treino' }} />
        <Stack.Screen name="Treinos" component={TreinosScreen} options={{ title: 'Treinos' }} />
        <Stack.Screen name="Progresso" component={ProgressoScreen} options={{ title: 'Progresso' }} />
        <Stack.Screen name="Perfil" component={PerfilScreen} options={{ title: 'Perfil' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
