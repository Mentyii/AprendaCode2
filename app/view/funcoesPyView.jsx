import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introPythonView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function FuncoesPy() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>

      {/* Seção: Funções Básicas */}
      <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Funções Básicas
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Funções são blocos de código reutilizáveis definidos com <Text style={styles.codigoInline}>def</Text>:
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`def saudacao(nome):\n    return f"Olá, {nome}"\n\nprint(saudacao("Maria"))  # Saída: "Olá, Maria"`}
          </Text>
        </View>

        <View style={{ marginTop: 4 }}>
          {[
            { label: "def", desc: "Define uma função" },
            { label: "return", desc: "Retorna um valor" },
            { label: "Parâmetros", desc: "Variáveis entre parênteses" }
          ].map((item, index) => (
            <Text key={index} style={[styles.itemLista, { marginBottom: 6 }]}>
              • <Text style={{ fontWeight: 'bold' }}>{item.label}</Text>: {item.desc}
            </Text>
          ))}
        </View>
      </Animatable.View>

      {/* Seção: Funções Lambda */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Funções Lambda
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Funções anônimas para operações simples em uma linha:
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`dobro = lambda x: x * 2\nprint(dobro(5))  # Saída: 10`}
          </Text>
        </View>

        <Text style={[styles.subtitulo, { marginBottom: 8 }]}>Uso comum:</Text>
        <Text style={styles.itemLista}>
          • Operações rápidas com <Text style={styles.codigoInline}>map()</Text> ou <Text style={styles.codigoInline}>filter()</Text>
        </Text>
        <Text style={styles.itemLista}>
          • Funções como parâmetro
        </Text>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/view/listasPyView')}>
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
              Próximo: Listas e Dicionários →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/view/estruturasPyView')}>
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
              ← Anterior: Estruturas de Controle
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

