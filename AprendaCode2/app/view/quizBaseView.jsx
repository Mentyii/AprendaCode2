import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import { useRouter, useLocalSearchParams } from 'expo-router';
import { saveQuizResult } from '../services/quizResultStorage';

export default function QuizBaseView() {
  const router = useRouter();
  const { quiz } = useLocalSearchParams();
  const [current, setCurrent] = useState(0);
  const [score, setScore] = useState(0);
  const [answers, setAnswers] = useState([]);

  // Base de quizzes simples
  const QUIZZES = {
    python: [
      { q: 'O que é uma lista em Python?', options: ['Um tipo mutável', 'Uma função', 'Um loop'], correct: 0, explain: 'Listas são tipos mutáveis que armazenam coleções ordenadas.' },
      { q: 'O que faz "len([1,2,3])"?', options: ['3', '2', 'Erro'], correct: 0, explain: 'len() retorna o tamanho da lista, no caso, 3.' },
    ],
    javascript: [
      { q: 'Qual palavra-chave declara uma variável?', options: ['int', 'let', 'define'], correct: 1, explain: 'Usamos "let" (ou var/const) em JavaScript para declarar variáveis.' },
      { q: 'typeof "Olá" retorna?', options: ['"string"', '"text"', '"word"'], correct: 0, explain: 'typeof "Olá" retorna "string".' },
    ],
    sql: [
      { q: 'Qual comando é usado para selecionar dados em SQL?', options: ['SELECT', 'SHOW', 'GET'], correct: 0, explain: 'O comando SELECT é usado para buscar dados de uma tabela.' },
      { q: 'O que o comando WHERE faz?', options: ['Filtra resultados', 'Cria tabelas', 'Ordena resultados'], correct: 0, explain: 'WHERE serve para aplicar filtros em consultas SQL.' },
    ],
    html: [
      { q: 'O que significa HTML?', options: ['HyperText Markup Language', 'HighText Machine Language', 'Hyper Transfer Markup Logic'], correct: 0, explain: 'HTML significa HyperText Markup Language.' },
      { q: 'Qual tag define um parágrafo?', options: ['<div>', '<p>', '<h1>'], correct: 1, explain: 'A tag <p> define parágrafos em HTML.' },
    ],
    css: [
      { q: 'O que significa CSS?', options: ['Cascading Style Sheets', 'Creative Style System', 'Colorful Style Syntax'], correct: 0, explain: 'CSS significa Cascading Style Sheets.' },
      { q: 'Qual propriedade muda a cor do texto?', options: ['background-color', 'font-color', 'color'], correct: 2, explain: 'A propriedade CSS "color" define a cor do texto.' },
    ],
  };

  const questions = QUIZZES[quiz] || [];

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
