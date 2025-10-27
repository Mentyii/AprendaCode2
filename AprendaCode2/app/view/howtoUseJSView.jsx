import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "../view/introPythonView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function howtoUseJS() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>

      {/* Onde o JS é usado */}
      <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Onde o JavaScript é usado?
        </Text>

        {[
          "💻 Front-End: manipula elementos HTML, estilos, eventos.",
          "🧰 Back-End: cria servidores, APIs e lógica de negócio com Node.js.",
          "📱 Apps Mobile: React Native, Ionic.",
          "📂 Desktop Apps: Electron (ex: Visual Studio Code).",
          "🌐 Páginas e sistemas interativos: jogos, chats, painéis em tempo real."
        ].map((item, index) => (
          <Text key={index} style={[styles.itemLista, { marginBottom: 6 }]}>
            {item}
          </Text>
        ))}
      </Animatable.View>

      {/* Como usar o JS */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Como usar JavaScript
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          <Text style={{ fontWeight: 'bold' }}>1. Diretamente em um arquivo HTML:</Text>
        </Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 10 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`<script>\n  console.log("Olá, mundo!");\n</script>`}
          </Text>
        </View>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          O <Text style={{ fontFamily: "monospace" }}>console.log()</Text> exibe mensagens no console do navegador, útil para testes.
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          <Text style={{ fontWeight: 'bold' }}>2. Em um arquivo externo:</Text>
        </Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 10 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`<script src="meuScript.js"></script>`}
          </Text>
        </View>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Carrega um arquivo JavaScript separado, deixando o HTML mais limpo e organizado.
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          <Text style={{ fontWeight: 'bold' }}>3. No terminal (Node.js):</Text>
        </Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            node app.js
          </Text>
        </View>

        <Text style={[styles.paragrafo, { marginTop: 10 }]}>
          Com o Node.js instalado, é possível rodar código JavaScript diretamente pelo terminal.
        </Text>
      </Animatable.View>

    {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/variaveisJS')}>
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

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/IntroJS')}>
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
