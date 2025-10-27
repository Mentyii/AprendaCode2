// /(tabs)/home.tsx
import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import * as Animatable from 'react-native-animatable';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Seção superior com título */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Bem-vindo à AprendaCode!</Text>
        <Text style={styles.subtitle}>O que somos?</Text>
      </View>

      <Animatable.View animation="zoomIn" duration={1000} style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/ICONE APP APRENDA CODE - PNG.png')}
          style={styles.logo}
          resizeMode="contain"
        />
      </Animatable.View>

      {/* Seção inferior com descrição */}
      <View style={styles.contentSection}>
        <Text style={styles.text}>
          AprendaCode é um aplicativo desenvolvido por alunos da Universidade Newton Paiva Wyden com o propósito de apresentar tecnologias da área de programação.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c214a",
    padding: 20,
  },
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 10,
  },
  contentSection: {
    flex: 2,
    justifyContent: "flex-start",
    paddingTop: 40
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DDD7ED",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 20,
    fontWeight: "600",
    color: "#DDD7ED",
    marginTop: 10,
    textAlign: "center",
  },
  text: {
    fontSize: 18,
    color: "#FFF",
    textAlign: "justify",
    lineHeight: 24,
    marginTop: 16,
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
    alignSelf: "center",
    width: 180,        
    height: 180
  }
});