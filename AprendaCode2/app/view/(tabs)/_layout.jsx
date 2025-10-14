// /(tabs)/_layout.tsx
import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons'

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: Platform.select({
          ios: {
            position: 'absolute', // Exibe a tab bar de forma absoluta em iOS
          },
          default: {},
        }),
      }}
    >
      <Tabs.Screen 
        name="home" 
        options={{ 
          title: 'Home',
          tabBarIcon: ({ color, size}) => (
            <Ionicons 
              name="home-outline"
              size={size}
              color={color} />
          ),
        }} 
      />
      <Tabs.Screen 
        name="topicos" 
        options={{ 
          title: 'Tópicos',
          tabBarIcon: ({ color, size}) => (
            <Ionicons 
              name="archive"
              size={size}
              color={color} />
          ),
        }}
      />
      <Tabs.Screen 
        name="autores" 
        options={{
          title: 'Autores',
          tabBarIcon: ({ color, size}) => (
            <Ionicons 
              name="people-circle-outline"
              size={size}
              color={color} />
          ),
        }} 
      />

    </Tabs>
  );
}