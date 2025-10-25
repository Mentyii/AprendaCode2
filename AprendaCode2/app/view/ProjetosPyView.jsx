import { Text, ScrollView, TouchableOpacity, Pressable, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "../../IntroPython";
import { useState } from 'react';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function ProjetosPy() {
  const router = useRouter();
  const [showTodoImprovements, setShowTodoImprovements] = useState(false);
  const [showCalcImprovements, setShowCalcImprovements] = useState(false);

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>
      
      {/* Projeto 1: To-Do List */}
      <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          To-Do List
        </Text>
        <Text style={styles.paragrafo}>
          Sistema simples para gerenciar tarefas no terminal:
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginVertical: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`tarefas = []\n\n`}
            {`def adicionar(tarefa):\n`}
            {`    tarefas.append(tarefa)\n\n`}
            {`def listar():\n`}
            {`    for i, t in enumerate(tarefas):\n`}
            {`        print(f"{i+1}. {t}")\n\n`}
            {`adicionar("Estudar Python")\n`}
            {`listar()`}
          </Text>
        </View>

        <Pressable onPress={() => setShowTodoImprovements(!showTodoImprovements)} style={{ marginTop: 10 }}>
          <Text style={[styles.subtitulo]}>
            {showTodoImprovements ? '▼' : '▶'} Melhorias Possíveis
          </Text>
        </Pressable>

        {showTodoImprovements && (
          <Animatable.View animation="fadeInUp" duration={400} style={{ marginTop: 10 }}>
            <Text style={styles.itemLista}>
              • <Text style={{ fontWeight: 'bold' }}>Interface Gráfica:</Text> Usar Tkinter/PySimpleGUI
            </Text>
            <View style={{ backgroundColor: "#1e1e1e", padding: 8, borderRadius: 6, marginVertical: 6 }}>
              <Text style={{ color: "#eee", fontFamily: "monospace" }}>
                {`from tkinter import *\njanela = Tk()\nentry = Entry(janela)\nentry.pack()`}
              </Text>
            </View>

            <Text style={styles.itemLista}>
              • <Text style={{ fontWeight: 'bold' }}>Persistência:</Text> Salvar em arquivo
            </Text>
            <View style={{ backgroundColor: "#1e1e1e", padding: 8, borderRadius: 6, marginVertical: 6 }}>
              <Text style={{ color: "#eee", fontFamily: "monospace" }}>
                {`with open("tarefas.txt", "w") as arquivo:\n    arquivo.write("\\n".join(tarefas))`}
              </Text>
            </View>

            <Text style={styles.itemLista}>
              • <Text style={{ fontWeight: 'bold' }}>Funcionalidades:</Text> Remover tarefas, marcar como concluída
            </Text>
          </Animatable.View>
        )}
      </Animatable.View>

      {/* Projeto 2: Calculadora */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Calculadora Simples
        </Text>
        <Text style={styles.paragrafo}>
          Operações matemáticas básicas com tratamento de erros:
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginVertical: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`def soma(a, b):\n    return a + b\n\n`}
            {`def divisao(a, b):\n    if b == 0:\n        return "Erro: divisão por zero"\n    return a / b\n\n`}
            {`print(soma(5, 3))  # 8`}
          </Text>
        </View>

        <Pressable onPress={() => setShowCalcImprovements(!showCalcImprovements)} style={{ marginTop: 10 }}>
          <Text style={[styles.subtitulo]}>
            {showCalcImprovements ? '▼' : '▶'} Melhorias Avançadas
          </Text>
        </Pressable>

        {showCalcImprovements && (
          <Animatable.View animation="fadeInUp" duration={400} style={{ marginTop: 10 }}>
            <Text style={styles.itemLista}>
              • <Text style={{ fontWeight: 'bold' }}>Histórico:</Text> Guardar últimas operações
            </Text>
            <View style={{ backgroundColor: "#1e1e1e", padding: 8, borderRadius: 6, marginVertical: 6 }}>
              <Text style={{ color: "#eee", fontFamily: "monospace" }}>
                {`historico = []\nhistorico.append(f"{a} + {b} = {soma(a, b)}")`}
              </Text>
            </View>

            <Text style={styles.itemLista}>
              • <Text style={{ fontWeight: 'bold' }}>Interface:</Text> Botões com Kivy/PyQt
            </Text>
            <View style={{ backgroundColor: "#1e1e1e", padding: 8, borderRadius: 6, marginVertical: 6 }}>
              <Text style={{ color: "#eee", fontFamily: "monospace" }}>
                {`# Exemplo com Kivy\nfrom kivy.uix.button import Button\nbtn = Button(text="Somar")`}
              </Text>
            </View>

            <Text style={styles.itemLista}>
              • <Text style={{ fontWeight: 'bold' }}>Operações:</Text> Potência, raiz quadrada
            </Text>
          </Animatable.View>
        )}
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/QuizPy')}>
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

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/InteracaoPy')}>
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
              ← Anterior: Interação com Usuário 
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(tabs)/topicos')}>
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
