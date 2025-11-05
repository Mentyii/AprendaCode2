// index.tsx
import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useRouter } from 'expo-router';

export default function IndexScreen() {
  const router = useRouter();

  const handleNavigateToLogin = () => {
    router.push('/view/login');
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
      </View>

      {/* Parte inferior com mensagem e botão */}
      <View style={styles.bottomSection}>
        <Text style={styles.subtitle}>Bem-vindo ao seu portal de aprendizado de programação!</Text>
        <TouchableOpacity style={styles.button} onPress={handleNavigateToLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2c214a',
  },
  topSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection: {
    flex: 1,
    backgroundColor: '#3b3b3b',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 30,
  },
  logo: {
    width: '60%',
    height: '60%',
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle: {
    fontSize: 18,
    color: '#DDD7ED',
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#5B4E82',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
    color: '#DDD7ED',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
