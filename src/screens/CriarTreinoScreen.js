import React, { useState } from 'react';
import { View, TouchableOpacity, FlatList } from 'react-native';
import { Button, TextInput, Title, Card, Paragraph, Chip } from 'react-native-paper';
import { salvarTreino } from '../utils/Storage';
import { GlobalStyles, COLORS } from '../styles/GlobalStyles';
import { TREINOS_PRONTOS } from '../data/TreinosProntos';

const TAGS = [
  "Peito",
  "Costas",
  "Pernas",
  "Ombros",
  "Bíceps",
  "Tríceps",
  "Abdômen",
  "Cardio"
];

const CriarTreinoScreen = ({ navigation }) => {
  const [nome, setNome] = useState("");
  const [tagsSelecionadas, setTagsSelecionadas] = useState([]);
  const [exercicios, setExercicios] = useState([]);

  const toggleTag = (tag) => {
    if (tagsSelecionadas.includes(tag)) {
      setTagsSelecionadas(tagsSelecionadas.filter(t => t !== tag));
    } else {
      setTagsSelecionadas([...tagsSelecionadas, tag]);
    }
  };

  const sugestoes = nome.trim().length > 0
    ? TREINOS_PRONTOS.filter(t =>
        t.musculo.toLowerCase().includes(nome.toLowerCase()) ||
        t.nome.toLowerCase().includes(nome.toLowerCase())
      )
    : [];

  const aplicarSugestao = (treino) => {
    setNome(treino.nome);
    setExercicios(treino.exercicios);
    setTagsSelecionadas([treino.musculo]);
  };

  const salvar = async () => {
    if (!nome.trim()) return;

    const novo = {
      id: Date.now().toString(),
      nome,
      tags: tagsSelecionadas,
      exercicios,
      progresso: 0, // Para futura tela de progresso
    };

    await salvarTreino(novo);
    navigation.goBack();
  };

  return (
    <View style={GlobalStyles.container}>
      <Title style={{ marginBottom: 20 }}>Criar Novo Treino</Title>

      <TextInput
        label="Nome do Treino"
        value={nome}
        onChangeText={setNome}
        mode="outlined"
        style={{ marginBottom: 15 }}
      />

      {/* TAGS */}
      <Title style={{ fontSize: 16, marginBottom: 8 }}>Grupo Muscular</Title>
      <View style={{ flexDirection: "row", flexWrap: "wrap", marginBottom: 20 }}>
        {TAGS.map((tag) => (
          <Chip
            key={tag}
            style={{ margin: 4 }}
            selected={tagsSelecionadas.includes(tag)}
            selectedColor={COLORS.primary}
            onPress={() => toggleTag(tag)}
          >
            {tag}
          </Chip>
        ))}
      </View>

      {/* SUGESTÕES */}
      {sugestoes.length > 0 && (
        <View style={{ marginBottom: 20 }}>
          <Title style={{ fontSize: 16, marginBottom: 8, color: COLORS.muted }}>
            Sugestões de treino
          </Title>

          <FlatList
            data={sugestoes}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => aplicarSugestao(item)}>
                <Card style={{ marginBottom: 10 }}>
                  <Card.Content>
                    <Paragraph style={{ fontWeight: '700', fontSize: 16 }}>
                      {item.nome}
                    </Paragraph>
                    <Paragraph style={{ color: COLORS.muted }}>
                      {item.exercicios.length} exercícios disponíveis
                    </Paragraph>
                  </Card.Content>
                </Card>
              </TouchableOpacity>
            )}
          />
        </View>
      )}

      {/* LISTA DE EXERCÍCIOS */}
      {exercicios.length > 0 && (
        <View style={{ marginBottom: 20 }}>
          <Title style={{ fontSize: 16, marginBottom: 8 }}>Exercícios selecionados</Title>

          {exercicios.map((ex, index) => (
            <Card key={index} style={{ marginBottom: 10 }}>
              <Card.Content>
                <Paragraph style={{ fontWeight: '700' }}>{ex.nome}</Paragraph>
                <Paragraph style={{ color: COLORS.muted }}>
                  {ex.series} séries • {ex.reps} repetições
                </Paragraph>
              </Card.Content>
            </Card>
          ))}
        </View>
      )}

      <Button
        mode="contained"
        onPress={salvar}
        buttonColor={COLORS.primary}
      >
        Salvar Treino
      </Button>
    </View>
  );
};

export default CriarTreinoScreen;
