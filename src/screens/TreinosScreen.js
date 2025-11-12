import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function TreinosScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Treinos</Text>
      <Text style={styles.subtitle}>Lista de treinos vai aqui</Text>

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
