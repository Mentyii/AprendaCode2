// IntroPython.jsx
import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function IntroPython() {
    const router = useRouter();

    // REMOVIDA A ANOTAÇÃO DE TIPO (screen: string) e (as any)
    const navigateTo = (screen) => { 
        router.push(`/(topicos)/(modulos_python)/${screen}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            {/* CARD 1 - Ajustes para Clareza */}
            <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
                <Text style={styles.titulo}>Antes de Começar: Usando Python com VS Code</Text>
                <Text style={styles.paragrafo}>
                    Para escrever e executar códigos Python com conforto e eficiência:
                </Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>1. Instale o VS Code:</Text>
                    <Text style={[styles.itemLista, { color: '#43e97b' }]}>https://code.visualstudio.com/</Text>
                    
                    <Text style={styles.itemLista}>2. Instale o Python (necessário para rodar o código):</Text>
                    <Text style={[styles.itemLista, { color: '#43e97b' }]}>https://www.python.org/downloads/</Text>
                    
                    <Text style={styles.itemLista}>3. Instale a extensão "Python" da Microsoft no VS Code.</Text>
                    
                    <Text style={styles.itemLista}>4. Crie um arquivo com a extensão <Text style={styles.codigoInline}>.py</Text> (Ex: <Text style={styles.codigoInline}>app.py</Text>).</Text>
                    
                    <Text style={styles.itemLista}>5. Clique no botão "Run" (seta triangular) no canto superior direito do VS Code ou use o comando: <Text style={styles.codigoInline}>python arquivo.py</Text>.</Text>
                </View>
            </Animatable.View>

            {/* CARD 2 */}
            <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
                <Text style={styles.titulo}>O que é Python? 🐍</Text>
                <Text style={styles.paragrafo}>
                    Python é uma linguagem <Text style={{fontWeight: 'bold'}}>interpretada</Text>, de <Text style={{fontWeight: 'bold'}}>alto nível</Text> e com tipagem dinâmica. 
                    Criada por Guido van Rossum, é famosa por sua <Text style={{fontWeight: 'bold', color: '#38f9d7'}}>legibilidade</Text> e <Text style={{fontWeight: 'bold', color: '#38f9d7'}}>simplicidade</Text>.
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
            <Animatable.View animation="fadeInUp" duration={500} delay={400} style={{ gap: 12, marginBottom: 30 }}>
                {/* Próximo Módulo */}
                <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)/BasicoPy')}>
                    <LinearGradient
                        colors={["#43e97b", "#38f9d7"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientButton}
                    >
                        <Text style={styles.gradientButtonText}>
                          Próximo: Básico do Python →
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            
                {/* Voltar aos Módulos */}
                <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_python)')}>
                    <LinearGradient
                        colors={["#43e97b", "#38f9d7"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientButton}
                    >
                        <Text style={styles.gradientButtonText}>
                          ← 🌟 Voltar aos Módulos
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            
                {/* Voltar para Home */}
                <TouchableOpacity onPress={() => router.push('/(tabs)/topicos')}>
                    <LinearGradient
                        colors={["#f953c6", "#b91d73"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientButton}
                    >
                        <Text style={styles.gradientButtonText}>
                          🏠 Voltar para Home
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </Animatable.View>
        </ScrollView>
    );
}

// Estilos
export const styles = StyleSheet.create({
    // ... [Outros estilos omitidos para brevidade]
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
        lineHeight: 24,
    },
    subtitulo: {
        fontSize: 16,
        fontWeight: '600',
        marginTop: 12,
        marginBottom: 6,
        color: '#FFF',
    },
    itemLista: {
        fontSize: 16,
        color: '#FFF',
        marginBottom: 6,
    },
    lista: {
        marginTop: 10,
    },
    // Estilo para o <LinearGradient>
    gradientButton: {
        paddingVertical: 14,
        paddingHorizontal: 24,
        borderRadius: 30,
        alignItems: 'center',
        elevation: 3
    },
    // Estilo para o <Text> dentro do <LinearGradient>
    gradientButtonText: {
        color: "white",
        fontSize: 16,
        fontWeight: 'bold'
    },
    // Estilo para destacar código inline
    codigoInline: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)', 
      fontFamily: 'monospace',
      paddingHorizontal: 4,
      borderRadius: 4,
      color: '#38f9d7', 
      fontWeight: 'bold',
    },
    // ... [Outros estilos]
});