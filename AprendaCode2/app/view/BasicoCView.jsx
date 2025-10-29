import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introCSSView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function BasicoC() {
  const router = useRouter();

  return (
    <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40 }]}>
      
      {/* Sintaxe Básica */}
      <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Sintaxe Básica
        </Text>
        <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
          CSS segue uma estrutura básica que inclui seletores, propriedades e valores. 
          Cada regra CSS é composta por um seletor seguido de um bloco de declarações entre chaves.
        </Text>
        <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12 }}>
          <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
            {`
            selector {
              propriedade: valor;
            }
            `}
          </Text>
        </View>
      </Animatable.View>

      {/* Tipos de Tags */}
      <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 2
      }]}>
        <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
          Tipos de Declarações mais Comuns:
        </Text>

        {[
          { label: "color:", exemplo: "Define a cor do texto"},
          { label: "font-size:", exemplo: "Define o tamanho da fonte"},
          { label: "font-family:", exemplo: "Escolhe a fonte usada no texto"},
          { label: "text-align:", exemplo: "Alinha o texto na tela"},
          { label: "margin:", exemplo: "Define o espaçamento externo ao redor de um elemento"},
          { label: "padding:", exemplo: "Defne o espaçamento interno dentro de um elemento"},
          { label: "border:", exemplo: "Adiciona uma borda ao redor de um elemento"},
          { label: "width:", exemplo: "Define a largura de um elemento"},
          { label: "height:", exemplo: "Define a altura de um elemento"},
          { label: "background-color:", exemplo: "Define a cor de fundo de um elemento"},
          { label: "background-image:", exemplo: "Define uma imagem de fundo para um elemento"},
          { label: "display:", exemplo: "Controla como um elemento é exibido. Ex:(block, inline, flex, etc.)"},
          { label: "position:", exemplo: "Define o posicionamento de um elemento na página. Ex:(static, relative, absolute, fixed, sticky)"},
        ].map((item, index) => (
          <Text key={index} style={[styles.itemLista, { marginBottom: 6 }]}>
            <Text style={{ fontWeight: 'bold' }}>• {item.label}: </Text>
            <Text style={{ fontFamily: "monospace" }}>{item.exemplo}</Text>
          </Text>
        ))}
      </Animatable.View>

      {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
          <TouchableOpacity onPress={() => router.push('/view/quizCView')}>
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
                  Próximo: Qiz →
                  </Text>
              </LinearGradient>
          </TouchableOpacity>

          <TouchableOpacity onPress={() => router.push('/view/introCSSView')}>
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
                  ← Anterior: Introdução Técnica
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