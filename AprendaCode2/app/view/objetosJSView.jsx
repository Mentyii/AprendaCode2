import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "../../IntroPython";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function objetosJS() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>

      {/* Arrays em JavaScript */}
      <Animatable.View animation="fadeInUp" duration={500} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Arrays em JavaScript
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Um array é uma lista ordenada de elementos. Os itens são acessados por índice, começando do 0.
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`let frutas = ["maçã", "banana", "laranja"];\n`}
            {`console.log(frutas[1]);  // banana\n`}
            {`frutas.push("uva");  // adiciona ao final\n`}
            {`console.log(frutas);  // ["maçã", "banana", "laranja", "uva"]`}
          </Text>
        </View>

        <Text style={[styles.subtitulo, { marginBottom: 8 }]}>Operações Comuns:</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>frutas.length</Text>: Retorna a quantidade de elementos</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>frutas.slice(1, 3)</Text>: Retorna ["banana", "laranja"]</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>frutas.splice(1, 1)</Text>: Remove "banana"</Text>
      </Animatable.View>

      {/* Objetos em JavaScript */}
      <Animatable.View animation="fadeInUp" duration={600} delay={200} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Objetos em JavaScript
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Objetos agrupam dados usando pares chave-valor. Também podem conter métodos, que são funções internas.
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`let pessoa = {\n`}
            {`  nome: "Maria",\n`}
            {`  idade: 25,\n`}
            {`  saudacao() {\n`}
            {`    return \`Oi, meu nome é \${this.nome}\`;\n`}
            {`  }\n`}
            {`};\n\n`}
            {`console.log(pessoa.nome);       // Maria\n`}
            {`console.log(pessoa.saudacao()); // Oi, meu nome é Maria`}
          </Text>
        </View>

        <Text style={[styles.subtitulo, { marginBottom: 8 }]}>Acessos e Métodos:</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>pessoa.nome</Text>: Acessa o valor da chave "nome"</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>pessoa["idade"]</Text>: Acessa usando string</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>pessoa.email = "maria@exemplo.com"</Text>: Adiciona nova chave</Text>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/domJS')}>
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
              Próximo: DOM - Document Object Model →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/funcoesJS')}>
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
              ← Anterior: Funções
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
