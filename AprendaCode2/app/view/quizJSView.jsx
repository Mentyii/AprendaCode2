import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from 'expo-router';
import { styles } from "./introPythonView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function quizJS() {
  const router = useRouter();

  const perguntas = [
    {
      enunciado: "1. Qual é a saída de typeof 42?",
      opcoes: ["\"int\"", "\"number\"", "\"float\"", "\"string\""],
      correta: 1,
    },
    {
      enunciado: "2. Qual comando mostra um alerta na tela?",
      opcoes: ["console.log()", "prompt()", "alert()", "write()"],
      correta: 2,
    },
    {
      enunciado: "3. Qual é a forma correta de declarar uma constante?",
      opcoes: ["const nome = \"Ana\";", "var nome = \"Ana\";", "let nome = \"Ana\";", "nome := \"Ana\";"],
      correta: 0,
    },
  ];

  const desafios = [
    {
      titulo: "1. Crie uma função que retorne o quadrado de um número.",
      codigo: "function quadrado(num) {\n  return num * num;\n}"
    },
    {
      titulo: "2. Peça ao usuário para digitar um nome e mostre uma mensagem personalizada.",
      codigo: "let nome = prompt(\"Digite seu nome:\");\nalert(\"Bem-vindo(a), \" + nome);"
    },
    {
      titulo: "3. Adicione um parágrafo HTML via JavaScript ao clicar em um botão.",
      codigo: "function adicionarTexto() {\n  let p = document.createElement(\"p\");\n  p.innerText = \"Novo parágrafo adicionado!\";\n  document.body.appendChild(p);\n}"
    },
    {
      titulo: "4. Crie um array com três cores e exiba a segunda cor.",
      codigo: "let cores = [\"vermelho\", \"azul\", \"verde\"];\nconsole.log(cores[1]); // azul"
    },
    {
      titulo: "5. Crie um objeto que represente um carro com modelo, cor e ano.",
      codigo: "let carro = {\n  modelo: \"Gol\",\n  cor: \"preto\",\n  ano: 2022\n};"
    },
    {
      titulo: "6. Verifique se um número é par ou ímpar.",
      codigo: "function verificar(numero) {\n  if (numero % 2 === 0) {\n    return \"Par\";\n  } else {\n    return \"Ímpar\";\n  }\n}"
    },
    {
      titulo: "7. Crie uma função que receba dois números e retorne a soma.",
      codigo: "function soma(a, b) {\n  return a + b;\n}"
    },
    {
      titulo: "8. Crie um laço que conte de 1 a 10 e imprima os números.",
      codigo: "for (let i = 1; i <= 10; i++) {\n  console.log(i);\n}"
    },
    {
      titulo: "9. Crie uma função que diga se a idade passada é maior de idade.",
      codigo: "function maiorDeIdade(idade) {\n  return idade >= 18;\n}"
    },
    {
      titulo: "10. Crie um botão que mude o fundo da página para azul.",
      codigo: "function mudarFundo() {\n  document.body.style.backgroundColor = \"blue\";\n}"
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
        <TouchableOpacity onPress={() => router.push('/view/introJavaView')}>
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
                🌟 Voltar aos Módulos de JavaScript →
              </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/view/sitesJSView')}>
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
              ← Anterior: Sites para Prática
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/view/topicosView')}>
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
