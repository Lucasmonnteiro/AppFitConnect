import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function CriarTreinoScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Criar / Editar Treino</Text>
      <Text style={styles.subtitle}>Aqui você colocará o formulário</Text>

      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{ flex:1, justifyContent:'center', alignItems:'center', padding:20 },
  title:{ fontSize:22, fontWeight:'700', marginBottom:6 },
  subtitle:{ color:'#666', marginBottom:20 },
  button:{ backgroundColor:'#007bff', paddingVertical:10, paddingHorizontal:20, borderRadius:8 },
  buttonText:{ color:'#fff', fontWeight:'600' }
});
