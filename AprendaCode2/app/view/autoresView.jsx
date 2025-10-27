// /(tabs)/autores.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function AutoresScreen() {
  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Autores</Text>
        <Text style={styles.subtitle}>Conheça os responsáveis pelo projeto:</Text>
      </View>

      {/* Lista de autores */}
      <View style={styles.list}>
        <Text style={styles.author}>• Guilherme Pereira Scatolino</Text>
        <Text style={styles.author}>• Karen Gabrielle Aredes dos Santos</Text>
        <Text style={styles.author}>• Maria Eduarda Vilaca</Text>
        <Text style={styles.author}>• Matheus Carneiro Silva</Text>
        <Text style={styles.author}>• Miguel Frederico Rocha Souza Pereira</Text>
        <Text style={styles.author}>• Samuel Souto Pedra</Text>
        <Text style={styles.author}>• Vitor Gabriel Ferreira Bastos</Text>
        <Text style={styles.author}>• William Hideyuki Ibaraki Suyama</Text>
      </View>

      <View style={styles.header}>
        <Text style={styles.title}>Obrigado por utilizar</Text>
      </View>

      <Animatable.View animation="zoomIn" duration={1000} style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/APRENDA CODE LOGOTIPO PNG.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animatable.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c214a",
    padding: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
    marginTop: "10%",
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#DDD7ED",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#DDD7ED",
    textAlign: "center",
    marginTop: 8,
  },
  list: {
    marginTop: 20,
    paddingLeft: 10,
  },
  author: {
    fontSize: 18,
    color: "#FFF",
    marginBottom: 10,
  },
  logo: {
    width: 180,        
    height: 180,      
    borderRadius: 16,  
  },
  logoContainer: {
    backgroundColor: "#fff",
    padding: 12,
    borderRadius: 20,
    elevation: 4, // sombra no Android
    shadowColor: "#000", // sombra no iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: 'center',
    width: 180,        
    height: 180
  }
});