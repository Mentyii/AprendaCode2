// login.tsx (Corrigido para SDK Web/JS)
import React, { useState } from "react";
import { Text, View, TextInput, StyleSheet, TouchableOpacity } from "react-native";
import { useRouter } from "expo-router";

// IMPORTAR: Funções do SDK Web/JS e a instância de auth do _layout.jsx
import { signInWithEmailAndPassword } from "firebase/auth";
import { authInstance } from '../_layout'; // Importa a instância exportada do _layout.jsx

import * as Animatable from 'react-native-animatable';

export default function Login() { 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [erroLogin, setErroLogin] = useState("");
  const router = useRouter();

  const signIn = async () => {
    // 1. Validação básica
    if (!email || !password) {
      setErroLogin("❌ Por favor, preencha o e-mail e a senha.");
      return;
    }

    try {
      // 2. Usar a função do SDK Web/JS com a instância de auth
      const userCredential = await signInWithEmailAndPassword(authInstance, email, password);
      
      if (userCredential) {
        router.replace('/view/homeView');
      }
    } catch (error) {
      console.log("Erro de Login:", error.code, error.message);
      
      // 3. Tratamento de erros específicos do Firebase
      let mensagem = "❌ Ocorreu um erro desconhecido. Tente novamente.";

      if (error.code === 'auth/wrong-password' || error.code === 'auth/user-not-found' || error.code === 'auth/invalid-credential') {
        mensagem = "❌ E-mail ou senha inválidos.";
      } else if (error.code === 'auth/invalid-email') {
        mensagem = "📧 O formato do e-mail é inválido.";
      } else if (error.code === 'auth/user-disabled') {
        mensagem = "🚫 Sua conta foi desativada.";
      }
      
      setErroLogin(mensagem);
    }
  }

  return (
    <View style={styles.container}>
      {/* Seção superior */}
      <View style={styles.topSection}>
        <Text style={styles.title}>AprendaCode</Text>
        <Text style={styles.subtitle}>Faça login na sua conta</Text>
      </View>

      {/* Seção inferior (Mantida sem alterações) */}
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

        <TouchableOpacity onPress={() => router.push("/view/cadastroView")}>
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