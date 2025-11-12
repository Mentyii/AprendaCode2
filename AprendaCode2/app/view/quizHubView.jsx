import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter } from 'expo-router';

export default function QuizHubView() {
  const router = useRouter();

  const quizzes = [
    { id: 'python', title: 'Quiz de Python' },
    { id: 'javascript', title: 'Quiz de JavaScript' },
    { id: 'sql', title: 'Quiz de SQL' },
    { id: 'html', title: 'Quiz de HTML' },
    { id: 'css', title: 'Quiz de CSS' },
  ];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Escolha um Quiz</Text>

      {quizzes.map(q => (
        <TouchableOpacity
          key={q.id}
          style={styles.button}
          onPress={() => router.push(`/view/quizBaseView?quiz=${q.id}`)}
        >
          <Text style={styles.buttonText}>{q.title}</Text>
        </TouchableOpacity>
      ))}

      {/* 🕓 Botão de histórico de quizzes */}
      <TouchableOpacity
        style={[styles.button, styles.historyButton]}
        onPress={() => router.push('/view/quizHistoryView')}
      >
        <Text style={styles.historyText}>📜 Ver Histórico</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#2c214a',
    padding: 24,
    alignItems: 'center',
  },
  title: {
    fontSize: 26,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 24,
  },
  button: {
    width: '90%',
    backgroundColor: '#5946a0',
    padding: 16,
    borderRadius: 12,
    marginVertical: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
    fontWeight: '600',
  },
  // Estilo especial para o botão de histórico
  historyButton: {
    backgroundColor: '#3b2f63',
    marginTop: 20,
  },
  historyText: {
    color: '#f9d64c',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
