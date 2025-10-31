import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introPythonView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function ListasPy() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>
      
      {/* Listas */}
      <Animatable.View animation="fadeInUp" duration={500} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Listas em Python
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Coleções ordenadas e mutáveis de itens:
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`frutas = ["maçã", "banana", "laranja"]\n`}
            {`print(frutas[1])  # banana (índice começa em 0)\n`}
            {`frutas.append("uva")  # Adiciona ao final\n`}
            {`print(frutas)  # ["maçã", "banana", "laranja", "uva"]`}
          </Text>
        </View>

        <Text style={[styles.subtitulo, { marginBottom: 8 }]}>Operações Comuns:</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>len(frutas)</Text>: Retorna 4</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>frutas[1:3]</Text>: Fatia ['banana', 'laranja']</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>frutas.remove("banana")</Text></Text>
      </Animatable.View>

      {/* Dicionários */}
      <Animatable.View animation="fadeInUp" duration={600} delay={200} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Dicionários
        </Text>

        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          Coleções de pares chave-valor não ordenadas (Python 3.7+ mantém ordem):
        </Text>

        <View style={{ backgroundColor: "#1e1e1e", padding: 12, borderRadius: 8, marginBottom: 12 }}>
          <Text style={{ color: "#eee", fontFamily: "monospace" }}>
            {`pessoa = {\n`}
            {`    "nome": "Maria",\n`}
            {`    "idade": 25,\n`}
            {`    "ativo": True\n`}
            {`}\n`}
            {`print(pessoa["nome"])  # Maria\n`}
            {`pessoa["email"] = "maria@exemplo.com"  # Adiciona nova chave`}
          </Text>
        </View>

        <Text style={[styles.subtitulo, { marginBottom: 8 }]}>Métodos Úteis:</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>.keys()</Text>: Lista de chaves</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>.values()</Text>: Lista de valores</Text>
        <Text style={styles.itemLista}>• <Text style={styles.codigoInline}>.items()</Text>: Pares chave-valor</Text>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/view/interacaoPyView')}>
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
              Próximo: Interação com Usuário →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/view/funcoesPyView')}>
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

