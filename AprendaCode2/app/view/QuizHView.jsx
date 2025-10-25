import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';
import { styles } from "../../IntroHTML";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function QuizH() {
  const router = useRouter();

  const perguntas = [
  {
    enunciado: "1. Qual elemento HTML é usado para criar um parágrafo?",
    opcoes: ["<h1>", "<p>", "<br>", "<div>"],
    correta: 1,
  },
  {
    enunciado: "2. Qual atributo HTML é usado para definir um link de destino em uma tag <a>?",
    opcoes: ["src", "href", "link", "target"],
    correta: 1,
  },
  {
    enunciado: "3. Qual dessas tags é usada para exibir uma imagem em HTML?",
    opcoes: ["<image>", "<img>", "<pic>", "<photo>"],
    correta: 1,
  },
  {
    enunciado: "4. Qual elemento HTML é usado para criar uma lista não ordenada?",
    opcoes: ["<ul>", "<ol>", "<li>", "<list>"],
    correta: 0,
  },
  {
    enunciado: "5. Qual tag HTML é usada para definir o título da página que aparece na aba do navegador?",
    opcoes: ["<header>", "<meta>", "<title>", "<head>"],
    correta: 2,
  },
  {
    enunciado: "6. Qual elemento é usado para criar um campo de entrada de texto em um formulário HTML?",
    opcoes: ["<input>", "<text>", "<textarea>", "<field>"],
    correta: 0,
  },
];

  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));
  const [mostrarFeedback, setMostrarFeedback] = useState(Array(perguntas.length).fill(false));

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>      
      <Animatable.View animation="fadeInUp" duration={500} style={[styles.card, { borderRadius: 12, padding: 16, marginBottom: 20, elevation: 2 }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>Quiz (Múltipla Escolha)</Text>

        {perguntas.map((pergunta, index) => (
          <View key={index} style={{ marginBottom: 16 }}>
            <Text style={[styles.paragrafo, { marginBottom: 6 }]}>{pergunta.enunciado}</Text>
            {pergunta.opcoes.map((opcao, i) => (
              <TouchableOpacity
                key={i}
                onPress={() => {
                  const novaResp = [...respostas];
                  const mostrar = [...mostrarFeedback];
                  novaResp[index] = i;
                  mostrar[index] = true;
                  setRespostas(novaResp);
                  setMostrarFeedback(mostrar);
                }}
                style={{ padding: 8, marginVertical: 2, backgroundColor: respostas[index] === i ? '#d0f0c0' : '#eee', borderRadius: 8 }}
              >
                <Text>{opcao}</Text>
              </TouchableOpacity>
            ))}
            {mostrarFeedback[index] && (
              respostas[index] === pergunta.correta ? (
                <Text style={{ color: 'green', marginTop: 4 }}>✅ Resposta correta!</Text>
              ) : (
                <Text style={{ color: 'red', marginTop: 4 }}>❌ Errado. A resposta correta é: {pergunta.opcoes[pergunta.correta]}</Text>
              )
            )}
          </View>
        ))}
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_html)/IntroH')}>
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
                🌟 Voltar aos Módulos de HTML →
              </Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_html)/BasicoH')}>
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
                ← Anterior: Básico do HTML
                </Text>
            </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(tabs)/topicos')}>
          <LinearGradient
            colors={["#f953c6", "#b91d73"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{ paddingVertical: 14, paddingHorizontal: 24, borderRadius: 30, alignItems: 'center', elevation: 3 }}
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