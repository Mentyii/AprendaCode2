// /view/modulosView.jsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
  Platform,
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { languageService } from "../services/languageService";

export default function ModulosView() {
  const router = useRouter();
  const { lang } = useLocalSearchParams();

  const [progress, setProgress] = useState({});

  const language = languageService.getLanguage(lang);

  // Load saved progress
  useEffect(() => {
    const loadProgress = async () => {
      try {
        const saved = await AsyncStorage.getItem(`@progress_${lang}`);
        if (saved) setProgress(JSON.parse(saved));
      } catch (e) {
        console.log("Erro ao carregar progresso:", e);
      }
    };

    loadProgress();
  }, [lang]);

  if (!language) {
    return (
      <SafeAreaView style={styles.safe}>
        <View style={styles.container}>
          <Text style={styles.title}>Linguagem não encontrada 😢</Text>
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* Título */}
        <Text style={styles.title}>
          {language.icon} {language.name}
        </Text>

        {/* Lista de módulos */}
        {language.modules.map((mod) => (
          <TouchableOpacity
            key={mod.id}
            style={[
              styles.moduleCard,
              progress[mod.id] && styles.moduleCompleted,
            ]}
            onPress={() =>
              router.push(`/view/moduleView?lang=${lang}&module=${mod.id}`)
            }
            activeOpacity={0.85}
          >
            <Text
              style={[
                styles.moduleTitle,
                progress[mod.id] && styles.completedText,
              ]}
            >
              {mod.title}
            </Text>
          </TouchableOpacity>
        ))}

        {/* Espaço extra para evitar corte em telas pequenas / gestos */}
        <View style={{ height: Platform.OS === "ios" ? 48 : 28 }} />

        {/* Voltar - centralizado e com margem segura */}
        <View style={styles.backWrapper}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => router.push("/view/topicosView")}
            activeOpacity={0.9}
          >
            <Text style={styles.backText}>← Voltar aos Tópicos</Text>
          </TouchableOpacity>
        </View>

        {/* Fundo extra para garantir que botão nunca fique cortado */}
        <View style={{ height: 18 }} />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#2c214a",
  },
  container: {
    paddingTop: 28,
    paddingHorizontal: 24,
    paddingBottom: 40, // espaço base
    alignItems: "center",
    minHeight: "100%",
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#DDD7ED",
    marginBottom: 20,
    textAlign: "center",
  },
  moduleCard: {
    width: "100%",
    maxWidth: 320,
    backgroundColor: "#3b3b3b",
    padding: 16,
    borderRadius: 14,
    marginBottom: 12,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.12,
    shadowRadius: 4,
    elevation: 3,
  },
  moduleCompleted: {
    backgroundColor: "#e9f7ef",
  },
  moduleTitle: {
    fontSize: 18,
    fontWeight: "600",
    color: "#fff",
  },
  completedText: {
    color: "#1e4620",
  },
  backWrapper: {
    width: "100%",
    alignItems: "center",
    marginTop: 22,
  },
  backButton: {
    backgroundColor: "#5B4E82",
    paddingVertical: 12,
    paddingHorizontal: 28,
    borderRadius: 28,
    elevation: 4,
    width: "100%",
    maxWidth: 300,
    alignItems: "center",
  },
  backText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "700",
  },
});
