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
  const [user, setUser] = useState<User | null>(null); 

  const handleAuthStateChanged = (user: User | null) => {
    setUser(user);
    if (initializing) setInitializing(false);
  };

  useEffect(() => {
    const subscriber = onAuthStateChanged(authInstance, handleAuthStateChanged);
    return subscriber; 
  }, []);

  if (initializing) {
      return null; 
  }

  return (
    <Stack screenOptions={{ headerShown: false }} />
  );

  
}