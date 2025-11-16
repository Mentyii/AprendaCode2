import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import { getAllResults, clearResults } from "../services/quizResultService";

export default function QuizHistoryView() {
  const [history, setHistory] = useState([]);
  const router = useRouter();

  useEffect(() => {
    async function loadHistory() {
      const results = await getAllResults();
      setHistory(results || []);
    }
    loadHistory();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Histórico de Quizzes</Text>
      <ScrollView contentContainerStyle={styles.scroll}>
        {history.length === 0 ? (
          <Text style={styles.empty}>Nenhum quiz realizado ainda.</Text>
        ) : (
          history.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={styles.item}
              onPress={() => router.push(`/view/quizResultView?quiz=${item.quiz}`)}
            >
              <Text style={styles.quizName}>{item.quizName}</Text>
              <Text style={styles.score}>
                Pontuação: {item.score} / {item.total}
              </Text>
              <Text style={styles.date}>
                Feito em: {new Date(item.date).toLocaleString()}
              </Text>
            </TouchableOpacity>
          ))
        )}

      {/* Botão para limpar histórico */}
      <TouchableOpacity
        style={[styles.button, { backgroundColor: '#f953c6' }]}
        onPress={async () => {
          await clearResults();
          setHistory([]);
        }}
      >
        <Text style={styles.buttonText}>Limpar Histórico</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.button, { backgroundColor: '#f953c6' }]}
        onPress={() => router.push('/view/quizHubView')}>
            <Text style={styles.buttonText}>
              Voltar para Quizzes
            </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#2c214a", padding: 20},
  title: { color: "#fff", fontSize: 26, fontWeight: "bold", textAlign: "center", marginVertical: 20 },
  scroll: { paddingBottom: 40,minHeight: '100%'},
  item: { backgroundColor: "#5B4E82", padding: 15, borderRadius: 10, marginBottom: 15 },
  quizName: { color: "#fff", fontSize: 20, fontWeight: "bold" },
  score: { color: "#b8f7c8", marginTop: 5 },
  date: { color: "#ccc", fontSize: 12, marginTop: 3 },
  empty: { color: "#ccc", textAlign: "center", marginTop: 40, fontSize: 16 },
  button: { marginTop: 20, padding: 12, borderRadius: 8 },
  buttonText: { color: "#fff", fontSize: 16, textAlign: "center" },
});
