// _layout.jsx
import React, { useEffect, useState } from 'react';
import { Slot, usePathname } from 'expo-router'; // 👈 Importar usePathname
import { View, StyleSheet, Text } from 'react-native'; // 👈 Adicionado Text para o 'loading'
import { Provider as PaperProvider } from 'react-native-paper'; 
import TopDropDownMenu from './components/TopDropDownMenu';
import ButtomMenu from './components/ButtomMenu';

// 🛑 IMPORTAR E INICIALIZAR FIREBASE (Apenas para o contexto de funcionamento)
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

const firebaseConfig = { 
    apiKey: "AIzaSyCIHZTG3uU7oB9Iih3ZdvzDGG5B9J_FJzg",
  authDomain: "aprendacode-f4cdb.firebaseapp.com",
  projectId: "aprendacode-f4cdb",
  storageBucket: "aprendacode-f4cdb.firebasestorage.app",
  messagingSenderId: "563435707624",
  appId: "1:563435707624:web:b9b0f31d1b19bdbbc53d5d",
  measurementId: "G-EWXNYRX54W"
};

const app = initializeApp(firebaseConfig);
export const authInstance = getAuth(app);
// ----------------------------------------------------

export default function RootLayout() {
    const [initializing, setInitializing] = useState(true);
    const [user, setUser] = useState(null); 
    
    // ✅ 1. Obter o caminho da rota atual
    const pathname = usePathname();

    const handleAuthStateChanged = (user) => {
        setUser(user);
        if (initializing) setInitializing(false);
    };

    useEffect(() => {
        const subscriber = onAuthStateChanged(authInstance, handleAuthStateChanged);
        return subscriber;
    }, []);

    // ✅ 2. Lógica para esconder o menu
    // Adicionado '/view/loginView' e '/view/cadastroView' (assumindo estas rotas)
    // E também '/', que deve ser a rota inicial
    const isAuthScreen = pathname.includes('loginView') || pathname.includes('cadastroView') || pathname === '/';
    
    // Você só quer mostrar o menu se NÃO for uma tela de autenticação E o usuário estiver logado
    // O menu inferior é tipicamente mostrado nas telas 'tabs'
    const shouldShowMenu = !isAuthScreen && user;

    if (initializing) {
        return (
             <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                 <Text>Carregando...</Text>
             </View>
        );
    }

    // 3. Estrutura de retorno com o BottomTabMenu adicionado no final
    return (
        <PaperProvider> 
            <View style={styles.container}>
                
                {/* Menu Superior: Aparece apenas se logado e não em telas Auth */}
                {shouldShowMenu && <TopDropDownMenu />} 
                
                {/* O Slot renderiza o conteúdo da rota atual */}
                <View style={styles.content}>
                    <Slot /> 
                </View>

                {/* Menu Inferior: Aparece apenas se logado e não em telas Auth */}
                {shouldShowMenu && <ButtomMenu />} 
            </View>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    content: {
        flex: 1,
    }
});
