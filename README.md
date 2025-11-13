# 💪 AppFitConnect

O **AppFitConnect** é um aplicativo mobile e web desenvolvido com
**React Native + Expo**, que tem como objetivo ajudar usuários a
gerenciar seus treinos, progresso e perfil de forma simples e moderna.\
Ele foi construído com foco **educacional e de portfólio**, servindo
como um excelente exemplo prático para quem está estudando
desenvolvimento mobile com React Native.

------------------------------------------------------------------------

## 🧭 Visão Geral

O projeto é composto por um sistema de: - **Login e Cadastro** simulados
com armazenamento local (`AsyncStorage`); - Uma **HomeScreen** com
atalhos para as principais áreas do app; - Um visual moderno e limpo
inspirado em **saúde e bem-estar** (paleta verde e azul); - Uso do
**React Native Paper** e **Expo Linear Gradient** para o design; -
Navegação entre telas via **React Navigation**.

------------------------------------------------------------------------

## ⚙️ Funcionalidades Principais

✅ **Login e Cadastro** com validação de campos\
✅ **Armazenamento local de usuário** (sem backend)\
✅ **Tela inicial com atalhos rápidos:**\
- Meus Treinos\
- Criar Treino\
- Progresso\
- Perfil\
✅ **Botão de sair (logout)** que limpa o armazenamento local\
✅ **Layout responsivo e compatível com Web e Android**\
✅ **Tema moderno com gradientes e ícones Ionicons**

------------------------------------------------------------------------

## 🧠 Contexto Educacional

Esse projeto foi desenvolvido por **Lucas**, estudante de Ciência da
Computação, com o objetivo de: - Aprender conceitos de **React Native e
Expo**; - Entender a estrutura de **navegação entre telas**; - Criar
**interfaces modernas e fluidas** usando bibliotecas visuais; - Simular
um fluxo real de **login e cadastro** de usuários.

------------------------------------------------------------------------

## 🛠️ Tecnologias Utilizadas

  -----------------------------------------------------------------------
  Tecnologia                                  Função
  ------------------------------------------- ---------------------------
  **React Native**                            Base do aplicativo

  **Expo**                                    Facilita o desenvolvimento
                                              e execução no emulador e
                                              navegador

  **React Native Paper**                      Componentes prontos e
                                              estilizados (inputs,
                                              botões, cards etc.)

  **React Navigation (Native Stack)**         Navegação entre telas

  **AsyncStorage**                            Armazenamento local dos
                                              dados do usuário

  **Expo Linear Gradient**                    Gradiente de fundo (estilo
                                              saúde/bem-estar)

  **Ionicons**                                Ícones modernos e
                                              adaptáveis

  **JavaScript (ES6)**                        Linguagem principal
  -----------------------------------------------------------------------

------------------------------------------------------------------------

## 🎨 Identidade Visual

O AppFitConnect utiliza uma paleta inspirada em **bem-estar e saúde**,
com tons de verde e azul.

  -------------------------------------------------------------------------------
  Cor                    Hex                        Função
  ---------------------- -------------------------- -----------------------------
  Verde escuro           `#1f4037`                  Fundo principal do gradiente

  Verde claro            `#99f2c8`                  Destaques do gradiente

  Azul principal         `#1E90FF`                  Ícones e títulos

  Fundo suave            `#F9FAFB`                  Background geral

  Branco translúcido     `rgba(255,255,255,0.15)`   Cartões e caixas de login
  -------------------------------------------------------------------------------

------------------------------------------------------------------------

## 🗂️ Estrutura do Projeto

    AppFitConnect/
    │
    ├── App.js
    ├── package.json
    ├── README.md
    │
    ├── src/
    │   ├── navigation/
    │   │   └── AppNavigator.js        # Gerencia as rotas
    │   │
    │   ├── screens/                   # Todas as telas do app
    │   │   ├── LoginScreen.js
    │   │   ├── CadastroScreen.js
    │   │   ├── HomeScreen.js
    │   │   ├── CriarTreinoScreen.js
    │   │   ├── TreinosScreen.js
    │   │   ├── ProgressoScreen.js
    │   │   └── PerfilScreen.js
    │   │
    │   └── styles/
    │       └── GlobalStyles.js        # Estilos globais e paleta de cores
    │
    └── assets/                        # (opcional) ícones, imagens, etc.

------------------------------------------------------------------------

## 📦 Instalação do Projeto

### 1️⃣ Clonar o repositório

``` bash
git clone https://github.com/seu-usuario/AppFitConnect.git
cd AppFitConnect
```

### 2️⃣ Instalar as dependências

``` bash
npm install
```

ou

``` bash
yarn install
```

------------------------------------------------------------------------

## ⚙️ Dependências Utilizadas

``` bash
npx expo install react-native-paper
npx expo install @react-navigation/native
npx expo install @react-navigation/native-stack
npx expo install @react-native-async-storage/async-storage
npx expo install expo-linear-gradient
npx expo install @expo/vector-icons
```

------------------------------------------------------------------------

## ▶️ Como Rodar o Projeto

### 💻 Rodar no navegador (modo web)

``` bash
npx expo start --web
```

### 📱 Rodar no Android Studio

1.  Abra o Android Studio

2.  Vá em **Device Manager → Create Device**

3.  Inicie o emulador

4.  Rode:

    ``` bash
    npx expo start
    ```

5.  Pressione **a** para abrir no emulador Android


