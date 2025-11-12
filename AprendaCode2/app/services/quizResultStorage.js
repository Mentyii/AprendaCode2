import AsyncStorage from '@react-native-async-storage/async-storage';

const STORAGE_KEY = 'QUIZ_RESULTS';

// ✅ Salva o resultado de um quiz
export async function saveQuizResult(result) {
  try {
    const existing = await AsyncStorage.getItem(STORAGE_KEY);
    const parsed = existing ? JSON.parse(existing) : [];

    const newResult = {
      ...result,
      quizName: result.quiz?.toUpperCase(), // mostra nome do quiz no histórico
      date: new Date().toISOString(),
    };

    parsed.push(newResult);
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(parsed));
    console.log('✅ Resultado salvo:', newResult);
  } catch (error) {
    console.error('❌ Erro ao salvar resultado:', error);
  }
}

// ✅ Retorna todos os resultados salvos
export async function getAllResults() {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('❌ Erro ao buscar resultados:', error);
    return [];
  }
}

// 🧹 Limpa todos os resultados (usado no botão “Limpar Histórico”)
export async function clearResults() {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
    console.log('🧽 Histórico de quizzes limpo com sucesso!');
  } catch (error) {
    console.error('❌ Erro ao limpar resultados:', error);
  }
}