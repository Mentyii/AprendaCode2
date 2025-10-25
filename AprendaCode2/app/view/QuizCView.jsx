import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';
import { styles } from "../../IntroCSS";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function QuizC() {
  const router = useRouter();

  const perguntas = [
  {
    enunciado: "1. Qual propriedade CSS é usada para mudar a cor do texto?",
    opcoes: ["font-color", "text-color", "color", "background-color"],
    correta: 2,
  },
  {
    enunciado: "2. Qual seletor é usado para selecionar um elemento com a classe 'container'?",
    opcoes: ["#container", ".container", "container", "<container>"],
    correta: 1,
  },
  {
    enunciado: "3. Qual propriedade CSS controla o espaçamento interno de um elemento?",
    opcoes: ["margin", "padding", "border", "spacing"],
    correta: 1,
  },
  {
    enunciado: "4. O que significa a propriedade 'display: flex;' em CSS?",
    opcoes: [
      "Oculta o elemento",
      "Cria um layout flexível (Flexbox)",
      "Define o tamanho da fonte",
      "Adiciona uma margem automática",
    ],
    correta: 1,
  },
  {
    enunciado: "5. Como se aplica uma cor de fundo em CSS?",
    opcoes: [
      "background-color: blue;",
      "color-background: blue;",
      "bgcolor: blue;",
      "background: text-blue;",
    ],
    correta: 0,
  },
  {
    enunciado: "6. Qual propriedade define a largura de um elemento?",
    opcoes: ["height", "size", "width", "length"],
    correta: 2,
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

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_css)/IntroC')}>
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
                🌟 Voltar aos Módulos de CSS →
              </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_css)/BasicoC')}>
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
              ← Anterior: Básico do CSS
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