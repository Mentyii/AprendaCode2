import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function IntroPython() {
    const router = useRouter();

    const navigateTo = (screen: string) => {
        router.push(`/(topicos)/(modulos_python)/${screen}` as any);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* CARD 1 */}
            <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
                <Text style={styles.titulo}>Antes de Começar: Usando Python com VS Code</Text>
                <Text style={styles.paragrafo}>
                    Para escrever e executar códigos Python com conforto e eficiência:
                </Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>1. Instale o VS Code: https://code.visualstudio.com/</Text>
                    <Text style={styles.itemLista}>2. Instale o Python: https://www.python.org/downloads/</Text>
                    <Text style={styles.itemLista}>3. Instale a extensão "Python" da Microsoft no VS Code</Text>
                    <Text style={styles.itemLista}>4. Crie arquivos .py e execute com `python arquivo.py`</Text>
                </View>
            </Animatable.View>

            {/* CARD 2 */}
            <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
                <Text style={styles.titulo}>O que é Python?</Text>
                <Text style={styles.paragrafo}>
                    Python é uma linguagem interpretada, de alto nível e com tipagem dinâmica. 
                    Criada por Guido van Rossum, é famosa por sua legibilidade e simplicidade.
                </Text>
                <Text style={styles.subtitulo}>Exemplos de uso:</Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>• Scripts automáticos</Text>
                    <Text style={styles.itemLista}>• Análise de dados com pandas</Text>
                    <Text style={styles.itemLista}>• Desenvolvimento web com Django/Flask</Text>
                    <Text style={styles.itemLista}>• Inteligência Artificial (TensorFlow/PyTorch)</Text>
                </View>
            </Animatable.View>

            {/* CARD 3 */}
            <Animatable.View animation="fadeInUp" delay={500} style={styles.card}>
                <Text style={styles.titulo}>Onde e como usar Python?</Text>
                <Text style={styles.subtitulo}>Aplicações:</Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>• Scripts locais e automações</Text>
                    <Text style={styles.itemLista}>• Back-End Web (Django, Flask)</Text>
                    <Text style={styles.itemLista}>• Data Science e Machine Learning</Text>
                    <Text style={styles.itemLista}>• Desenvolvimento de jogos (Pygame)</Text>
                </View>
            </Animatable.View>

            {/* Botões */}
            <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12 }}>
              <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/BasicoPy')}>
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
                    Próximo: Básico do Python →
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
      
              <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/IntroPy')}>
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
                    ← 🌟 Voltar ao Módulos
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
