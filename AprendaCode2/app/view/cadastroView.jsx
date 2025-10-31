// cadastro.jsx
import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform, ScrollView } from "react-native";
import { useRouter } from "expo-router";

// CORREÇÃO: Importar as funções do SDK Web/JS e a instância de auth exportada do _layout.jsx
// OBS: Você precisará exportar authInstance do seu _layout.jsx
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { authInstance } from '../_layout'; // Assumindo que você exportou a instância de auth aqui

import * as Animatable from "react-native-animatable";

// Componente principal do Cadastro
export default function Cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const router = useRouter();

  const signUp = async () => {
    // 1. Validação de Campos
    if (!name || !email || !password || !passwordConfirm) {
      setMensagemErro("❗ Preencha todos os campos corretamente.");
      return;
    }

    if (password !== passwordConfirm) {
      setMensagemErro("🔐 As senhas não coincidem.");
      return;
    }

    // 2. Criação de Usuário no Firebase (Usando SDK Web)
    try {
      // Usa a função do SDK Web, passando a instância de auth e os dados
      const userCredential = await createUserWithEmailAndPassword(authInstance, email, password);

      // CORREÇÃO: Atualiza o perfil do usuário (Código duplicado removido)
      if (userCredential.user) {
        // Usa a função updateProfile do SDK Web/JS
        await updateProfile(userCredential.user, {
          displayName: name, // Salva o nome
        });
      }
      
      // Navega para a tela de login após sucesso
      router.replace("/view/loginView"); 
      
    } catch (error) { 
      // O console.log(error) é importante para debugar
      console.log("Erro de Cadastro:", error);

      // 3. Tratamento de Erros do Firebase (Códigos são os mesmos para ambos SDKs)
      if (error.code === "auth/email-already-in-use") {
        setMensagemErro("⚠️ Este e-mail já está cadastrado.");
      } else if (error.code === "auth/invalid-email") {
        setMensagemErro("📧 E-mail inválido. Verifique o formato.");
      } else if (error.code === "auth/weak-password") {
        setMensagemErro("🔐 A senha deve ter pelo menos 6 caracteres.");
      } else if (error.code === "auth/invalid-api-key") {
        setMensagemErro("🛑 Erro de Configuração: API Key Inválida. Verifique a chave no _layout.jsx.");
      } else {
        setMensagemErro("Erro ao cadastrar. Tente novamente. Código: " + error.code);
      }
    }
  };

  // ... (O JSX e os estilos permanecem inalterados e estão otimizados)
  return (
    <KeyboardAvoidingView 
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
    >
      <ScrollView contentContainerStyle={styles.scrollContent}>
        
        {/* Topo com título */}
        <View style={styles.topSection}>
          <Text style={styles.title}>Criar Conta</Text>
          <Text style={styles.subtitle}>Preencha seus dados abaixo</Text>
        </View>

        {/* Formulário */}
        <View style={styles.formSection}>
          {mensagemErro !== "" && (
            <Animatable.View animation="fadeInDown" style={styles.alertBox}>
              <Text style={styles.alertText}>{mensagemErro}</Text>

              <View style={styles.alertButtonsContainer}>
                <TouchableOpacity onPress={() => setMensagemErro("")}>
                  <Text style={styles.dismissText}>Fechar</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => router.push("/view/loginView")}>
                  <Text style={styles.dismissText}>Ir para Login</Text>
                </TouchableOpacity>
              </View>
            </Animatable.View>
          )}

          <TextInput
            style={styles.input}
            placeholder="Nome"
            placeholderTextColor="#888"
            value={name}
            onChangeText={setName}
          />
          <TextInput
            style={styles.input}
            placeholder="E-mail"
            placeholderTextColor="#888"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            placeholderTextColor="#888"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Confirme a sua Senha"
            placeholderTextColor="#888"
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            secureTextEntry
          />

          <TouchableOpacity style={styles.button} onPress={signUp}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c214a",
  },
  scrollContent: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  topSection: {
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  formSection: {
    justifyContent: "center",
    alignItems: "center",
    width: '100%',
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#DDD7ED",
  },
  subtitle: {
    fontSize: 16,
    color: "#DDD7ED",
    marginTop: 8,
  },
  input: {
    width: "100%",
    height: 48,
    backgroundColor: "#F0F0F0",
    borderColor: "#4a4a4a",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#6c63ff",
    width: "100%",
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  alertBox: {
    backgroundColor: "#f8d7da",
    borderLeftWidth: 5,
    borderLeftColor: "#842029",
    padding: 12,
    marginBottom: 20,
    borderRadius: 8,
    width: "100%",
  },
  alertText: {
    color: "#842029",
    fontSize: 14,
    marginBottom: 6,
  },
  dismissText: {
    color: "#842029",
    textDecorationLine: "underline",
    fontWeight: "600",
    fontSize: 13,
  },
  alertButtonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 8,
    gap: 16,
  },
});
