// App.js
import * as React from 'react';
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper';
import AppNavigator from './src/navigation/AppNavigator'; // garante que a pasta seja "src/navigation" (sem acento)

// Tema opcional (você pode mudar as cores depois)
const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#1E90FF',  // azul principal
    secondary: '#87CEFA', // azul claro para destaque
    background: '#F9FAFB', // fundo suave
  },
};

export default function App() {
  return (
    <PaperProvider theme={theme}>
      <AppNavigator />
    </PaperProvider>
  );
}
