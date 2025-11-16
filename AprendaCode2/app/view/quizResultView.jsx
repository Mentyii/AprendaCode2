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
        style={[styles.button, { backgroundColor: "#f953c6" }]}
        onPress={() => router.push("../view/quizHubView")}
      >
        <Text style={styles.buttonText}>Voltar aos Quizzes</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#2c214a",
    padding: 20,
    alignItems: "center",
  },
  title: { color: "#fff", fontSize: 26, fontWeight: "bold", marginTop: 20, textAlign: "center" },
  subtitle: { color: "#b8f7c8", fontSize: 18, marginTop: 10 },
  date: { color: "#ccc", marginVertical: 10 },
  answerCard: {
    borderWidth: 2,
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: "#5B4E82",
  },
  question: { color: "#fff", fontSize: 16, marginBottom: 6 },
  explain: { color: "#ccc", fontSize: 13, marginTop: 4 },
  button: {
    marginTop: 20,
    padding: 14,
    borderRadius: 10,
    backgroundColor: "#6C63FF",
    width: "80%",
  },
  buttonText: { color: "#fff", fontSize: 18, textAlign: "center" },
});
