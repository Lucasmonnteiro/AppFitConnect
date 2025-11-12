import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home</Text>
      <Text style={styles.subtitle}>Escolha uma opção</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('CriarTreino')}>
        <Text style={styles.buttonText}>Criar Treino</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Treinos')}>
        <Text style={styles.buttonText}>Treinos</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Progresso')}>
        <Text style={styles.buttonText}>Progresso</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Perfil')}>
        <Text style={styles.buttonText}>Perfil</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title: { fontSize:28, fontWeight:'700', marginBottom:6 },
  subtitle: { fontSize:14, color:'#666', marginBottom:20 },
  button: { width:'80%', backgroundColor:'#007bff', paddingVertical:12, borderRadius:8, marginBottom:12, alignItems:'center' },
  buttonText: { color:'#fff', fontSize:16, fontWeight:'600' }
});
