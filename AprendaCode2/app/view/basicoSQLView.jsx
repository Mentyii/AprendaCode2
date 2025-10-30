import { Text, ScrollView, TouchableOpacity, View } from "react-native";
import { useRouter } from 'expo-router';
import { styles } from "./introSQLView";
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from "expo-linear-gradient";

export default function BasicoSQL() {
    const router = useRouter();

    return (
        <ScrollView contentContainerStyle={[styles.container, { paddingBottom: 40}]}>

            {/* Comando SELECT */}
            <Animatable.View animation="fadeInUp" duration={600} style={[styles.card, {
                borderRadius: 12,
                padding: 16,
                marginBottom: 20,
                elevation: 2
            }]}>
                <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
                    Selecionando Dados
                </Text>
                <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
                    O comando <Text style={{ fontWeight: 'bold' }}>SELECT</Text> é usado para buscar dados em tabelas.
                </Text>
                <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12 }}>
                    <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
                        SELECT nome, idade FROM usuarios;
                    </Text>
                </View>
            </Animatable.View>

            {/* Inserindo Dados */}
            <Animatable.View animation="fadeInUp" delay={200} duration={600} style={[styles.card, {
                borderRadius: 12,
                padding: 16,
                marginBottom: 20,
                elevation: 2
            }]}>
                <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
                    Inserindo Dados
                </Text>
                <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
                    Para adicionar dados, usamos o comando <Text style={{ fontWeight: 'bold' }}>INSERT INTO</Text>.
                </Text>
                <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12 }}>
                    <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
                        INSERT INTO usuarios (nome, idade) VALUES ('Ana', 30);
                    </Text>
                </View>
            </Animatable.View>

            {/* Atualizando Dados */}
            <Animatable.View animation="fadeInUp" delay={300} duration={600} style={[styles.card, {
                borderRadius: 12,
                padding: 16,
                marginBottom: 20,
                elevation: 2
            }]}>
                <Text style={[styles.titulo, { fontSize: 22, marginBottom: 10 }]}>
                    Atualizando Dados
                </Text>
                <Text style={[styles.paragrafo, { marginBottom: 10 }]}>
                    Use <Text style={{ fontWeight: 'bold' }}>UPDATE</Text> para modificar registros existentes.
                </Text>
                <View style={{ backgroundColor: "#1e1e1e", borderRadius: 8, padding: 12 }}>
                    <Text style={{ color: "#dcdcdc", fontFamily: "monospace" }}>
                        UPDATE usuarios SET idade = 31 WHERE nome = 'Ana';
                    </Text>
                </View>
            </Animatable.View>

        {/* Botões */}
        <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
            <TouchableOpacity onPress={() => router.push('/view/variaveisSQLView')}>
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
                    Próximo: Variáveis e Tipos →
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/view/introSQLView')}>
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
