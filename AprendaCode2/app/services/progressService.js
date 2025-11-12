import AsyncStorage from '@react-native-async-storage/async-storage';
import ProgressEntity from "../entities/ProgressEntity";

let PROG = [];

// 🔹 Função para gerar IDs únicos
function uid() {
  try {
    return (Date.now().toString(36) + Math.random().toString(36).slice(2));
  } catch (e) {
    return String(Date.now());
  }
}

// 🔹 Carrega dados do AsyncStorage
async function loadProgress() {
  try {
    const stored = await AsyncStorage.getItem('PROGRESS_DATA');
    if (stored) {
      const parsed = JSON.parse(stored);
      PROG = parsed.map(dto => {
        const entity = ProgressEntity.fromDto(dto);
        if (entity.ultimaVisitaEm && typeof entity.ultimaVisitaEm === "string") {
          entity.ultimaVisitaEm = new Date(entity.ultimaVisitaEm);
        }
        return entity;
      });
    } else {
      PROG = [];
    }
  } catch (e) {
    console.error("Erro ao carregar progresso:", e);
    PROG = [];
  }
}

// 🔹 Salva dados no AsyncStorage
async function saveProgress() {
  try {
    await AsyncStorage.setItem('PROGRESS_DATA', JSON.stringify(PROG));
  } catch (e) {
    console.error("Erro ao salvar progresso:", e);
  }
}

export default {
  // 🔸 Marcar como visitada
  async markVisited({ userId, lessonId }) {
    await loadProgress();

    const existing = PROG.find(
      p => p.userId === String(userId) && p.lessonId === String(lessonId)
    );

    if (existing) {
      existing.ultimaVisitaEm = new Date();
      await saveProgress();
      return existing;
    }

    const dto = {
      id: uid(),
      userId: String(userId),
      lessonId: String(lessonId),
      status: "em_andamento",
      ultimaVisitaEm: new Date(),
      tempoGastoSeg: 0
    };

    const entity = ProgressEntity.fromDto(dto);
    PROG.push(entity);
    await saveProgress();
    return entity;
  },

  // 🔸 Marcar como concluída
  async markCompleted({ userId, lessonId }) {
    await loadProgress();
    const p = await this.markVisited({ userId, lessonId });
    p.status = "concluida";
    await saveProgress();
    return p;
  },

  // 🔸 Retornar todos os progressos
  async getAll() {
    await loadProgress();
    return PROG;
  },

  // 🔸 Consultar progresso por linguagem
  async getByLanguage(languageId, userId) {
    await loadProgress();

    const lessons = PROG.filter(
      p => p.userId === String(userId) && p.lessonId.startsWith(languageId)
    );

    const total = lessons.length;
    const concluidas = lessons.filter(p => p.status === "concluida").length;
    const percentual = total > 0 ? Math.round((concluidas / total) * 100) : 0;

    return { totalLessons: total, concluidas, percentual };
  }
};
