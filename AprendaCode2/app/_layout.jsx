// _layout.tsx (Usando o SDK Web do Firebase)
import { initializeApp } from 'firebase/app';
import { getAuth, onAuthStateChanged, User } from 'firebase/auth'; // Importa getAuth e a tipagem User
import { Stack } from 'expo-router';
import { useEffect, useState } from 'react';

// 1. Inicialize o Firebase (Configure com suas chaves)
const firebaseConfig = {
    // ... Suas chaves de configuração do Firebase
};
const app = initializeApp(firebaseConfig);
const authInstance = getAuth(app);


export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  // Usa a tipagem 'User' do SDK Web
  const [user, setUser] = useState<User | null>(null); 

  // A função de callback agora usa a tipagem 'User' importada do 'firebase/auth'
  const handleAuthStateChanged = (user: User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    // 2. Assina as mudanças de estado
    const subscriber = onAuthStateChanged(authInstance, handleAuthStateChanged);
    
    // Retorna a função para cancelar a subscrição
    return subscriber; 
  }, []);

  if (initializing) {
      // Opcional: Mostrar uma tela de carregamento enquanto verifica o estado
      return null; 
  }

  // 3. Renderiza a navegação com base no estado do usuário
  return (
    <Stack screenOptions={{ headerShown: false }} />
  );
}