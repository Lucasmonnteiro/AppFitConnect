// src/styles/GlobalStyles.js
import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#00c896',     // verde principal (vibrante e saudável)
  primaryDark: '#009b74', // verde escuro (profundidade)
  secondary: '#a8edea',   // verde-claro/pastel (suavidade)
  background: '#f4fff9',  // fundo branco-esverdeado
  card: '#ffffff',        // branco puro para contraste
  text: '#1f4037',        // verde escuro (legibilidade)
  muted: '#5f7c73',       // verde acinzentado (texto secundário)
  danger: '#ff4d4f',      // vermelho de alerta
};

export const GlobalStyles = StyleSheet.create({
  // container padrão usado na maioria das telas
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 20,
  },

  // centro vertical/horizontal
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // títulos
  title: {
    fontSize: 26,
    fontWeight: '700',
    color: COLORS.primaryDark,
  },
  subtitle: {
    fontSize: 14,
    color: COLORS.muted,
  },

  // input simples
  input: {
    width: '100%',
    backgroundColor: COLORS.card,
    paddingVertical: 12,
    paddingHorizontal: 14,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d8f3e3', // leve borda esverdeada
    marginBottom: 12,
  },

  // botão primário
  button: {
    width: '100%',
    backgroundColor: COLORS.primary,
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: COLORS.card,
    fontWeight: '700',
    fontSize: 16,
  },

  // botão secundário estilo "ghost"
  buttonGhost: {
    width: '100%',
    backgroundColor: 'transparent',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },
  buttonGhostText: {
    color: COLORS.primary,
    fontWeight: '700',
    fontSize: 16,
  },

  // card básico
  card: {
    backgroundColor: COLORS.card,
    borderRadius: 14,
    padding: 16,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    marginBottom: 14,
  },

  // utilitários
  row: { flexDirection: 'row', alignItems: 'center' },
  spaced: { justifyContent: 'space-between' },
});
