// src/styles/GlobalStyles.js
import { StyleSheet } from 'react-native';

export const COLORS = {
  primary: '#1E90FF',    // azul principal
  primaryDark: '#1570d6',
  secondary: '#87CEFA',  // azul claro
  background: '#F2F2F6',
  card: '#FFFFFF',
  text: '#222222',
  muted: '#666666',
  danger: '#FF4D4F',
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
    color: COLORS.primary,
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
    borderColor: '#E6E9EE',
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
    borderRadius: 12,
    padding: 14,
    shadowColor: '#000',
    shadowOpacity: 0.03,
    shadowRadius: 6,
    elevation: 2,
    marginBottom: 12,
  },

  // utilitários
  row: { flexDirection: 'row', alignItems: 'center' },
  spaced: { justifyContent: 'space-between' },
});
