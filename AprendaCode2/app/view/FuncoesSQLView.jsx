import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./introSQLView"; // Importa os estilos padronizados

export default function FuncoesSQL() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* CARD 1 - O que são Funções */}
      <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
        <Text style={styles.titulo}>O que são Funções em SQL?</Text>
        <Text style={styles.paragrafo}>
          Funções em SQL são instruções prontas que realizam operações sobre os dados. Elas podem ser usadas para manipulação de texto, números, datas e muito mais.
        </Text>
      </Animatable.View>

      {/* CARD 2 - Funções Comuns */}
      <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
        <Text style={styles.titulo}>Funções Mais Usadas</Text>
        <Text style={styles.subtitulo}>Numéricas:</Text>
        <View style={styles.lista}>
          <Text style={styles.itemLista}>• <Text style={{ fontWeight: "bold" }}>AVG()</Text>: Média dos valores</Text>
          <Text style={styles.itemLista}>• <Text style={{ fontWeight: "bold" }}>SUM()</Text>: Soma dos valores</Text>
          <Text style={styles.itemLista}>• <Text style={{ fontWeight: "bold" }}>COUNT()</Text>: Total de registros</Text>
        </View>

        <Text style={styles.subtitulo}>Texto:</Text>
        <View style={styles.lista}>
          <Text style={styles.itemLista}>• <Text style={{ fontWeight: "bold" }}>UPPER()</Text>: Converte texto para maiúsculas</Text>
          <Text style={styles.itemLista}>• <Text style={{ fontWeight: "bold" }}>LOWER()</Text>: Converte para minúsculas</Text>
          <Text style={styles.itemLista}>• <Text style={{ fontWeight: "bold" }}>LENGTH()</Text>: Tamanho do texto</Text>
        </View>

        <Text style={styles.subtitulo}>Datas:</Text>
        <View style={styles.lista}>
          <Text style={styles.itemLista}>• <Text style={{ fontWeight: "bold" }}>NOW()</Text>: Data e hora atual</Text>
          <Text style={styles.itemLista}>• <Text style={{ fontWeight: "bold" }}>DATE()</Text>: Extrai apenas a data</Text>
        </View>
      </Animatable.View>

      {/* CARD 3 - Exemplo de Uso */}
      <Animatable.View animation="fadeInUp" delay={500} style={styles.card}>
        <Text style={styles.titulo}>Exemplo</Text>
        <View style={styles.codigo}>
          <Text style={styles.paragrafo}>
            {`SELECT UPPER(nome), AVG(salario)\nFROM funcionarios\nGROUP BY nome;`}
          </Text>
        </View>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
          <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_sql)/ListasSQL')}>
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
                  Próximo: Tabelas, Listas e Relacionamentos →
                  </Text>
              </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_sql)/EstruturaSQL')}>
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
