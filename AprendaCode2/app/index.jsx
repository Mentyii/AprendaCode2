// index.tsx
import *'react';
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
  container,
    backgroundColor: '#2c214a',
  },
  topSection,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bottomSection,
    backgroundColor: '#3b3b3b',
    borderTopLeftRadius,
    borderTopRightRadius,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal,
  },
  logo: {
    width: '60%',
    height: '60%',
    marginBottom,
  },
  title,
    fontWeight: 'bold',
    color: '#FFF',
  },
  subtitle,
    color: '#DDD7ED',
    textAlign: 'center',
    marginBottom,
  },
  button: {
    backgroundColor: '#5B4E82',
    paddingVertical,
    paddingHorizontal,
    borderRadius,
    elevation,
  },
  buttonText: {
    color: '#DDD7ED',
    fontSize,
    fontWeight: 'bold',
  },
});
