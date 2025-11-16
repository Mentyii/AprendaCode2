// /tabs/topicos.tsx
import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import { useRouter } from 'expo-router';

// Lista centralizada das linguagens disponíveis no app
const LANGUAGES = [
  { id: "python", name: "Python" },
  { id: "javascript", name: "JavaScript" },
  { id: "sql", name: "SQL" },
  { id: "html", name: "HTML" },
  { id: "css", name: "CSS" },
];

export default function TopicosScreen() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tópicos de Programação</Text>

      <ScrollView
        contentContainerStyle={styles.buttonContainer}
        showsVerticalScrollIndicator={false}
      >

        {/* 🔥 Botões criados dinamicamente */}
        {LANGUAGES.map(lang => (
          <TouchableOpacity
            key={lang.id}
            style={styles.buttonTopic}
            onPress={() =>
              router.push(`/view/modulosView?lang=${lang.id}`)
            }
          >
            <Text style={styles.buttonText}>{lang.name}</Text>
          </TouchableOpacity>
        ))}

        {/* 🔥 Quizzes (rota separada) */}
        <TouchableOpacity
          style={styles.buttonTopic}
          onPress={() => router.push('/view/quizHubView')}
        >
          <Text style={styles.buttonText}>Quizzes</Text>
        </TouchableOpacity>

      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#2c214a",
    paddingHorizontal: 24,
    paddingTop: 60,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DDD7ED",
    textAlign: "center",
    marginBottom: 30,
  },
  buttonContainer: {
    alignItems: "center",
    paddingBottom: 30,
  },
  buttonTopic: {
    backgroundColor: "#5B4E82",
    paddingVertical: 14,
    paddingHorizontal: 32,
    borderRadius: 10,
    marginVertical: 10,
    width: "100%",
    maxWidth: 300,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 3,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
