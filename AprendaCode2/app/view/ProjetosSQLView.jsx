import { Text, View, ScrollView, TouchableOpacity } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";
import { styles } from "./introSQLView";

export default function ProjetosSQL() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={styles.container}>

            {/* CARD 1 - Projeto 1 */}
            <Animatable.View animation="fadeInUp" delay={100} style={styles.card}>
                <Text style={styles.titulo}>Projeto 1: Cadastro de Clientes</Text>
                <Text style={styles.paragrafo}>
                    Crie um banco de dados chamado `empresa` com uma tabela `clientes` contendo os campos:
                </Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>• id (chave primária)</Text>
                    <Text style={styles.itemLista}>• nome</Text>
                    <Text style={styles.itemLista}>• email</Text>
                    <Text style={styles.itemLista}>• cidade</Text>
                </View>
                <Text style={styles.subtitulo}>Objetivos:</Text>
                <Text style={styles.paragrafo}>
                    • Inserir clientes, editar e excluir dados com comandos SQL.
                </Text>
            </Animatable.View>

            {/* CARD 2 - Projeto 2 */}
            <Animatable.View animation="fadeInUp" delay={300} style={styles.card}>
                <Text style={styles.titulo}>Projeto 2: Biblioteca Online</Text>
                <Text style={styles.paragrafo}>
                    Crie um banco de dados para gerenciar livros, autores e empréstimos.
                </Text>
                <Text style={styles.subtitulo}>Tabelas sugeridas:</Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>• livros (id, título, autor_id)</Text>
                    <Text style={styles.itemLista}>• autores (id, nome)</Text>
                    <Text style={styles.itemLista}>• emprestimos (id, livro_id, data_emprestimo, data_devolucao)</Text>
                </View>
                <Text style={styles.paragrafo}>
                    • Use INNER JOIN para relacionar livros e autores.
                </Text>
            </Animatable.View>

            {/* CARD 3 - Projeto 3 */}
            <Animatable.View animation="fadeInUp" delay={500} style={styles.card}>
                <Text style={styles.titulo}>Projeto 3: Relatórios com SELECT</Text>
                <Text style={styles.paragrafo}>
                    Crie consultas SQL que mostrem:
                </Text>
                <View style={styles.lista}>
                    <Text style={styles.itemLista}>• Quantidade de livros por autor</Text>
                    <Text style={styles.itemLista}>• Empréstimos em atraso</Text>
                    <Text style={styles.itemLista}>• Top 5 autores mais emprestados</Text>
                </View>
                <Text style={styles.paragrafo}>
                    Explore `GROUP BY`, `ORDER BY`, `COUNT()`, `MAX()` e `LIMIT`.
                </Text>
            </Animatable.View>

            {/* Botões */}
            <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
                <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_sql)/QuizSQL')}>
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

                <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_sql)/InteracaoSQL')}>
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
                        ← Anterior: Interação com Usuário
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
