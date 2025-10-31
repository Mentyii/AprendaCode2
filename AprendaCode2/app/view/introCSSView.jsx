import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function IntroCSS() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>
          {/* CARD 1 */}
          <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
              <Text style={styles.titulo}>Antes de Começar: Usando CSS com VS Code</Text>
              <Text style={styles.paragrafo}>
                  Para escrever e executar códigos CSS com conforto e eficiência:
              </Text>
              <View style={styles.lista}>
                  <Text style={styles.itemLista}>1. Instale o VS Code: https://code.visualstudio.com/</Text>
                  <Text style={styles.itemLista}>OBS 1: CSS não necessita de compilador. Logo, basta criar </Text>
                  <Text style={styles.itemLista}>OBS 2: CSS é uma linguagem que acrescenta estilos gráficos.
                      Para iniciar seus estudos, você pode criar arquivos .css e vinculá-los a um arquivo HTML.
                  </Text>
                  <Text style={styles.itemLista}>2. Crie arquivos .css e execute com `CSS arquivo.css`</Text>
              </View>
          </Animatable.View>

          {/* CARD 2 */}
          <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
              <Text style={styles.titulo}>O que é CSS?</Text>
              <Text style={styles.paragrafo}>
                  CSS (Cascading Style Sheets) é uma linguagem de estilo usada para descrever a apresentação de documentos HTML. 
                  Ele permite controlar o layout, cores, fontes e outros aspectos visuais de uma página web. 
              </Text>
              <Text style={styles.subtitulo}>Exemplos de uso:</Text>
              <View style={styles.lista}>
                  <Text style={styles.itemLista}>• Alterar a cor dos textos</Text>
                  <Text style={styles.itemLista}>• Definir o tamanho da fonte</Text>
                  <Text style={styles.itemLista}>• Aplicar espaçamento entre elementos</Text>
                  <Text style={styles.itemLista}>• Mudar a cor do fundo dos elementos</Text>
              </View>
          </Animatable.View>

          {/* CARD 3 */}
          <Animatable.View animation="fadeInUp" delay={500} style={styles.card}>
              <Text style={styles.titulo}>Onde e como usar HTML?</Text>
              <Text style={styles.subtitulo}>Aplicações:</Text>
              <View style={styles.lista}>
                  <Text style={styles.itemLista}>• Estilização de layouts</Text>
                  <Text style={styles.itemLista}>• Personalização de aparência visual</Text>
                  <Text style={styles.itemLista}>• Animações e transições</Text>
                  <Text style={styles.itemLista}>• Responsividade e adaptação para diferentes dispositivos</Text>
              </View>
          </Animatable.View>

          {/* Botões */}
          <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
              <TouchableOpacity onPress={() => router.push('/view/basicoCView')}>
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
                      Próximo: Básico do CSS →
                      </Text>
                  </LinearGradient>
              </TouchableOpacity>

              <TouchableOpacity onPress={() => router.push('/view/introCView')}>
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
                      ← 🌟 Voltar aos Módulos de CSS
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

export const styles = StyleSheet.create({
    improvementHeader: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#2e7d32', // verde escuro para "melhoria"
        marginBottom: 8,
        marginTop: 16,
    },
    improvementContent: {
        fontSize: 16,
        color: '#444',
        backgroundColor: '#e8f5e9', // verde claro
        padding: 12,
        borderRadius: 8,
        lineHeight: 22,
    },      
    container: {
      padding: 16,
      backgroundColor: '#2c214a',
      flexGrow: 1,
    },
      card: {
        backgroundColor: '#3b3b3b',
        borderRadius: 12,
        padding: 16,
        marginBottom: 20,
        elevation: 3,
      },
      titulo: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 8,
        color: '#FFF',
      },
      paragrafo: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 12,
      },
      itemLista: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 6,
      },
      botao: {
        backgroundColor: '#4a90e2',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
      },
      textoBotao: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold',
      },
    
      // 🆕 ESTILOS PEDIDOS:
      codigo: {
        backgroundColor: '#e8e8e8',
        fontFamily: 'monospace',
        padding: 12,
        borderRadius: 8,
        color: '#222',
        marginTop: 8,
        marginBottom: 8,
      },
      codigoInline: {
        backgroundColor: '#e0e0e0',
        fontFamily: 'monospace',
        paddingHorizontal: 4,
        borderRadius: 4,
        color: '#000',
      },
      progressContainer: {
        width: '90%',
        marginVertical: 20,
        height: 20,
        borderRadius: 10,
        backgroundColor: '#e0e0e0',
        overflow: 'hidden',
      },
      progressBarBackground: {
        width: '100%',
        height: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        overflow: 'hidden',
        justifyContent: 'center',
      },
      progressText: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 5,
        textAlign: 'center',
      },
      moduloContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 16,
      },
      checkbox: {
        marginRight: 14,
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: '#4caf50',
        alignItems: 'center',
        justifyContent: 'center',
      },
      botaoModulo: {
        flex: 1,
        justifyContent: 'center',
        borderRadius: 12,
        backgroundColor: '#f7f7f7',
        paddingVertical: 14,
        paddingHorizontal: 16,
      },
      moduloConcluido: {
        backgroundColor: '#d4edda',
      },
      textoBotaoModulo: {
        color: '#fff',
        fontSize: 15,
        fontWeight: '600',
      },
    subtitulo: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 12,
        marginBottom: 6,
        color: '#FFF',
    },
    lista: {
        marginTop: 10,
    },
});
