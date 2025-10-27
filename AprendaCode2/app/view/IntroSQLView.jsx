// (topicos)/(modulos_sql)/IntroSQL.tsx
import { Text, View, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function IntroSQL() {
    const router = useRouter();

    const navigateTo = (screen) => {
        router.push(`/(topicos)/(modulos_sql)/${screen}`);
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            {/* CARD 1 */}
            <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
                <Text style={styles.titulo}>Antes de Começar: Onde Usar SQL</Text>
                <Text style={styles.paragrafo}>
                    SQL é a linguagem padrão para comunicação com bancos de dados relacionais. Antes de aprender, considere:
                </Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>1. Ter um ambiente com MySQL, PostgreSQL ou SQLite</Text>
                    <Text style={styles.itemLista}>2. Usar plataformas como DB Fiddle, SQLLiteStudio ou PgAdmin</Text>
                    <Text style={styles.itemLista}>3. Conhecer o básico sobre tabelas e dados estruturados</Text>
                </View>
            </Animatable.View>

            {/* CARD 2 */}
            <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
                <Text style={styles.titulo}>O que é SQL?</Text>
                <Text style={styles.paragrafo}>
                    SQL (Structured Query Language) é usada para criar, consultar, atualizar e deletar dados em bancos de dados.
                    Ela é essencial no desenvolvimento de aplicações que manipulam dados.
                </Text>
                <Text style={styles.subtitulo}>Exemplos de uso:</Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>• Consultar dados de clientes em sistemas</Text>
                    <Text style={styles.itemLista}>• Criar e gerenciar tabelas de banco de dados</Text>
                    <Text style={styles.itemLista}>• Analisar grandes volumes de dados</Text>
                    <Text style={styles.itemLista}>• Integrar back-end com dados persistentes</Text>
                </View>
            </Animatable.View>

            {/* CARD 3 */}
            <Animatable.View animation="fadeInUp" delay={500} style={styles.card}>
                <Text style={styles.titulo}>Por que aprender SQL?</Text>
                <Text style={styles.subtitulo}>Vantagens:</Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>• Linguagem declarativa e de fácil leitura</Text>
                    <Text style={styles.itemLista}>• Muito usada em qualquer aplicação com dados</Text>
                    <Text style={styles.itemLista}>• Ótima base para aprender bancos relacionais</Text>
                    <Text style={styles.itemLista}>• Aplicável em BI, Data Science e Back-end</Text>
                </View>
            </Animatable.View>

            {/* Botões */}
            <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
                <TouchableOpacity onPress={() => router.push('/view/basicoSQLView')}>
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
                        Próximo: Básico do SQL →
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
    codigo: {
        backgroundColor: '#1e1e1e',
        fontFamily: 'monospace',
        padding: 12,
        borderRadius: 8,
        color: '#FFF',
        marginTop: 8,
        marginBottom: 8,
    },

});
