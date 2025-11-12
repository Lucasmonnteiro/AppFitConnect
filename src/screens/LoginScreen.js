import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { GlobalStyles } from '../styles/GlobalStyles';

export default function LoginScreen({ navigation }) {
  return (
    <View style={[GlobalStyles.container, { justifyContent: 'center' }]}>
      <Text style={[GlobalStyles.title, { marginBottom: 20 }]}>AppFitConnect</Text>

      <TextInput placeholder="Email" style={GlobalStyles.input} />
      <TextInput placeholder="Senha" secureTextEntry style={GlobalStyles.input} />

      <TouchableOpacity
        style={[GlobalStyles.button, { marginTop: 8 }]}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={GlobalStyles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[GlobalStyles.buttonGhost, { marginTop: 12 }]}
        onPress={() => navigation.replace('Home')}
      >
        <Text style={GlobalStyles.buttonGhostText}>Criar conta</Text>
      </TouchableOpacity>
    </View>
  );
}
