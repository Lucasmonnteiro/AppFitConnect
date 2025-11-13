import React, { useState } from 'react';
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

export default function LoginScreen({ navigation }) {
  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');

  const handleLogin = async () => {
    const savedUser = await AsyncStorage.getItem('user');
    if (savedUser) {
      const user = JSON.parse(savedUser);
      if (
        (login === user.email || login === user.usuario) &&
        senha === user.senha
      ) {
        await AsyncStorage.setItem('isLoggedIn', 'true');
        await AsyncStorage.setItem('username', user.usuario);
        navigation.replace('Home');
      } else {
        alert('Usuário/E-mail ou senha incorretos!');
      }
    } else {
      alert('Nenhum usuário cadastrado. Crie uma conta primeiro.');
    }
  };

  return (
    <LinearGradient
      colors={['#00C896', '#00A676', '#006E52']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.gradient}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.box}>
          <Ionicons
            name="heart-circle-outline"
            size={70}
            color="#fff"
            style={{ marginBottom: 10 }}
          />
          <Text style={styles.title}>AppFitConnect</Text>
          <Text style={styles.subtitle}>Seu treino, sua evolução 💪</Text>

          <TextInput
            label="Usuário ou Email"
            value={login}
            onChangeText={setLogin}
            mode="outlined"
            outlineColor="rgba(255,255,255,0.3)"
            activeOutlineColor="#00C896"
            style={styles.input}
            left={<TextInput.Icon icon="account-outline" />}
            textColor="#fff"
            theme={{ colors: { text: '#fff', placeholder: '#c8f5e6' } }}
          />

          <TextInput
            label="Senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
            mode="outlined"
            outlineColor="rgba(255,255,255,0.3)"
            activeOutlineColor="#00C896"
            style={styles.input}
            left={<TextInput.Icon icon="lock-outline" />}
            textColor="#fff"
            theme={{ colors: { text: '#fff', placeholder: '#c8f5e6' } }}
          />

          <Button
            mode="contained"
            onPress={handleLogin}
            style={styles.button}
            labelStyle={{ fontSize: 16, fontWeight: '600' }}
          >
            Entrar
          </Button>

          <Button
            mode="text"
            onPress={() => navigation.navigate('Cadastro')}
            textColor="#c8f5e6"
            style={{ marginTop: 10 }}
          >
            Criar conta
          </Button>
        </View>
      </KeyboardAvoidingView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24,
  },
  box: {
    padding: 28,
    backgroundColor: 'rgba(255,255,255,0.1)',
    borderRadius: 20,
    elevation: 6,
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 4 },
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 16,
    color: '#d6fbe3',
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    marginBottom: 14,
    backgroundColor: 'rgba(255,255,255,0.05)',
  },
  button: {
    marginTop: 10,
    backgroundColor: '#00C896',
    borderRadius: 10,
    paddingVertical: 4,
  },
});
