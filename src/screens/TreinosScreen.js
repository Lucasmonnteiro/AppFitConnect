import React, { useEffect, useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { Text, ActivityIndicator, IconButton } from "react-native-paper";
import { GlobalStyles, COLORS } from "../styles/GlobalStyles";
import { pegarTreinos, removerTreino } from "../utils/Storage";

const getMuscleIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes("peito")) return "arm-flex";
  if (n.includes("costas")) return "backburger";
  if (n.includes("perna") || n.includes("lower")) return "run";
  if (n.includes("ombro")) return "human-male";
  if (n.includes("bíceps") || n.includes("biceps")) return "dumbbell";
  if (n.includes("tríceps") || n.includes("triceps")) return "weight-lifter";
  if (n.includes("full")) return "alpha-f-box";
  return "dumbbell";
};

const TreinosScreen = ({ navigation }) => {
  const [treinos, setTreinos] = useState(null);

  const carregar = async () => {
    const dados = await pegarTreinos();
    setTreinos(dados);
  };

  useEffect(() => {
    const unsubscribe = navigation.addListener("focus", carregar);
    return unsubscribe;
  }, [navigation]);

  const excluir = async (id) => {
    await removerTreino(id);
    carregar();
  };

  const renderTreino = ({ item }) => {
    const totalEx = item.exercicios?.length || 0;
    const totalSeries = item.exercicios?.reduce(
      (sum, ex) => sum + (ex.series || 0),
      0
    );

    return (
      <TouchableOpacity
        onPress={() => navigation.navigate("DetalhesTreino", { treino: item })}
        style={{
          backgroundColor: COLORS.card,
          padding: 16,
          borderRadius: 16,
          marginBottom: 16,
          shadowColor: "#000",
          shadowOpacity: 0.05,
          shadowRadius: 6,
          elevation: 3,
          borderWidth: 1,
          borderColor: COLORS.border,
        }}
      >
        {/* Header */}
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <IconButton
            icon={getMuscleIcon(item.nome)}
            iconColor={COLORS.primary}
            size={32}
          />

          <View style={{ flex: 1 }}>
            <Text style={{ fontSize: 18, fontWeight: "700", color: COLORS.text }}>
              {item.nome}
            </Text>

            <Text style={{ color: COLORS.muted }}>
              {totalEx} exercícios • {totalSeries} séries totais
            </Text>
          </View>

          <IconButton
            icon="delete-outline"
            iconColor="red"
            size={24}
            onPress={() => excluir(item.id)}
          />
        </View>

        {/* Barra de progresso estética */}
        <View
          style={{
            marginTop: 12,
            height: 6,
            backgroundColor: COLORS.border,
            borderRadius: 4,
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: `${Math.min((totalSeries / 30) * 100, 100)}%`,
              height: "100%",
              backgroundColor: COLORS.primary,
            }}
          />
        </View>
      </TouchableOpacity>
    );
  };

  return (
    <View style={[GlobalStyles.container, { paddingTop: 20 }]}>
      <Text style={{ fontSize: 28, fontWeight: "700", marginBottom: 20 }}>
        Treinos
      </Text>

      {!treinos ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : treinos.length === 0 ? (
        <Text style={{ color: COLORS.muted }}>Nenhum treino criado ainda.</Text>
      ) : (
        <FlatList
          data={treinos}
          keyExtractor={(item) => item.id}
          renderItem={renderTreino}
        />
      )}
    </View>
  );
};

export default TreinosScreen;
