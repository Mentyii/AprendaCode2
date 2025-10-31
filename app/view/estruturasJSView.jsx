import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
<<<<<<< HEAD:app/view/estruturasJSView.jsx
import { styles } from "./introPythonView";
=======
import { styles } from "../view/introPythonView";
>>>>>>> origin/main:AprendaCode2/app/view/estruturasJSView.jsx
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function estruturasJS() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>

      {/* Condicionais */}
      <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Condicionais (if / elif / else)
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Usadas para tomar decisões com base em condições.
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`idade = 20\nif idade >= 18:\n    print("Maior de idade")\nelse:\n    print("Menor de idade")`}
          </Text>
        </View>

        <Text style={[styles.subtitulo, { marginBottom: 4 }]}>Como funciona:</Text>
        <Text style={styles.paragrafo}>• <Text style={{ fontWeight: 'bold' }}>if</Text>: verifica se uma condição é verdadeira.</Text>
        <Text style={styles.paragrafo}>• <Text style={{ fontWeight: 'bold' }}>elif</Text>: testa outra condição se a anterior for falsa.</Text>
        <Text style={styles.paragrafo}>• <Text style={{ fontWeight: 'bold' }}>else</Text>: executa se todas as anteriores forem falsas.</Text>
      </Animatable.View>

      {/* Switch (em JS) - apenas como explicação */}
      <Animatable.View animation="fadeInUp" delay={100} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Switch (somente em JavaScript)
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Em JavaScript, o switch é usado para múltiplas condições com base em uma variável.
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`switch(dia) {\n  case "segunda":\n    console.log("Início da semana");\n    break;\n  case "sexta":\n    console.log("Quase fim de semana");\n    break;\n  default:\n    console.log("Outro dia");\n}`}
          </Text>
        </View>

        <Text style={styles.paragrafo}>• Cada <Text style={{ fontWeight: 'bold' }}>case</Text> representa um valor possível.</Text>
        <Text style={styles.paragrafo}>• O <Text style={{ fontWeight: 'bold' }}>break</Text> impede que os próximos casos sejam executados.</Text>
        <Text style={styles.paragrafo}>• O <Text style={{ fontWeight: 'bold' }}>default</Text> é executado se nenhum case for compatível.</Text>
      </Animatable.View>

      {/* Laços - for e while */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Laços de Repetição (for / while)
        </Text>

        {/* For */}
        <Text style={[styles.subtitulo, { marginBottom: 6 }]}>For (com contador):</Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`for i in range(5):\n    print(i)  # 0 a 4`}
          </Text>
        </View>
        <Text style={styles.paragrafo}>• Útil quando se sabe quantas vezes repetir.</Text>

        {/* While */}
        <Text style={[styles.subtitulo, { marginTop: 10, marginBottom: 6 }]}>While (enquanto verdadeiro):</Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`i = 0\nwhile i < 5:\n    print(i)\n    i += 1`}
          </Text>
        </View>
        <Text style={styles.paragrafo}>• Continua enquanto a condição for verdadeira.</Text>
        <Text style={styles.paragrafo}>• É necessário atualizar o valor dentro do laço, senão ele vira infinito.</Text>
      </Animatable.View>

    {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/view/funcoesJSView')}>
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
              Próximo: Funções →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/view/variaveisJSView')}>
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
              ← Anterior: Variáveis e Tipos
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

