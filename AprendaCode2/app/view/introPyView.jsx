import { View, ScrollView, TouchableOpacity, Text, Pressable, Animated } from "react-native";
import { useRouter } from 'expo-router';
import { useState, useEffect, useRef } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { MaterialIcons } from '@expo/vector-icons';
import * as Animatable from 'react-native-animatable';
import { LinearGradient } from 'expo-linear-gradient';

export default function IntroPy() {
  const router = useRouter();
  const [completedModules, setCompletedModules] = useState({});
  const [showConfetti, setShowConfetti] = useState(false);

  const modulos = [
    { id: "IntroPython", title: "🐍 Introdução Técnica", screen: "introPythonView" },
    { id: "BasicoPy", title: "🔤 Básico do Python", screen: "basicoPyView" },
    { id: "VariaveisPy", title: "📊 Variáveis e Tipos", screen: "variaveisPyView" },
    { id: "EstruturasPy", title: "🔄 Estruturas de Controle", screen: "estruturasPyView" },
    { id: "FuncoesPy", title: "🧩 Funções", screen: "funcoesPyView" },
    { id: "ListasPy", title: "🗃️ Listas e Dicionários", screen: "listasPyView" },
    { id: "InteracaoPy", title: "💬 Interação com Usuário", screen: "interacaoPyView" },
    { id: "ProjetosPy", title: "🛠️ Projetos Práticos", screen: "projetosPyView" }
  ];

  const completedCount = modulos.filter(m => completedModules[m.id]).length;
  const progress = completedCount / modulos.length;
  const progressAnim = useRef(new Animated.Value(0)).current;
  const BAR_WIDTH = 300;

  useEffect(() => {
    const loadProgress = async () => {
      try {
        const savedProgress = await AsyncStorage.getItem('@python_modules_progress');
        if (savedProgress) {
          setCompletedModules(JSON.parse(savedProgress));
        }
      } catch (error) {
        console.error('Erro ao carregar progresso:', error);
      }
    };
    loadProgress();
  }, []);

  useEffect(() => {
    Animated.timing(progressAnim, {
      toValue: progress,
      duration: 500,
      useNativeDriver: false,
    }).start();
  }, [progress]);

  useEffect(() => {
    const saveProgress = async () => {
      try {
        await AsyncStorage.setItem('@python_modules_progress', JSON.stringify(completedModules));
      } catch (error) {
        console.error('Erro ao salvar progresso:', error);
      }
    };
    saveProgress();

    if (progress === 1) {
      setShowConfetti(true);
      setTimeout(() => setShowConfetti(false), 5000);
    }
  }, [completedModules]);

  const toggleModule = (moduleId) => {
    setCompletedModules(prev => ({
      ...prev,
      [moduleId]: !prev[moduleId]
    }));
  };

  return (
    // CORREÇÃO APLICADA AQUI: 
    // 1. Substituído 'height: 100%' por 'minHeight: 100%' para permitir a rolagem.
    // 2. Aumentado o paddingBottom para 80 para garantir que o último botão seja visível.
    <ScrollView contentContainerStyle={{ 
      padding: 20, 
      backgroundColor: "#2c214a", 
      paddingBottom: 80, // Aumentado para dar mais espaço de respiro
      width: '100%', 
      minHeight: '100%' // Garante que o conteúdo role quando necessário
    }}>
      <Animatable.Text animation="fadeInDown" style={{ fontSize: 26, fontWeight: 'bold', color: '#DDD7ED', marginBottom: 20, textAlign: 'center' }}>
        🌟 Módulos de Python
      </Animatable.Text>

      <View style={{ alignItems: 'center', marginBottom: 25 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', marginBottom: 6, color: '#DDD7ED' }}>
          {Math.round(progress * 100)}% concluído ({completedCount}/{modulos.length})
        </Text>

        <View style={{ backgroundColor: '#3b3b3b', borderRadius: 12, width: BAR_WIDTH, height: 16, overflow: 'hidden' }}>
          <Animated.View style={{ width: progressAnim.interpolate({ inputRange: [0, 1], outputRange: ['0%', '100%'] }), height: 16 }}>
            <LinearGradient
              colors={['#43e97b', '#38f9d7']}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            />
          </Animated.View>
        </View>
      </View>

      {modulos.map((modulo, index) => (
        <Animatable.View key={modulo.id} animation="fadeInUp" delay={index * 100} style={{
          flexDirection: 'row',
          alignItems: 'center',
          backgroundColor: completedModules[modulo.id] ? "#e9f7ef" : "#3b3b3b",
          padding: 14,
          marginBottom: 12,
          borderRadius: 14,
          elevation: 2,
        }}>
          <Pressable onPress={() => toggleModule(modulo.id)} style={{ marginRight: 14 }}>
            <MaterialIcons
              name={completedModules[modulo.id] ? "check-box" : "check-box-outline-blank"}
              size={30}
              color={completedModules[modulo.id] ? "#4CAF50" : "#ccc"}
            />
          </Pressable>

          <TouchableOpacity
            style={{ flex: 1 }}
            onPress={() => router.push(`/view/${modulo.screen}`)}
          >
            <Text style={{
              fontSize: 17,
              fontWeight: '600',
              color: completedModules[modulo.id] ? "#1e4620" : "#FFF"
            }}>
              {modulo.title}
            </Text>
          </TouchableOpacity>
        </Animatable.View>
      ))}


      <Animatable.View animation="fadeInUp" delay={modulos.length * 100 + 200}>
        <TouchableOpacity style={{padding: 10}}onPress={() => router.push('/view/topicosView')}>
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
              🏠 Voltar para Tópicos
            </Text>
          </LinearGradient>
        </TouchableOpacity>
      </Animatable.View>
    </ScrollView>
  );
}

