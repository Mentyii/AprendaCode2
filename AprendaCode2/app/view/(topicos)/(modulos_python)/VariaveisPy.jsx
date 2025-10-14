import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./IntroPython";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function VariaveisPy() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>
      
      {/* Seção: Variáveis */}
      <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Variáveis em Python
        </Text>
        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`nome = "João"  # String\n`}
            {`idade = 30    # Inteiro\n`}
            {`ativo = True  # Booleano`}
          </Text>
        </View>
      </Animatable.View>

      {/* Seção: Operadores */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Operadores
        </Text>

        <Text style={[styles.subtitulo, { marginTop: 6 }]}>Aritméticos:</Text>
        <View style={{ backgroundColor: "#1e1e1e", padding: 8, borderRadius: 6, marginVertical: 6 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>{`+, -, *, /, %, **`}</Text>
        </View>

        <Text style={[styles.subtitulo, { marginTop: 10 }]}>Comparação:</Text>
        <View style={{ backgroundColor: "#1e1e1e", padding: 8, borderRadius: 6, marginVertical: 6 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>{`==, !=, >, <, >=, <=`}</Text>
        </View>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/EstruturasPy')}>
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

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/BasicoPy')}>
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
              ← Anterior: Básico do Python
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
