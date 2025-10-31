import { Text, View, ScrollView, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./introSQLView"; // Importa estilos existentes

export default function EstruturaSQL() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* CARD 1 - Condicionais */}
      <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
        <Text style={styles.titulo}>Condicionais com CASE</Text>
        <Text style={styles.paragrafo}>
          SQL não possui estruturas como `if`, mas usa o `CASE` para lógica condicional dentro das consultas.
        </Text>
        <Text style={styles.subtitulo}>Exemplo:</Text>
        <View style={styles.codigo}>
          <Text style={styles.paragrafo}>
            {`SELECT nome,\n       CASE\n         WHEN idade >= 18 THEN 'Adulto'\n         ELSE 'Menor'\n       END AS categoria\nFROM usuarios;`}
          </Text>
        </View>
      </Animatable.View>

      {/* CARD 2 - Repetições */}
      <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
        <Text style={styles.titulo}>Estruturas de Repetição</Text>
        <Text style={styles.paragrafo}>
          O SQL padrão não possui laços como `for` ou `while`, mas você pode criar loops dentro de procedures ou scripts armazenados, dependendo do banco de dados.
        </Text>
        <Text style={styles.subtitulo}>Exemplo de loop em PL/pgSQL (PostgreSQL):</Text>
        <View style={styles.codigo}>
          <Text style={styles.paragrafo}>
            {`DO $$\nDECLARE\n  i INT := 1;\nBEGIN\n  WHILE i <= 5 LOOP\n    RAISE NOTICE 'Número: %', i;\n    i := i + 1;\n  END LOOP;\nEND$$;`}
          </Text>
        </View>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
          <TouchableOpacity onPress={() => router.push('/view/funcoesSQLView')}>
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

          <TouchableOpacity onPress={() => router.push('/view/variaveisSQLView')}>
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

