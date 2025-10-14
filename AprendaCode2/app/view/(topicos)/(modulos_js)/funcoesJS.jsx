import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "../(modulos_python)/IntroPython"
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function funcoesJS() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>

      {/* Seção: Funções com function */}
      <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Funções com function
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          A palavra-chave <Text style={styles.codigoInline}>function</Text> é usada para criar uma função. Os parênteses recebem os parâmetros. O <Text style={styles.codigoInline}>return</Text> define o que será retornado.
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`function saudacao(nome) {\n  return "Olá, " + nome;\n}\n\nconsole.log(saudacao("Maria"));  // Saída: Olá, Maria`}
          </Text>
        </View>
      </Animatable.View>

      {/* Seção: Arrow Function */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Arrow Function
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Uma forma moderna e curta de escrever funções. Ideal para funções simples.
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`const saudacao = nome => \`Olá, \${nome}\`;\n\nconsole.log(saudacao("João"));  // Saída: Olá, João`}
          </Text>
        </View>
      </Animatable.View>

      {/* Seção: Funções como parâmetro */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Funções como Parâmetro
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Funções podem ser passadas como argumentos para outras funções, permitindo mais flexibilidade no código.
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`function executar(funcao) {\n  funcao();\n}\n\nexecutar(() => console.log("Executado!"));`}
          </Text>
        </View>
      </Animatable.View>

    {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/objetosJS')}>
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
              Próximo: Arrays e Objetos →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/estruturasJS')}>
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
