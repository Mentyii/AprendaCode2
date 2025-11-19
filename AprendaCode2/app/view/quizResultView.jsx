import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import { getAllResults } from "../services/quizResultService";

export default function QuizResultView() {
  const { quiz } = useLocalSearchParams();
  const router = useRouter();
  const [result, setResult] = useState(null);

  useEffect(() => {
    async function loadResult() {
      const all = await getAllResults();
      const last = [...all].reverse().find((r) => r.quiz === quiz);
      setResult(last || null);
    }
    loadResult();
  }, [quiz]);

  if (!result) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Nenhum resultado encontrado 😢</Text>
        <TouchableOpacity style={styles.button} onPress={() => router.push("../view/quizHubView")}>
          <Text style={styles.buttonText}>Voltar</Text>
        </TouchableOpacity>
      </View>
    );
  }

  const { score, total, date, answers } = result;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Resultado do Quiz: {quiz}</Text>
      <Text style={styles.subtitle}>
        Você acertou {score} de {total} perguntas!
      </Text>
      <Text style={styles.date}>
        Data: {new Date(date).toLocaleString()}
      </Text>

      {/* Listagem de perguntas e respostas */}
      <View style={{ marginTop: 20, width: "100%" }}>
        {answers.map((item, index) => {
          const isCorrect = item.chosen === item.q.correct;
          const correctAnswer = item.q.options[item.q.correct];
          const chosenAnswer = item.q.options[item.chosen];
          return (
            <View
              key={index}
              style={[
                styles.answerCard,
                { borderColor: isCorrect ? "#4CAF50" : "#E53935" },
              ]}
            >
              <Text style={styles.question}>
                {index + 1}. {item.q.q}
              </Text>
              <Text style={{ color: isCorrect ? "#4CAF50" : "#E53935", fontWeight: "bold" }}>
                Sua resposta: {chosenAnswer}
              </Text>
              {!isCorrect && (
                <Text style={{ color: "#b8f7c8" }}>
                  Correta: {correctAnswer}
                </Text>
              )}
              <Text style={styles.explain}>{item.q.explain}</Text>
            </View>
          );
        })}
      </View>

      <TouchableOpacity
        style={styles.backWrapper}
        onPress={() => router.push("../view/quizHubView")}
      >
        <View style={styles.backButton}>
          <Text style={styles.buttonText}>Voltar aos Quizzes</Text>
        </View>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#2c214a",
    padding: 22,
    paddingBottom: 60,
    alignItems: "center",
  },

  /* TÍTULOS */
  title: {
    color: "#fff",
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },

  subtitle: {
    color: "#b8f7c8",
    fontSize: 20,
    fontWeight: "600",
    textAlign: "center",
    marginBottom: 4,
  },

  date: {
    color: "#cfcfdd",
    fontSize: 14,
    marginBottom: 20,
    textAlign: "center",
  },

  /* CARD DE RESPOSTA */
  answerCard: {
    borderWidth: 2,
    borderRadius: 14,
    padding: 16,
    marginBottom: 18,
    backgroundColor: "#3b3361",
    width: "100%",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },

  question: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
    lineHeight: 24,
  },

  explain: {
    color: "#eaeaea",
    fontSize: 14,
    marginTop: 8,
    lineHeight: 20,
  },

  /* BOTÃO VOLTAR */
  backWrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 30,
    marginBottom: 35,
  },

  backButton: {
    backgroundColor: "#f953c6",
    paddingVertical: 14,
    paddingHorizontal: 25,
    borderRadius: 14,
    width: "85%",
    alignItems: "center",
    justifyContent: "center",
    elevation: 4,
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});
