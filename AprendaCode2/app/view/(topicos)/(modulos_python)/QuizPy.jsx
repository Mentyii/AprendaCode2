import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';
import { styles } from "./IntroPython";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function QuizPy() {
  const router = useRouter();

  const perguntas = [
    {
      enunciado: "1. Qual comando exibe algo no terminal em Python?",
      opcoes: ["echo()", "console.log()", "print()", "mostrar()"],
      correta: 2,
    },
    {
      enunciado: "2. Como declarar uma variável com valor 10?",
      opcoes: ["let x = 10", "int x = 10", "x := 10", "x = 10"],
      correta: 3,
    },
    {
      enunciado: "3. Qual é a forma correta de iniciar uma função?",
      opcoes: ["function minhaFuncao()", "def minhaFuncao():", "fun minhaFuncao()", "start minhaFuncao()"],
      correta: 1,
    },
  ];

  const desafios = [
    {
      titulo: "1. Crie uma função que retorne o quadrado de um número.",
      codigo: "def quadrado(num):\n    return num * num"
    },
    {
      titulo: "2. Peça ao usuário para digitar um nome e mostre uma mensagem personalizada.",
      codigo: "nome = input(\"Digite seu nome: \")\nprint(\"Bem-vindo(a),\", nome)"
    },
    {
      titulo: "3. Crie uma lista com 3 cores e exiba a segunda.",
      codigo: "cores = [\"vermelho\", \"azul\", \"verde\"]\nprint(cores[1])"
    },
    {
      titulo: "4. Crie um dicionário representando um carro com modelo, cor e ano.",
      codigo: "carro = {\"modelo\": \"Gol\", \"cor\": \"preto\", \"ano\": 2022}"
    },
    {
      titulo: "5. Verifique se um número é par ou ímpar.",
      codigo: "def verificar(numero):\n    if numero % 2 == 0:\n        return \"Par\"\n    else:\n        return \"Ímpar\""
    },
    {
      titulo: "6. Crie uma função que receba dois números e retorne a soma.",
      codigo: "def soma(a, b):\n    return a + b"
    },
    {
      titulo: "7. Crie um laço que conte de 1 a 10 e imprima os números.",
      codigo: "for i in range(1, 11):\n    print(i)"
    },
    {
      titulo: "8. Crie uma função que diga se a idade passada é maior de idade.",
      codigo: "def maior_de_idade(idade):\n    return idade >= 18"
    },
    {
      titulo: "9. Crie um botão fictício e exiba uma mensagem ao \"clicar\".",
      codigo: "def clique():\n    print(\"Botão clicado!\")\n\nclique()"
    },
    {
      titulo: "10. Crie um programa que peça dois números e exiba o maior.",
      codigo: "a = int(input(\"Digite o primeiro número: \\n\"))\nb = int(input(\"Digite o segundo número: \\n\"))\nprint(\"Maior número:\", max(a, b))"
    },
  ];

  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));
  const [mostrarFeedback, setMostrarFeedback] = useState(Array(perguntas.length).fill(false));
  const [mostrarCodigos, setMostrarCodigos] = useState(Array(desafios.length).fill(false));

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

      <Animatable.View animation="fadeInUp" duration={500} delay={200} style={[styles.card, { borderRadius: 12, padding: 16, marginBottom: 20, elevation: 2 }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>⚙️ Desafios de Código</Text>

        {desafios.map((desafio, i) => (
          <View key={i} style={{ marginBottom: 16 }}>
            <Text style={[styles.paragrafo, { marginBottom: 8 }]}>{desafio.titulo}</Text>
            <TouchableOpacity
              onPress={() => {
                const novos = [...mostrarCodigos];
                novos[i] = !novos[i];
                setMostrarCodigos(novos);
              }}
              style={{ backgroundColor: '#e0e0e0', padding: 8, borderRadius: 8 }}
            >
              <Text style={{ color: '#333' }}>{mostrarCodigos[i] ? '🔽 Ocultar Resposta' : '▶️ Mostrar Resposta'}</Text>
            </TouchableOpacity>
            {mostrarCodigos[i] && (
              <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginTop: 8 }}>
                <Text style={{ color: "#eee", fontFamily: "monospace" }}>{desafio.codigo}</Text>
              </View>
            )}
          </View>
        ))}
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/IntroPy')}>
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
                🌟 Voltar aos Módulos de Python →
              </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/ProjetosPy')}>
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
              ← Anterior: Projetos Práticos
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