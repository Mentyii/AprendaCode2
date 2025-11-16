import React from "react";
import {
  ScrollView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform
} from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import { languageService } from "../services/languageService";

export default function ModuleView() {
  const router = useRouter();
  const { lang, module } = useLocalSearchParams();

  const data = languageService.getModule(lang, module);
  const next = languageService.getNextModule(lang, module);
  const prev = languageService.getPrevModule(lang, module);

  if (!data) {
    return (
      <SafeAreaView style={styles.safe}>
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Conteúdo não encontrado 😢</Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={false}
      >
        {/* ✨ TÍTULO DO MÓDULO */}
        <Text style={styles.moduleTitle}>{data.title}</Text>

        {/* ✨ CONTEÚDO */}
        {data.content.map((block, index) => (
          <View key={index} style={styles.card}>
            {block.title && <Text style={styles.cardTitle}>{block.title}</Text>}

            {block.paragraphs?.map((p, idx) => (
              <Text key={idx} style={styles.paragraph}>
                {p}
              </Text>
            ))}

            {block.list && (
              <View style={styles.list}>
                {block.list.map((item, idx) => (
                  <Text key={idx} style={styles.listItem}>• {item}</Text>
                ))}
              </View>
            )}
          </View>
        ))}

        {/* ✨ NAVEGAÇÃO ENTRE MÓDULOS */}
        <View style={styles.navContainer}>

          {prev && (
            <TouchableOpacity
              onPress={() =>
                router.push(`/view/moduleView?lang=${lang}&module=${prev.id}`)
              }
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={["#5946a0", "#7f6fe0"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.navButton}
              >
                <Text style={styles.navText}>← {prev.title}</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}

          {next && (
            <TouchableOpacity
              onPress={() =>
                router.push(`/view/moduleView?lang=${lang}&module=${next.id}`)
              }
              activeOpacity={0.85}
            >
              <LinearGradient
                colors={["#43e97b", "#38f9d7"]}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={styles.navButton}
              >
                <Text style={styles.navText}>{next.title} →</Text>
              </LinearGradient>
            </TouchableOpacity>
          )}
        </View>

        {/* ✨ VOLTAR AOS MÓDULOS */}
        <View style={{ marginTop: 30, alignItems: "center" }}>
          <TouchableOpacity
            onPress={() => router.push(`/view/modulosView?lang=${lang}`)}
            activeOpacity={0.85}
          >
            <LinearGradient
              colors={["#f953c6", "#b91d73"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={styles.homeButton}
            >
              <Text style={styles.homeText}>🏠 Voltar aos Módulos</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>

        {/* Garantia de que nada fica cortado */}
        <View style={{ height: Platform.OS === "ios" ? 40 : 20 }} />
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
    padding: 22,
    paddingBottom: 40,
    minHeight: "100%",
  },

  moduleTitle: {
    fontSize: 28,
    fontWeight: "800",
    color: "#FFF",
    marginBottom: 24,
    textAlign: "center",
  },

  /* ✨ CARD */
  card: {
    backgroundColor: "#3b3b3b",
    padding: 18,
    borderRadius: 14,
    marginBottom: 20,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },

  cardTitle: {
    fontSize: 20,
    color: "#FFF",
    fontWeight: "700",
    marginBottom: 10,
  },

  paragraph: {
    color: "#EEE",
    fontSize: 16,
    marginBottom: 10,
    lineHeight: 24,
  },

  list: {
    marginTop: 8,
    paddingLeft: 6,
  },

  listItem: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 6,
    lineHeight: 22,
  },

  /* ✨ NAVEGAÇÃO */
  navContainer: {
    marginTop: 10,
    gap: 12,
  },

  navButton: {
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginBottom: 6,
  },

  navText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },

  /* ✨ VOLTAR */
  homeButton: {
    paddingVertical: 14,
    paddingHorizontal: 24,
    borderRadius: 30,
    alignItems: "center",
    elevation: 4,
  },

  homeText: {
    color: "#FFF",
    fontSize: 17,
    fontWeight: "700",
  },
});
