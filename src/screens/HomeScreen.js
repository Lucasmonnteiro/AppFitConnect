import React, { useEffect, useState } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';
import { Card, Text, Button, IconButton } from 'react-native-paper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

export default function HomeScreen({ navigation }) {
  const [usuario, setUsuario] = useState('');

  useEffect(() => {
    const fetchUser = async () => {
      const nome = await AsyncStorage.getItem('username');
      if (nome) setUsuario(nome);
    };
    fetchUser();
  }, []);

  const handleLogout = async () => {
    await AsyncStorage.removeItem('isLoggedIn');
    await AsyncStorage.removeItem('username');
    navigation.replace('Login');
  };

  return (
    <LinearGradient colors={['#1f4037', '#99f2c8']} style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <Text style={styles.title}>
          Bem-vindo, {usuario || 'usuário'} 💪
        </Text>

        <View style={styles.cardContainer}>
          <Card style={styles.card} onPress={() => navigation.navigate('Treinos')}>
            <Card.Content style={styles.cardContent}>
              <IconButton icon="dumbbell" size={36} iconColor="#00c896" />
              <Text style={styles.cardText}>Meus Treinos</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card} onPress={() => navigation.navigate('CriarTreino')}>
            <Card.Content style={styles.cardContent}>
              <IconButton icon="plus-circle-outline" size={36} iconColor="#2ecc71" />
              <Text style={styles.cardText}>Criar Treino</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card} onPress={() => navigation.navigate('Progresso')}>
            <Card.Content style={styles.cardContent}>
              <IconButton icon="chart-line" size={36} iconColor="#27ae60" />
              <Text style={styles.cardText}>Progresso</Text>
            </Card.Content>
          </Card>

          <Card style={styles.card} onPress={() => navigation.navigate('Perfil')}>
            <Card.Content style={styles.cardContent}>
              <IconButton icon="account-circle" size={36} iconColor="#16a085" />
              <Text style={styles.cardText}>Perfil</Text>
            </Card.Content>
          </Card>
        </View>

        <Button
          mode="outlined"
          style={styles.logoutButton}
          textColor="#fff"
          icon="logout"
          onPress={handleLogout}
        >
          Sair
        </Button>
      </ScrollView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {
    paddingVertical: 50,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 30,
    textAlign: 'center',
    color: '#fff',
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
  },
  card: {
    width: '90%',
    marginBottom: 20,
    borderRadius: 16,
    elevation: 4,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingVertical: 18,
    paddingHorizontal: 10,
  },
  cardText: {
    fontSize: 18,
    marginLeft: 10,
    fontWeight: '600',
    color: '#fff',
  },
  logoutButton: {
    marginTop: 30,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 10,
    width: '60%',
  },
});
