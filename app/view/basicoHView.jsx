import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introHTMLView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function BasicoHTML() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40,}]}>
      
      {/* Sintaxe Básica */}
      <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Sintaxe Básica
        </Text>
        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          HTML possui uma sintaxe simples baseada em tags. Cada elemento é definido por uma tag de abertura e uma de fechamento.
        </Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`# Comentários são com "<!--" e "-->"  <!-- Este é um comentário em HTML --> #`}
          </Text>
        </View>
      </Animatable.View>

      {/* Tipos de Tags */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Tipos de Tags:
        </Text>

        {[
          { label: "<!DOCTYPE html>", exemplo: "Declara o tipo de documento HTML5" },
          { label: "<html>", exemplo: "3.Raiz de todo o conteúdo HTML" },
          { label: "<head>", exemplo: "Cabeçalho com configurações e meta-informações" },
          { label: "<body>", exemplo: "Conteúdo visível da página" },
          { label: "<h1> a <h6>", exemplo: "Títulos de níveis diferentes" },
          { label: "<p>", exemplo: "Parágrafos" },
          { label: "<a>", exemplo: "Links para outras páginas ou recursos" },
          { label: "<img>", exemplo: "Imagens embutidas na página" },
          { label: "<ul> e <ol>", exemplo: "Listas não ordenadas e ordenadas" },
          { label: "<div>", exemplo: "Divisões genéricas para agrupar conteúdo" },
          { label: "<span>", exemplo: "Span para estilização de partes do texto" }
        ].map((item, index) => (
          <Text key={index} style={[styles.itemLista, { marginBottom: 6 }]}>
            <Text style={{ fontWeight: 'bold'}}>• {item.label}: </Text>
            <Text style={{ fontFamily: "monospace" }}>{item.exemplo}</Text>
          </Text>
        ))}
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
          <TouchableOpacity onPress={() => router.push('/view/quizHView')}>
              <LinearGradient
                  colors={["#43e97b", "#38f9d7"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                  paddingVertical: 14,
                  paddingHorizontal: 24,
                  borderRadius: 30,
                  alignItems: 'center',
                  elevation: 3
                  }}
              >
                  <Text style={{ color: "white", fontSize: 16, fontWeight: 'bold' }}>
                  Próximo: Quiz →
                  </Text>
              </LinearGradient>
          </TouchableOpacity>

<<<<<<< HEAD:app/view/basicoHView.jsx
          <TouchableOpacity onPress={() => router.push('/view/introHTMLView')}>
=======
          <TouchableOpacity onPress={() => router.push('/view/introHTML')}>
>>>>>>> origin/main:AprendaCode2/app/view/basicoHView.jsx
              <LinearGradient
                  colors={["#43e97b", "#38f9d7"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                  paddingVertical: 14,
                  paddingHorizontal: 24,
                  borderRadius: 30,
                  alignItems: 'center',
                  elevation: 3
                  }}
              >
                  <Text style={{ color: "white", fontSize: 16, fontWeight: 'bold' }}>
                  ← Anterior: Introdução Técnica
                  </Text>
              </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/view/topicosView')}>
              <LinearGradient
                  colors={["#f953c6", "#b91d73"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  style={{
                  paddingVertical: 14,
                  paddingHorizontal: 24,
                  borderRadius: 30,
                  alignItems: 'center',
                  elevation: 3
                  }}
              >
                  <Text style={{ color: "white", fontSize: 16, fontWeight: 'bold' }}>
                  🏠 Voltar para Home
                  </Text>
              </LinearGradient>
          </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
}
