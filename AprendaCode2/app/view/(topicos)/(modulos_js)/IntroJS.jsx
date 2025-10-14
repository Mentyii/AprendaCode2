import { View, ScrollView, TouchableOpacity, Text, Pressable, Animated } from "react-native";
import { useRouter } from 'expo-router';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';
import { styles } from "../(modulos_python)/IntroPython";

export default function IntroJS() {
    const router = useRouter();

    const navigateTo = (screen: string) => {
        router.push(`/(topicos)/(modulos_js)/${screen}` as any);
    };
 
  return (
    <ScrollView contentContainerStyle={{ padding: 20, backgroundColor: "#2c214a", paddingBottom: 50 }}>
      <Animatable.Text animation="fadeInDown" style={{ fontSize: 26, fontWeight: 'bold', color: '#DDD7ED', marginBottom: 20, textAlign: 'center' }}>
        📘 Módulo 1: Introdução ao JavaScript
      </Animatable.Text>


      <Animatable.View animation="fadeInUp" style={{ backgroundColor: "#3b3b3b", padding: 16, borderRadius: 14, elevation: 2, marginBottom: 20, }}>
        <Text style={[styles.titulo, { fontSize: 18, marginBottom: 10 }]}>
          O que é JavaScript?
        </Text>
        <Text style={[styles.paragrafo]}>
          JavaScript é uma linguagem de programação de alto nível, interpretada e baseada em objetos. Foi criada por Brendan Eich em 1995 e é amplamente usada no desenvolvimento web para tornar os sites mais dinâmicos e interativos.
        </Text>

        <Text style={[styles.subtitulo]}>Características do JavaScript:</Text>
        <Text style={styles.itemLista}>- Linguagem baseada em scripts: executada linha por linha.</Text>
        <Text style={styles.itemLista}>- Interpretada: não precisa ser compilada para rodar.</Text>
        <Text style={styles.itemLista}>- Tipagem dinâmica: o tipo das variáveis é determinado automaticamente.</Text>
        <Text style={styles.itemLista}>- Baseada em eventos: permite reagir a ações do usuário.</Text>
        <Text style={styles.itemLista}>- Suporte a orientação a objetos.</Text>

        <Text style={[styles.subtitulo]}>Exemplos visuais do uso do JavaScript:</Text>
        <Text style={styles.itemLista}>- Netflix: controle de carrossel, botões, busca automática.</Text>
        <Text style={styles.itemLista}>- Google Maps: interatividade no mapa, zoom.</Text>
        <Text style={styles.itemLista}>- Facebook: feed dinâmico, curtidas em tempo real.</Text>
        <Text style={styles.itemLista}>- Spotify Web: player de áudio, playlists dinâmicas.</Text>
        <Text style={[styles.itemLista, { marginVertical: 8 }]}>✨ JavaScript é a "alma" da experiência do usuário nesses sites.</Text>

        <Text style={[styles.subtitulo]}>Benefícios de aprender JavaScript:</Text>
        <Text style={styles.itemLista}>- Alta demanda no mercado.</Text>
        <Text style={styles.itemLista}>- Base de frameworks modernos: React, Vue, Angular.</Text>
        <Text style={styles.itemLista}>- Linguagem principal da web.</Text>
        <Text style={styles.itemLista}>- Comunidade ativa e rica em conteúdo gratuito.</Text>

        <Text style={[styles.subtitulo]}>Por que aprender JavaScript?</Text>
        <Text style={styles.itemLista}>- Funciona em todos os navegadores modernos.</Text>
        <Text style={styles.itemLista}>- Essencial para sites interativos.</Text>
        <Text style={styles.itemLista}>- Usado em tecnologias como React e Node.js.</Text>
        <Text style={styles.itemLista}>- Comunidade imensa com muito conteúdo gratuito.</Text>

        <Text style={[styles.subtitulo]}>Como começar a aprender JavaScript:</Text>
        <Text style={styles.itemLista}>- Entenda lógica de programação (if/else, loops).</Text>
        <Text style={styles.itemLista}>- Comece com exemplos simples.</Text>
        <Text style={styles.itemLista}>- Use o console do navegador (F12).</Text>
        <Text style={styles.itemLista}>- Pratique todos os dias.</Text>
        <Text style={styles.itemLista}>- Cometa erros e aprenda com eles.</Text>
      </Animatable.View>

      
    {/* Botões */}
      <Animatable.View animation="fadeInUp" delay={400} duration={600} style={{ gap: 12 }}>
        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/howtoUseJS')}>
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
              Próximo: Onde e como Usar →
            </Text>
          </LinearGradient>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => router.push('/(topicos)/(modulos_js)/IntroJava')}>
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
