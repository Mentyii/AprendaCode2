
//login.tsx
import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";
import auth from '@react-native-firebase/auth' 
import * as Animatable from 'react-native-animatable';

export default function login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroLogin, setErroLogin] = useState("");
  const router = useRouter();

  const signIn = async () => {
   try {
    const userCredential = await auth().signInWithEmailAndPassword( email, password);
    if (userCredential) {
      router.replace('/(tabs)/home');
    }
    } catch (error: any) {
      console.log(error);
      setErroLogin("❌ Email ou senha inválidos. Tente novamente.");
    }
  }

  return (
    <View style={styles.container}>
      {/* Seção superior */}
      <View style={styles.topSection}>
        <Text style={styles.title}>AprendaCode</Text>
        <Text style={styles.subtitle}>Faça login na sua conta</Text>
      </View>

      {/* Seção inferior */}
      <View style={styles.bottomSection}>
        {erroLogin !== "" && (
        <Animatable.View
          animation="fadeInDown"
          duration={500}
          style={styles.alertBox}
        >
          <Text style={styles.alertText}>{erroLogin}</Text>
          <TouchableOpacity onPress={() => setErroLogin("")}>
            <Text style={styles.dismissText}>Fechar</Text>
          </TouchableOpacity>
        </Animatable.View>
      )}

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TouchableOpacity style={styles.button} onPress={signIn}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push("/view/cadastro")}>
          <Text style={styles.link}>Não tem uma conta? Cadastre-se aqui.</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c214a",
  },
  topSection: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  bottomSection: {
    flex: 1,
    backgroundColor: "#3b3b3b",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 24,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#DDD7ED",
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    color: "#DDD7ED",
  },
  input: {
    width: "100%",
    height: 45,
    borderColor: "#CCC",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
    color: "#3b3b3b",
    backgroundColor: "#FFF"
  },
  button: {
    backgroundColor: "#5B4E82",
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 8,
    width: "100%",
    alignItems: "center",
  },
  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  link: {
    marginTop: 20,
    color: "#9ae0f9",
    textDecorationLine: "underline",
    fontSize: 14,
  },
  alertBox: {
    backgroundColor: "#f8d7da",
    borderLeftWidth: 5,
    borderLeftColor: "#842029",
    padding: 12,
    marginBottom: 16,
    borderRadius: 8,
    width: "100%",
  },
  alertText: {
    color: "#842029",
    fontSize: 14,
    marginBottom: 6,
    textAlign: 'center',
  },
  dismissText: {
    color: "#842029",
    textDecorationLine: "underline",
    fontWeight: "600",
    fontSize: 13,
  }
});