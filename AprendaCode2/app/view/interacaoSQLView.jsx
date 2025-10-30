import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./introSQLView";

export default function InteracaoSQL() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* CARD 1 - O que é Interação com Usuário em SQL */}
      <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
        <Text style={styles.titulo}>Interação com o Usuário em SQL</Text>
        <Text style={styles.paragrafo}>
          Em ambientes mais avançados (como bancos com procedures ou aplicativos), podemos receber dados diretamente do usuário e usá-los em comandos SQL.
        </Text>
      </Animatable.View>

      {/* CARD 2 - Utilizando Parâmetros */}
      <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
        <Text style={styles.titulo}>Usando Parâmetros em SQL</Text>
        <Text style={styles.paragrafo}>
          Em aplicações web ou com scripts, geralmente os valores que o usuário informa são utilizados como parâmetros em instruções SQL.
        </Text>
        <Text style={styles.subtitulo}>Exemplo com parâmetro (em pseudo-código):</Text>
        <Text style={styles.paragrafo}>
          {`SELECT * FROM produtos WHERE preco <= :valorMax;`}
        </Text>
        <Text style={styles.paragrafo}>
          Onde `:valorMax` representa o valor digitado pelo usuário.
        </Text>
      </Animatable.View>

      {/* CARD 3 - Cuidados com Injeção de SQL */}
      <Animatable.View animation="fadeInUp" delay={500} style={styles.card}>
        <Text style={styles.titulo}>Segurança: Prevenindo SQL Injection</Text>
        <Text style={styles.paragrafo}>
          É essencial proteger os comandos SQL de ataques de injeção, validando os dados do usuário e nunca concatenando strings diretamente.
        </Text>
        <View style={styles.lista}>
          <Text style={styles.itemLista}>• Sempre use prepared statements</Text>
          <Text style={styles.itemLista}>• Evite executar strings montadas com dados diretos</Text>
          <Text style={styles.itemLista}>• Utilize ORMs como Prisma, Sequelize ou Eloquent (em frameworks)</Text>
        </View>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
          <TouchableOpacity onPress={() => router.push('/view/projetosSQLView')}>
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

          <TouchableOpacity onPress={() => router.push('/view/listasSQLView')}>
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
                  ← Anterior: Tabelas, Listas e Relacionamentos
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
