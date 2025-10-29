import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introPythonView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function variaveisJS() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>

      {/* Variáveis */}
      <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Variáveis
        </Text>
        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 10 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`let nome = "João";\nconst idade = 30;\nvar ativo = true;`}
          </Text>
        </View>
        <Text style={styles.paragrafo}><Text style={{ fontWeight: "bold" }}>let:</Text> variável que pode mudar de valor.</Text>
        <Text style={styles.paragrafo}><Text style={{ fontWeight: "bold" }}>const:</Text> valor constante, não pode ser alterado.</Text>
        <Text style={styles.paragrafo}><Text style={{ fontWeight: "bold" }}>var:</Text> forma antiga, evite por questões de escopo.</Text>
      </Animatable.View>

      {/* Tipos Primitivos */}
      <Animatable.View animation="fadeInUp" delay={100} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Tipos Primitivos
        </Text>
        {[
          "Number: 42, 3.14",
          "String: \"Olá\", 'Texto'",
          "Boolean: true, false",
          "Null: ausência de valor",
          "Undefined: valor ainda não atribuído"
        ].map((item, i) => (
          <Text key={i} style={styles.paragrafo}>• {item}</Text>
        ))}
      </Animatable.View>

      {/* Operadores Aritméticos */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Operadores Aritméticos
        </Text>
        {[
          "+: adição",
          "-: subtração",
          "*: multiplicação",
          "/: divisão",
          "%: resto da divisão"
        ].map((item, i) => (
          <Text key={i} style={styles.paragrafo}>• {item}</Text>
        ))}
      </Animatable.View>

      {/* Operadores Comparativos */}
      <Animatable.View animation="fadeInUp" delay={300} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Operadores Comparativos
        </Text>
        {[
          "==: compara valores (pode converter tipos)",
          "===: compara valores e tipos (mais seguro)",
          "!=: diferente",
          "!==: diferente em valor ou tipo",
          ">: maior que",
          "<: menor que",
          ">=: maior ou igual",
          "<=: menor ou igual"
        ].map((item, i) => (
          <Text key={i} style={styles.paragrafo}>• {item}</Text>
        ))}
      </Animatable.View>

      {/* Operadores Lógicos */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Operadores Lógicos
        </Text>
        {[
          "&&: E lógico (true se ambas forem verdadeiras)",
          "||: OU lógico (true se pelo menos uma for verdadeira)",
          "!: NOT (inverte o valor)"
        ].map((item, i) => (
          <Text key={i} style={styles.paragrafo}>• {item}</Text>
        ))}
      </Animatable.View>

      {/* Lógica de Programação Básica */}
      <Animatable.View animation="fadeInUp" delay={500} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Lógica de Programação Básica
        </Text>
        {[
          "Entrada: dados que entram no programa (ex: nome do usuário)",
          "Processamento: ações feitas com esses dados (ex: cálculos)",
          "Saída: resultados mostrados ao usuário (ex: alertas ou mensagens)"
        ].map((item, i) => (
          <Text key={i} style={styles.paragrafo}>• {item}</Text>
        ))}
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/view/estruturasJSView')}>
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
              Próximo: Estruturas de Controle →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/view/howtoUseJSView')}>
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
              ← Anterior: Onde e como Usar
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
