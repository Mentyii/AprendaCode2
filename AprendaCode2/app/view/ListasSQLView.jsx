import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./introSQLView";

export default function ListasSQL() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={styles.container}>
      
      {/* CARD 1 - Tabelas e Estrutura Relacional */}
      <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
        <Text style={styles.titulo}>Tabelas e Relacionamentos</Text>
        <Text style={styles.paragrafo}>
          Em bancos de dados relacionais, os dados são organizados em tabelas. Cada tabela possui colunas (campos) e linhas (registros).
        </Text>
        <Text style={styles.subtitulo}>Exemplo:</Text>
        <Text style={styles.paragrafo}>
          Uma tabela `clientes` pode ter: `id`, `nome`, `email`, `cidade_id`.
        </Text>
      </Animatable.View>

      {/* CARD 2 - Chaves Primárias e Estrangeiras */}
      <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
        <Text style={styles.titulo}>Chaves Primárias e Estrangeiras</Text>
        <Text style={styles.paragrafo}>
          • A chave primária identifica exclusivamente cada linha em uma tabela (ex: `id`).
        </Text>
        <Text style={styles.paragrafo}>
          • A chave estrangeira (`foreign key`) faz referência a uma chave primária em outra tabela.
        </Text>
        <Text style={styles.subtitulo}>Exemplo de relacionamento:</Text>
        <Text style={styles.paragrafo}>
          A tabela `clientes` pode ter uma chave estrangeira `cidade_id` que se refere à tabela `cidades`.
        </Text>
      </Animatable.View>

      {/* CARD 3 - JOINs */}
      <Animatable.View animation="fadeInUp" delay={500} style={styles.card}>
        <Text style={styles.titulo}>Comandos JOIN</Text>
        <Text style={styles.paragrafo}>
          JOINs permitem combinar dados de múltiplas tabelas com base em relações entre elas.
        </Text>
        <View style={styles.lista}>
          <Text style={styles.itemLista}>• INNER JOIN – retorna apenas dados que se relacionam nas duas tabelas</Text>
          <Text style={styles.itemLista}>• LEFT JOIN – retorna todos da esquerda, mesmo sem correspondência à direita</Text>
        </View>
        <Text style={styles.subtitulo}>Exemplo:</Text>
        <View style={styles.codigo}>
          <Text style={styles.paragrafo}>
            {`SELECT clientes.nome, cidades.nome\nFROM clientes\nINNER JOIN cidades ON clientes.cidade_id = cidades.id;`}
          </Text>
        </View>
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
          <TouchableOpacity onPress={() => router.push('/view/interacaoSQLView')}>
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
