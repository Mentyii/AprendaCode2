import React, { useEffect, useMemo, useState } from "react";
import { View, Text, ScrollView, Pressable, ActivityIndicator, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

// services (caminho RELATIVO da view -> services)
import languageService from "../services/languageService";
import quizResultService from "../services/quizResultService";
import authService from "../services/authService";

// mapeia o slug da linguagem para a rota da view de quiz
const slugToQuizRoute = {
  javascript: "/view/quizJSView",
  sql: "/view/quizSQLView",
  // habilite outros depois:
  // python: "/view/quizPyView",
  // c: "/view/quizCView",
  // html: "/view/quizHView",
};

export default function quizHubView() {
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState([]);

  const user = useMemo(() => authService.me() || { id: "guest" }, []);

  useEffect(() => {
    // carregamos apenas JS e SQL para este teste inicial
    const langs = languageService.list().filter(l => ["javascript", "sql"].includes(l.slug));
    const enriched = langs.map(l => ({
      lang: l,
      stats: quizResultService.getStatsByLanguage(l.id, user.id),
    }));
    setItems(enriched);
    setLoading(false);
  }, [user.id]);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator />
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Escolha a linguagem do Quiz</Text>

      {items.map(({ lang, stats }) => {
        const route = slugToQuizRoute[lang.slug];
        const hasQuiz = Boolean(route);

        return (
          <View key={lang.id} style={styles.card}>
            <View style={{ gap: 6 }}>
              <Text style={styles.cardTitle}>{lang.nome}</Text>

              {stats?.tentativas > 0 ? (
                <Text style={styles.meta}>
                  Melhor: {stats.melhor}% • Média: {stats.media}% • Tentativas: {stats.tentativas}
                </Text>
              ) : (
                <Text style={styles.metaMuted}>Você ainda não fez este quiz</Text>
              )}
            </View>

            <Pressable
              disabled={!hasQuiz}
              onPress={() => router.push(route)}
              style={[styles.cta, !hasQuiz && styles.ctaDisabled]}
            >
              <Text style={styles.ctaText}>{hasQuiz ? `Fazer quiz de ${lang.nome}` : "Em breve"}</Text>
            </Pressable>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, gap: 16, backgroundColor: "#201638", flexGrow: 1 },
  title: { color: "white", fontSize: 22, fontWeight: "800", marginBottom: 4, textAlign: "center" },
  card: {
    backgroundColor: "#4F4570",
    borderRadius: 16,
    padding: 16,
    gap: 12,
  },
  cardTitle: { color: "white", fontSize: 18, fontWeight: "700" },
  meta: { color: "white", opacity: 0.9 },
  metaMuted: { color: "white", opacity: 0.6 },
  cta: {
    backgroundColor: "#7B6BD6",
    borderRadius: 12,
    paddingVertical: 10,
    alignItems: "center",
  },
  ctaDisabled: { opacity: 0.5 },
  ctaText: { color: "white", fontWeight: "700" },
});
