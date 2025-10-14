import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import auth from '@react-native-firebase/auth'
import * as Animatable from "react-native-animatable";

export default function cadastro() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [mensagemErro, setMensagemErro] = useState("");

  const router = useRouter();

  const signUp = async () => {
    if (!name || !email || !password || !passwordConfirm) {
      setMensagemErro("❗ Preencha todos os campos corretamente.");
      return;
    }

    if (password !== passwordConfirm) {
      setMensagemErro("🔐 As senhas não coincidem.");
      return;
    }

    try {
      const userCredential = await auth().createUserWithEmailAndPassword ( email, password);
      if (userCredential) router.replace("/view/login");
    } catch (error: any) {
      console.log(error);

      if (error.code === "auth/email-already-in-use") {
        setMensagemErro("⚠️ Este e-mail já está cadastrado.");
      } else if (error.code === "auth/invalid-email") {
        setMensagemErro("📧 E-mail inválido. Verifique o formato.");
      } else if (error.code === "auth/weak-password") {
        setMensagemErro("🔐 A senha deve ter pelo menos 6 caracteres.");
      } else {
        setMensagemErro("Erro ao cadastrar. Tente novamente.");
      }
    }
  };

  return (
    <View style={styles.container}>
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

              <TouchableOpacity onPress={() => router.push("/view/login")}>
                <Text style={styles.dismissText}>Voltar à tela de login</Text>
              </TouchableOpacity>
            </View>
          </Animatable.View>
        )}

        <TextInput
          style={styles.input}
          placeholder="Nome"
          value={name}
          onChangeText={setName}
        />
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
        <TextInput
          style={styles.input}
          placeholder="Confirme a sua Senha"
          value={passwordConfirm}
          onChangeText={setPasswordConfirm}
          secureTextEntry
        />

        <TouchableOpacity style={styles.button} onPress={signUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
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
  },
  formSection: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#7D6DB3",
  },
  subtitle: {
    fontSize: 16,
    color: "#7D6DB3",
    marginTop: 8,
  },
  input: {
    width: "100%",
    height: 45,
    backgroundColor: "#FFF",
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    marginBottom: 16,
    fontSize: 16,
  },
  button: {
    backgroundColor: "#6c63ff",
    width: "100%",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
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
    marginBottom: 16,
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