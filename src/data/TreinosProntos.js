// src/data/TreinosProntos.js

export const TREINOS_PRONTOS = [
  {
    id: "peito-1",
    musculo: "peito",
    nome: "Peito Iniciante",
    nivel: "iniciante",
    tempoEstimado: 25, // minutos
    descanso: 60, // segundos entre séries
    foco: "hipertrofia",
    imagem: "https://exemplo.com/peito.png",
    exercicios: [
      { nome: "Supino Reto", series: 3, reps: 10, equipamento: "barra" },
      { nome: "Supino Inclinado", series: 3, reps: 12, equipamento: "halteres" },
      { nome: "Voador", series: 3, reps: 15, equipamento: "máquina" }
    ]
  },

  {
    id: "costas-1",
    musculo: "costas",
    nome: "Costas Iniciante",
    nivel: "iniciante",
    tempoEstimado: 25,
    descanso: 60,
    foco: "hipertrofia",
    imagem: "https://exemplo.com/costas.png",
    exercicios: [
      { nome: "Puxada Aberta", series: 3, reps: 10, equipamento: "máquina" },
      { nome: "Remada Baixa", series: 3, reps: 12, equipamento: "máquina" },
      { nome: "Pulldown", series: 3, reps: 15, equipamento: "máquina" }
    ]
  },

  {
    id: "pernas-1",
    musculo: "pernas",
    nome: "Pernas Iniciante",
    nivel: "iniciante",
    tempoEstimado: 30,
    descanso: 90,
    foco: "força",
    imagem: "https://exemplo.com/pernas.png",
    exercicios: [
      { nome: "Agachamento", series: 3, reps: 10, equipamento: "barra" },
      { nome: "Leg Press", series: 3, reps: 12, equipamento: "máquina" },
      { nome: "Cadeira Extensora", series: 3, reps: 15, equipamento: "máquina" }
    ]
  },

  {
    id: "ombro-1",
    musculo: "ombro",
    nome: "Ombro Iniciante",
    nivel: "iniciante",
    tempoEstimado: 20,
    descanso: 60,
    foco: "hipertrofia",
    imagem: "https://exemplo.com/ombro.png",
    exercicios: [
      { nome: "Elevação Lateral", series: 3, reps: 12, equipamento: "halteres" },
      { nome: "Desenvolvimento", series: 3, reps: 10, equipamento: "halteres" },
      { nome: "Elevação Frontal", series: 3, reps: 12, equipamento: "halteres" }
    ]
  },

  {
    id: "biceps-1",
    musculo: "biceps",
    nome: "Bíceps Iniciante",
    nivel: "iniciante",
    tempoEstimado: 20,
    descanso: 60,
    foco: "hipertrofia",
    imagem: "https://exemplo.com/biceps.png",
    exercicios: [
      { nome: "Rosca Direta", series: 3, reps: 12, equipamento: "barra" },
      { nome: "Rosca Martelo", series: 3, reps: 12, equipamento: "halteres" },
      { nome: "Rosca Alternada", series: 3, reps: 12, equipamento: "halteres" }
    ]
  },

  {
    id: "triceps-1",
    musculo: "triceps",
    nome: "Tríceps Iniciante",
    nivel: "iniciante",
    tempoEstimado: 20,
    descanso: 60,
    foco: "hipertrofia",
    imagem: "https://exemplo.com/triceps.png",
    exercicios: [
      { nome: "Tríceps Corda", series: 3, reps: 12, equipamento: "máquina" },
      { nome: "Tríceps Testa", series: 3, reps: 10, equipamento: "halteres" },
      { nome: "Fundos", series: 3, reps: 15, equipamento: "peso corporal" }
    ]
  },

  {
    id: "fullbody-1",
    musculo: "full",
    nome: "Treino Full Body Iniciante",
    nivel: "iniciante",
    tempoEstimado: 35,
    descanso: 90,
    foco: "geral",
    imagem: "https://exemplo.com/full.png",
    exercicios: [
      { nome: "Agachamento", series: 3, reps: 10, equipamento: "barra" },
      { nome: "Supino Reto", series: 3, reps: 10, equipamento: "barra" },
      { nome: "Remada Baixa", series: 3, reps: 12, equipamento: "máquina" }
    ]
  }
];
