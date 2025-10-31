import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introPythonView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function BasicoPy() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>
      
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
          Python usa indentação para definir blocos de código (não usa chaves).
        </Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`# Comentários são com '#'\nprint("Olá, Mundo!")  # Função de saída`}
          </Text>
        </View>
      </Animatable.View>

      {/* Tipos Primitivos */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Tipos Primitivos
        </Text>

        {[
          { label: "Inteiros", exemplo: "42" },
          { label: "Floats", exemplo: "3.14" },
          { label: "Strings", exemplo: `"Python"` },
          { label: "Booleanos", exemplo: "True / False" }
        ].map((item, index) => (
          <Text key={index} style={[styles.itemLista, { marginBottom: 6 }]}>
            <Text style={{ fontWeight: 'bold', color: '#FFF' }}>• {item.label}: </Text>
            <Text style={{ fontFamily: "monospace", color: "#FFF" }}>{item.exemplo}</Text>
          </Text>
        ))}
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/view/variaveisPyView')}>
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
              Próximo: Variáveis e Tipos →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/view/introPythonView')}>
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

