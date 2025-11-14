import AsyncStorage from '@react-native-async-storage/async-storage';

const KEY = "@treinos";

export const getTreinos = async () => {
  try {
    const data = await AsyncStorage.getItem(KEY);
    return data ? JSON.parse(data) : [];
  } catch (e) {
    console.error("Erro ao pegar treinos:", e);
    return [];
  }
};

export const salvarTreino = async (treino) => {
  try {
    const lista = await getTreinos();
    lista.push(treino);
    await AsyncStorage.setItem(KEY, JSON.stringify(lista));
  } catch (e) {
    console.error("Erro ao salvar treino:", e);
  }
};

export const deleteTreino = async (id) => {
  try {
    const lista = await getTreinos();
    const nova = lista.filter(t => t.id !== id);
    await AsyncStorage.setItem(KEY, JSON.stringify(nova));
  } catch (e) {
    console.error("Erro ao deletar treino:", e);
  }
};
