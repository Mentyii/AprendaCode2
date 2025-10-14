import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "../(modulos_python)/IntroPython";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function praticaJS() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>

      {/* Projeto ToDo List - HTML */}
      <Animatable.View animation="fadeInUp" duration={500} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Projeto Prático – ToDo List
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Um projeto simples em HTML e JavaScript para treinar manipulação do DOM e eventos.
        </Text>

        <Text style={[styles.subtitulo, { marginBottom: 6 }]}>HTML:</Text>
        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`<input id="tarefa" type="text"> \n`}
            {`<button onclick="adicionar()">Adicionar</button>\n`}
            {`<ul id="lista"></ul>`}
          </Text>
        </View>

        <Text style={styles.itemLista}>
          • <Text style={styles.codigoInline}>input</Text>: Campo de texto para digitar a tarefa.
        </Text>
        <Text style={styles.itemLista}>
          • <Text style={styles.codigoInline}>button</Text>: Executa a função <Text style={styles.codigoInline}>adicionar()</Text>.
        </Text>
        <Text style={styles.itemLista}>
          • <Text style={styles.codigoInline}>ul</Text>: Lista que exibirá as tarefas adicionadas.
        </Text>
      </Animatable.View>

      {/* Projeto ToDo List - JavaScript */}
      <Animatable.View animation="fadeInUp" duration={600} delay={200} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.subtitulo, { fontSize: 20, marginBottom: 10 }]}>JavaScript:</Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`function adicionar() {\n`}
            {`  const texto = document.getElementById("tarefa").value;\n`}
            {`  const item = document.createElement("li");\n`}
            {`  item.innerText = texto;\n`}
            {`  document.getElementById("lista").appendChild(item);\n`}
            {`}`}
          </Text>
        </View>

        <Text style={styles.itemLista}>
          • Captura o valor digitado no campo.
        </Text>
        <Text style={styles.itemLista}>
          • Cria um novo elemento <Text style={styles.codigoInline}>li</Text>.
        </Text>
        <Text style={styles.itemLista}>
          • Adiciona o novo item à lista usando <Text style={styles.codigoInline}>appendChild()</Text>.
        </Text>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/sitesJS')}>
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
              Próximo: Sites para Prática →
            </Text>
          </LinearGradient>
        </TouchableOpacity>
        
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/domJS')}>
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
              ← Anterior: DOM - Document Object Model
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
