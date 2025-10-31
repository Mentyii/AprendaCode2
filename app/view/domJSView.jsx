import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introPythonView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function domJS() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>

      {/* DOM - Document Object Model */}
      <Animatable.View animation="fadeInUp" duration={500} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          DOM – Document Object Model
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          O DOM permite interagir com elementos HTML através do JavaScript, alterando conteúdos e reagindo a eventos.
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`document.getElementById("titulo").innerText = "Novo Título";`}
          </Text>
        </View>

        <Text style={styles.itemLista}>
          • <Text style={styles.codigoInline}>getElementById</Text>: Busca um elemento pelo seu <Text style={styles.codigoInline}>id</Text>.
        </Text>
        <Text style={styles.itemLista}>
          • <Text style={styles.codigoInline}>innerText</Text>: Altera o texto exibido no elemento.
        </Text>
      </Animatable.View>

      {/* Eventos com addEventListener */}
      <Animatable.View animation="fadeInUp" duration={600} delay={200} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Eventos com addEventListener
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Podemos escutar eventos nos elementos e executar funções quando eles ocorrem, como um clique de botão:
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`document.getElementById("btn").addEventListener("click", () => {\n`}
            {`  alert("Botão clicado!");\n`}
            {`});`}
          </Text>
        </View>

        <Text style={styles.itemLista}>
          • <Text style={styles.codigoInline}>addEventListener("click", callback)</Text>: Executa a função quando o elemento for clicado.
        </Text>
        <Text style={styles.itemLista}>
          • <Text style={styles.codigoInline}>alert()</Text>: Exibe uma mensagem ao usuário.
        </Text>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/view/praticaJSView')}>
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
              Próximo: Projeto Prático →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/view/objetosJSView')}>
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
              ← Anterior: Arrays e Objetos
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/view/topicos')}>
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

