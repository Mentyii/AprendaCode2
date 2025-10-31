import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { router, useRouter } from 'expo-router';

export default function TopDropDownMenu() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  const handleNavigation = (path) => {
    closeMenu(); // 1. Fecha o menu
    router.push(path); // 2. Navega para a nova tela
  };

  return (
    <Appbar.Header>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="menu" color="black" onPress={openMenu} />}
      >
        <Menu.Item onPress={() => handleNavigation('/view/autoresView')} title="Autores" />
        <Menu.Item onPress={() => handleNavigation('/view/topicosView')} title="Tópicos" />
      </Menu>
      <Appbar.Content title="AprendaCode" />
    </Appbar.Header>
  );
}

