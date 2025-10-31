import { Text, View, ScrollView, TouchableOpacity, Linking } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introPythonView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function sitesJS() {
  const router = useRouter();

  const abrirLink = (url) => {
    Linking.openURL(url);
  };

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>

      <Animatable.View animation="fadeInUp" duration={500} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Sites para Praticar JavaScript
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Aprender JavaScript exige prática. Aqui estão alguns sites que oferecem editores online, desafios e tutoriais gratuitos:
        </Text>

        <Text style={styles.itemLista} onPress={() => abrirLink("https://www.w3schools.com")}>
          • <Text style={styles.codigoInline}>W3Schools</Text> – Tutoriais e playground online.
        </Text>

        <Text style={styles.itemLista} onPress={() => abrirLink("https://www.freecodecamp.org")}>
          • <Text style={styles.codigoInline}>FreeCodeCamp</Text> – Curso completo com certificação gratuita.
        </Text>

        <Text style={styles.itemLista} onPress={() => abrirLink("https://codepen.io")}>
          • <Text style={styles.codigoInline}>CodePen</Text> – Editor colaborativo para HTML, CSS e JS.
        </Text>

        <Text style={styles.itemLista} onPress={() => abrirLink("https://jsfiddle.net")}>
          • <Text style={styles.codigoInline}>JSFiddle</Text> – Teste e compartilhe pequenos projetos.
        </Text>

        <Text style={styles.itemLista} onPress={() => abrirLink("https://replit.com")}>
          • <Text style={styles.codigoInline}>Replit</Text> – Editor online com execução de código em tempo real.
        </Text>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/view/quizJSView')}>
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
              ← Anterior: Projeto Prático
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

