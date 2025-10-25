import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./IntroPython";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function EstruturasPy() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>

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
          Estruturas para tomada de decisão no código:
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`if idade >= 18:\n    print("Adulto")\nelif idade >= 12:\n    print("Adolescente")\nelse:\n    print("Criança")`}
          </Text>
        </View>

        {[
          { label: "if", desc: "Executa se a condição for verdadeira" },
          { label: "elif", desc: "Testa outra condição se a anterior for falsa" },
          { label: "else", desc: "Executa se todas condições forem falsas" }
        ].map((item, index) => (
          <Text key={index} style={[styles.paragrafo, { marginBottom: 6 }]}>
            • <Text style={{ fontWeight: 'bold' }}>{item.label}</Text>: {item.desc}
          </Text>
        ))}
      </Animatable.View>

      {/* Laços */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Laços (for / while)
        </Text>

        {/* For loop */}
        <Text style={[styles.subtitulo, { marginTop: 6, marginBottom: 6 }]}>For Loop:</Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12, marginBottom: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`# Repete para cada item na sequência\nfor i in range(5):\n    print(i)  # 0 1 2 3 4`}
          </Text>
        </View>

        {/* While loop */}
        <Text style={[styles.subtitulo, { marginTop: 6, marginBottom: 6 }]}>While Loop:</Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`# Executa enquanto a condição for verdadeira\nx = 0\nwhile x < 5:\n    print(x)\n    x += 1  # Incremento`}
          </Text>
        </View>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/FuncoesPy')}>
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

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/VariaveisPy')}>
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
