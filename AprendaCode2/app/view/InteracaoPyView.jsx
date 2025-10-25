import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introPython";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function InteracaoPy() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>
      
      {/* Entrada de Dados */}
      <Animatable.View animation="fadeInUp" duration={500} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Entrada de Dados
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Capturando informações do usuário com <Text style={styles.codigoInline}>input()</Text>:
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`nome = input("Digite seu nome: ")\nprint(f"Bem-vindo, {nome}")`}
          </Text>
        </View>

        <Text style={[styles.subtitulo, { marginBottom: 8 }]}>Tipos de Entrada:</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>int(input(...))</Text> para números inteiros</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>float(input(...))</Text> para decimais</Text>
      </Animatable.View>

      {/* Formatação de Saída */}
      <Animatable.View animation="fadeInUp" duration={600} delay={200} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Formatação de Saída
        </Text>

        <Text style={[styles.subtitulo, { marginBottom: 6 }]}>f-strings (Python 3.6+):</Text>
        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`idade = 25\nprint(f"Você tem {idade} anos")  # Saída: Você tem 25 anos`}
          </Text>
        </View>

        <Text style={[styles.subtitulo, { marginBottom: 6 }]}>Método format():</Text>
        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`print("Você tem {} anos".format(idade))\nprint("Nome: {0}, Idade: {1}".format(nome, idade))`}
          </Text>
        </View>

        <Text style={[styles.subtitulo, { marginBottom: 6 }]}>Estilos Numéricos:</Text>
        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`preco = 49.99\nprint(f"R$ {preco:.2f}")  # R$ 49.99`}
          </Text>
        </View>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/ProjetosPy')}>
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
              Próximo: Projetos Práticos →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/ListasPy')}>
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
              ← Anterior: Listas e Dicionários 
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
