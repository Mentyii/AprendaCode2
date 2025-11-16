import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { saveQuizResult } from '../services/quizResultService';
import { getQuizById } from "../services/questionService";

export default function QuizBaseView() {
  const router = useRouter();
  const { quiz } = useLocalSearchParams();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  const questions = getQuizById(quiz);

  async function handleAnswer(index) {
    const correct = index === questions[current].correct;
    const newAnswers = [...answers, { q: questions[current], chosen: index }];
    setAnswers(newAnswers);

    if (correct) setScore(score + 1);

    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // ✅ salva resultado com nome do quiz e data
      const result = {
        quiz,
        quizName: quiz.toUpperCase(),
        score: correct ? score + 1 : score,
        total: questions.length,
        answers: newAnswers,
      };

      await saveQuizResult(result);

      // ✅ vai para tela de resultado com parâmetros
      router.push({
        pathname: '/view/quizResultView',
        params: { quiz },
      });
    }
  }

  if (!questions.length)
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Quiz não encontrado 😢</Text>
      </View>
    );

  const q = questions[current];

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>{q.q}</Text>
      {q.options.map((opt, i) => (
        <TouchableOpacity key={i} style={styles.button} onPress={() => handleAnswer(i)}>
          <Text style={styles.buttonText}>{opt}</Text>
        </TouchableOpacity>
      ))}
      <Text style={styles.progress}>
        Pergunta {current + 1} / {questions.length}
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flexGrow: 1, backgroundColor: '#2c214a', padding: 24, alignItems: 'center' },
  title: { fontSize: 22, color: '#fff', fontWeight: 'bold', marginBottom: 20, textAlign: 'center' },
  button: { backgroundColor: '#5946a0', padding: 14, borderRadius: 10, width: '90%', marginVertical: 8 },
  buttonText: { color: '#fff', fontSize: 18, textAlign: 'center' },
  progress: { color: '#ccc', marginTop: 20 },
});
