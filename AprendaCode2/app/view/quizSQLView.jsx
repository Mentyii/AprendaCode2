import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useRouter } from "expo-router";
import { styles } from "./introSQLView";
import * as Animatable from "react-native-animatable";
import { LinearGradient } from "expo-linear-gradient";
import questionService from "../services/questionService"; 

export default function QuizSQL() {
  const router = useRouter();

  
  const perguntas = questionService.listByQuiz("q_sql");

  const desafios = [
    {
      titulo: "1. Selecione todos os dados da tabela 'clientes'.",
      codigo: "SELECT * FROM clientes;"
    },
    {
      titulo: "2. Adicione um cliente com nome 'João' e idade 30.",
      codigo: "INSERT INTO clientes (nome, idade) VALUES ('João', 30);"
    },
    {
      titulo: "3. Atualize a idade do cliente 'João' para 31.",
      codigo: "UPDATE clientes SET idade = 31 WHERE nome = 'João';"
    },
    {
      titulo: "4. Delete todos os registros da tabela 'produtos'.",
      codigo: "DELETE FROM produtos;"
    },
    {
      titulo: "5. Crie uma tabela 'vendas' com colunas id, produto e valor.",
      codigo: "CREATE TABLE vendas (\n  id INT,\n  produto VARCHAR(100),\n  valor DECIMAL(10,2)\n);"
    },
  ];

  const [respostas, setRespostas] = useState(Array(perguntas.length).fill(null));
  const [mostrarFeedback, setMostrarFeedback] = useState(Array(perguntas.length).fill(false));
  const [mostrarCodigos, setMostrarCodigos] = useState(Array(desafios.length).fill(false));

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>      
      {/* --- QUIZ --- */}
      <Animatable.View 
        animation="fadeInUp" 
        duration={500} 
        style={[styles.card, { borderRadius: 12, padding: 16, marginBottom: 20, elevation: 2 }]}
      >
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Quiz (Múltipla Escolha)
        </Text>

        {perguntas.map((pergunta, index) => (
          <View key={index} style={{ marginBottom: 16 }}>
            <Text style={[styles.paragrafo, { marginBottom: 6 }]}>
              {pergunta.enunciado}
            </Text>

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
                style={{
                  padding: 8,
                  marginVertical: 2,
                  backgroundColor: respostas[index] === i ? '#d0f0c0' : '#eee',
                  borderRadius: 8
                }}
              >
                <Text>{opcao}</Text>
              </TouchableOpacity>
            ))}

            {mostrarFeedback[index] && (
              respostas[index] === pergunta.corretaIndex ? (
                <Text style={{ color: 'green', marginTop: 4 }}>✅ Resposta correta!</Text>
              ) : (
                <Text style={{ color: 'red', marginTop: 4 }}>
                  ❌ Errado. A resposta correta é: {pergunta.opcoes[pergunta.corretaIndex]}
                </Text>
              )
            )}
          </View>
        ))}
      </Animatable.View>

      {/* --- DESAFIOS DE CÓDIGO --- */}
      <Animatable.View 
        animation="fadeInUp" 
        duration={500} 
        delay={200} 
        style={[styles.card, { borderRadius: 12, padding: 16, marginBottom: 20, elevation: 2 }]}
      >
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          ⚙️ Desafios de Código
        </Text>

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
              <Text style={{ color: '#333' }}>
                {mostrarCodigos[i] ? '🔽 Ocultar Resposta' : '▶️ Mostrar Resposta'}
              </Text>
            </TouchableOpacity>

            {mostrarCodigos[i] && (
              <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginTop: 8 }}>
                <Text style={{ color: "#eee", fontFamily: "monospace" }}>
                  {desafio.codigo}
                </Text>
              </View>
            )}
          </View>
        ))}
      </Animatable.View>

      {/* --- BOTÕES DE NAVEGAÇÃO --- */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>

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
