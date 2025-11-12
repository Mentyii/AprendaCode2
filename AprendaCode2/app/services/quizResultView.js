// app/services/quizResultService.js
import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'QUIZ_RESULTS';

export async function saveQuizResult(result) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const parsed = existing ? JSON.parse(existing) : [];
    const newResult = { ...result, date: new Date().toISOString() };
    parsed.push(newResult);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    console.log('✅ Resultado salvo com sucesso:', newResult);
  } catch (error) {
    console.error('❌ Erro ao salvar resultado do quiz:', error);
  }
}

export async function getAllResults() {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('❌ Erro ao buscar histórico de quizzes:', error);
    return [];
  }
}

export async function getLastResultByQuiz(quizName) {
  try {
    const all = await getAllResults();
    return [...all].reverse().find(r => r.quiz === quizName) || null;
  } catch (error) {
    console.error('❌ Erro ao buscar último resultado:', error);
    return null;
  }
}

export async function clearResults() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log('🧹 Histórico de quizzes limpo.');
  } catch (error) {
    console.error('❌ Erro ao limpar resultados:', error);
  }
}
