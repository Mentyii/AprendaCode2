import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function IntroHTML() {
    const router = useRouter();

    const navigateTo = (screen: string) => {
        router.push(`/(topicos)/(modulos_html)/${screen}` as any);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* CARD 1 */}
            <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
                <Text style={styles.titulo}>Antes de Começar: Usando HTML com VS Code</Text>
                <Text style={styles.paragrafo}>
                    Para escrever e executar códigos HTML com conforto e eficiência:
                </Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>1. Instale o VS Code: https://code.visualstudio.com/</Text>
                    <Text style={styles.itemLista}>OBS: HTML não necessita de compilador. Logo, basta criar </Text>
                    <Text style={styles.itemLista}>2. Crie arquivos .html e execute com `HTML arquivo.html`</Text>
                </View>
            </Animatable.View>

            {/* CARD 2 */}
            <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
                <Text style={styles.titulo}>O que é HTML?</Text>
                <Text style={styles.paragrafo}>
                    HTML (HyperText Markup Language) é a linguagem de marcação padrão usada para criar e estruturar o conteúdo de páginas na web. 
                    Ele organiza textos, imagens, links, vídeos e outros elementos em um site. 
                </Text>
                <Text style={styles.subtitulo}>Exemplos de uso:</Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>• Criar títulos e textos</Text>
                    <Text style={styles.itemLista}>• Inserir imagens e Links</Text>
                    <Text style={styles.itemLista}>• Construir listas</Text>
                    <Text style={styles.itemLista}>• Criar formulários</Text>
                </View>
            </Animatable.View>

            {/* CARD 3 */}
            <Animatable.View animation="fadeInUp" delay={500} style={styles.card}>
                <Text style={styles.titulo}>Onde e como usar HTML?</Text>
                <Text style={styles.subtitulo}>Aplicações:</Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>• Páginas de sites e blogs</Text>
                    <Text style={styles.itemLista}>• Sistemas e painéis Web</Text>
                    <Text style={styles.itemLista}>• Aplicações Web responsivas</Text>
                    <Text style={styles.itemLista}>• Embutir conteúdos de outras fontes</Text>
                </View>
            </Animatable.View>

          {/* Botões */}
          <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
              <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_html)/BasicoH')}>
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
                      Próximo: Básico do HTML →
                      </Text>
                  </LinearGradient>
              </TouchableOpacity>
              
              <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_html)/IntroH')}>
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
                      ← 🌟 Voltar aos Módulos de HTML
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