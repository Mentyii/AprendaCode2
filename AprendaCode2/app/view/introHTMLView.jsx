// IntroHTML.jsx
import React from "react";
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function IntroHTML() {
    const router = useRouter();

    // REMOVIDA A ANOTAÇÃO DE TIPO (screen: string) e (as any)
    const navigateTo = (screen) => { 
        router.push(`/(topicos)/(modulos_html)/${screen}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            
            {/* CARD 1 - Conteúdo Corrigido */}
            <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
                <Text style={styles.titulo}>Antes de Começar: Usando HTML com VS Code</Text>
                <Text style={styles.paragrafo}>
                    Para escrever e visualizar códigos HTML com conforto e eficiência:
                </Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>1. Instale o VS Code:</Text>
                    <Text style={[styles.itemLista, { color: '#43e97b' }]}>https://code.visualstudio.com/</Text>
                    
                    <Text style={styles.itemLista}>2. Crie um arquivo com a extensão <Text style={styles.codigoInline}>.html</Text> (Ex: <Text style={styles.codigoInline}>index.html</Text>).</Text>
                    
                    <Text style={styles.itemLista}>3. Instale a extensão "Live Server" no VS Code.</Text>
                    
                    <Text style={styles.itemLista}>4. Clique com o botão direito no seu arquivo HTML e selecione: <Text style={styles.codigoInline}>Open with Live Server</Text>.</Text>
                </View>
                <Text style={[styles.paragrafo, { marginTop: 12 }]}>
                    <Text style={{fontWeight: 'bold'}}>OBS:</Text> HTML é uma linguagem de marcação e não precisa de compilador; ele é interpretado diretamente pelo navegador.
                </Text>
            </Animatable.View>

            {/* CARD 2 */}
            <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
                <Text style={styles.titulo}>O que é HTML?</Text>
                <Text style={styles.paragrafo}>
                    <Text style={{fontWeight: 'bold'}}>HTML</Text> (<Text style={{fontWeight: 'bold', color: '#38f9d7'}}>H</Text>yper<Text style={{fontWeight: 'bold', color: '#38f9d7'}}>T</Text>ext <Text style={{fontWeight: 'bold', color: '#38f9d7'}}>M</Text>arkup <Text style={{fontWeight: 'bold', color: '#38f9d7'}}>L</Text>anguage) é a linguagem de marcação padrão usada para criar e **estruturar o conteúdo** de páginas na web. 
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
            <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12, marginBottom: 30 }}>
                {/* Próximo Módulo */}
                <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_html)/BasicoH')}>
                    <LinearGradient
                        colors={["#43e97b", "#38f9d7"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientButton}
                    >
                        <Text style={styles.gradientButtonText}>
                        Próximo: Básico do HTML →
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
                
                {/* Voltar aos Módulos de HTML (Rota para IntroH é a mesma do arquivo, alterado para a Home do módulo) */}
                <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_html)')}> 
                    <LinearGradient
                        colors={["#43e97b", "#38f9d7"]}
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0 }}
                        style={styles.gradientButton}
                    >
                        <Text style={styles.gradientButtonText}>
                        ← 🌟 Voltar aos Módulos de HTML
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

// Estilos mantidos e aprimorados, com adição do estilo `gradientButton`
export const styles = StyleSheet.create({
    // ... [Estilos improvementHeader e improvementContent omitidos para brevidade]
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
      lineHeight: 24, // Adicionado para melhor legibilidade
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
    // Estilos de código para melhor visualização
    codigoInline: {
      backgroundColor: 'rgba(255, 255, 255, 0.1)', // Fundo claro no modo escuro
      fontFamily: 'monospace',
      paddingHorizontal: 4,
      borderRadius: 4,
      color: '#38f9d7', // Cor de destaque
      fontWeight: 'bold',
    },
    // ... [Outros estilos omitidos para brevidade]
});