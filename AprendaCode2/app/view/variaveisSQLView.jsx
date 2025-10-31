import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./introSQLView";

export default function VariaveisSQL() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* CARD 1 */}
      <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
        <Text style={styles.titulo}>Tipos de Dados em SQL</Text>
        <Text style={styles.paragrafo}>
          SQL não possui "variáveis" como em linguagens de programação tradicionais, mas trabalha com diferentes tipos de dados armazenados em colunas das tabelas.
        </Text>
        <Text style={styles.subtitulo}>Tipos mais comuns:</Text>
        <View style={styles.lista}>
          <Text style={styles.itemLista}>• INT – Números inteiros</Text>
          <Text style={styles.itemLista}>• VARCHAR(n) – Texto com limite de caracteres</Text>
          <Text style={styles.itemLista}>• TEXT – Texto longo</Text>
          <Text style={styles.itemLista}>• DATE – Data (YYYY-MM-DD)</Text>
          <Text style={styles.itemLista}>• BOOLEAN – Verdadeiro ou Falso</Text>
          <Text style={styles.itemLista}>• FLOAT/DOUBLE – Números decimais</Text>
        </View>
      </Animatable.View>

      {/* CARD 2 */}
      <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
        <Text style={styles.titulo}>Exemplo de Criação de Tabela</Text>
        <Text style={styles.paragrafo}>Veja como definir tipos ao criar uma tabela:</Text>
        <View style={styles.codigo}>
          <Text style={{color: "#FFF", fontFamily: "monospace" }}>
            {`CREATE TABLE usuarios (
              id INT PRIMARY KEY,
              nome VARCHAR(50),
              email VARCHAR(100),
              data_cadastro DATE,
              ativo BOOLEAN
            );`}
          </Text>
        </View>
      </Animatable.View>

      {/* CARD 3 */}
      <Animatable.View animation="fadeInUp" delay={500} style={styles.card}>
        <Text style={styles.titulo}>Conversão de Tipos</Text>
        <Text style={styles.paragrafo}>
          É possível converter tipos usando funções como `CAST()` ou `CONVERT()`:
        </Text>
        <View style={styles.codigo}>
          <Text style={{ fontFamily: "monospace", color: "#FFF" }}>
            {`SELECT CAST('2024-06-01' AS DATE);`}
          </Text>
        </View>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
          <TouchableOpacity onPress={() => router.push('/view/estruturaSQLView')}>
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

          <TouchableOpacity onPress={() => router.push('/view/basicoSQLView')}>
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
                  ← Anterior: Básico do SQL
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

