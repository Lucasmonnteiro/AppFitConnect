import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function CadastroScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  const handleCadastro = async () => {
    if (!email || !usuario || !senha || !confirmarSenha) {
      alert('Preencha todos os campos!');
      return;
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem!');
      return;
    }

    const newUser = { email, usuario, senha };
    await AsyncStorage.setItem('user', JSON.stringify(newUser));
    alert('Conta criada com sucesso!');
    navigation.replace('Login');
  };

  return (
    <LinearGradient colors={['#0f2027', '#203a43', '#2c5364']} style={styles.gradient}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.card}>
            <Ionicons name="person-add-outline" size={70} color="#00e0c7" style={styles.icon} />

            <Text style={styles.title}>Crie sua conta</Text>
            <Text style={styles.subtitle}>Leva menos de um minuto 😉</Text>

            <TextInput
              label="Email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="email-outline" />}
              outlineStyle={styles.inputOutline}
              theme={{ colors: { text: '#fff', placeholder: '#ddd' } }}
            />

            <TextInput
              label="Usuário"
              value={usuario}
              onChangeText={setUsuario}
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="account-outline" />}
              outlineStyle={styles.inputOutline}
              theme={{ colors: { text: '#fff', placeholder: '#ddd' } }}
            />

            <TextInput
              label="Senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="lock-outline" />}
              outlineStyle={styles.inputOutline}
              theme={{ colors: { text: '#fff', placeholder: '#ddd' } }}
            />

            <TextInput
              label="Confirmar Senha"
              value={confirmarSenha}
              onChangeText={setConfirmarSenha}
              secureTextEntry
              style={styles.input}
              mode="outlined"
              left={<TextInput.Icon icon="lock-check-outline" />}
              outlineStyle={styles.inputOutline}
              theme={{ colors: { text: '#fff', placeholder: '#ddd' } }}
            />

            <Button
              mode="contained"
              onPress={handleCadastro}
              style={styles.button}
              contentStyle={{ paddingVertical: 6 }}
              labelStyle={{ fontSize: 16, fontWeight: 'bold' }}
            >
              Cadastrar
            </Button>

            <Button
              mode="text"
              onPress={() => navigation.replace('Login')}
              textColor="#fff"
              style={{ marginTop: 8 }}
            >
              Já tem uma conta? Entrar
            </Button>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
    paddingVertical: 40,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    borderRadius: 24,
    padding: 28,
    shadowColor: '#000',
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 6,
  },
  icon: {
    alignSelf: 'center',
    marginBottom: 8,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 15,
    color: '#d0f0f0',
    textAlign: 'center',
    marginBottom: 25,
  },
  input: {
    marginBottom: 12,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  inputOutline: {
    borderRadius: 12,
    borderColor: 'rgba(255,255,255,0.3)',
  },
  button: {
    backgroundColor: '#00e0c7',
    borderRadius: 12,
    marginTop: 8,
  },
});
