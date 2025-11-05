// index.jsx
import React from 'react'; // Corrigido: 'import *'react' para 'import React'
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push('/view/loginView');
  };

  return (
    <View style={styles.container}>
      {/* Topo com título e logo */}
      <View style={styles.topSection}>
        <Image
          source={require('../assets/images/ICONE APP APRENDA CODE - PNG.png')} // Altere o caminho conforme necessário
          style={styles.logo}
          resizeMode="contain"
        />
        {/* O título foi removido do JSX para corresponder ao seu código original, mas o estilo 'title' estava definido no CSS */}
      </View>

      {/* Parte inferior com mensagem e botão */}
      <View style={styles.bottomSection}>
        <Text style={styles.subtitle}>Bem-vindo ao seu portal de aprendizado de programação</Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigateToLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { // Início da definição do objeto 'container'
    flex: 1, // Adicionado para ocupar toda a tela
    backgroundColor: '#2c214a',
  }, // Vírgula para separar do próximo estilo
  topSection: { // Início da definição do objeto 'topSection'
    flex: 2, // Adicionado peso para ocupar 2/3 da tela
    justifyContent: 'center',
    alignItems: 'center',
  }, // Vírgula para separar do próximo estilo
  bottomSection: { // Início da definição do objeto 'bottomSection'
    flex: 1, // Adicionado peso para ocupar 1/3 da tela
    backgroundColor: '#3b3b3b',
    borderTopLeftRadius: 30, // Valores de exemplo para arredondamento
    borderTopRightRadius: 30, // Valores de exemplo para arredondamento
    justifyContent: 'space-around', // Mudado para melhor distribuição
    alignItems: 'center',
    paddingHorizontal: 20, // Valor de exemplo
    paddingVertical: 30, // Valor de exemplo
  }, // Vírgula para separar do próximo estilo
  logo: {
    width: 200, // Valor de exemplo
    height: 200, // Valor de exemplo
    marginBottom: 20, // Valor de exemplo
  }, // Vírgula para separar do próximo estilo
  title: { // Estilo mantido, embora não esteja sendo usado no JSX
    fontSize: 28, // Valor de exemplo
    fontWeight: 'bold',
    color: '#FFF',
  }, // Vírgula para separar do próximo estilo
  subtitle: {
    fontSize: 18, // Valor de exemplo
    color: '#DDD7ED',
    textAlign: 'center',
    marginBottom: 40, // Valor de exemplo
  }, // Vírgula para separar do próximo estilo
  button: {
    backgroundColor: '#5B4E82',
    paddingVertical: 12, // Valor de exemplo
    paddingHorizontal: 40, // Valor de exemplo
    borderRadius: 25, // Valor de exemplo
    elevation: 5, // Sombra no Android
  }, // Vírgula para separar do próximo estilo
  buttonText: {
    color: '#DDD7ED',
    fontSize: 18, // Valor de exemplo
    fontWeight: 'bold',
  },
});