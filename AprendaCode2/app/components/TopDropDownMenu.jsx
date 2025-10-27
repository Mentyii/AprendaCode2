import React, { useState } from 'react';
import { Appbar, Menu } from 'react-native-paper';
import { router, useRouter } from 'expo-router';

export default function TopDropDownMenu() {
  const [visible, setVisible] = useState(false);

  const openMenu = () => setVisible(true);
  const closeMenu = () => setVisible(false);

  return (
    <Appbar.Header>
      <Menu
        visible={visible}
        onDismiss={closeMenu}
        anchor={<Appbar.Action icon="menu" color="black" onPress={openMenu} />}
      >
        <Menu.Item onPress={() => router.push('/view/autoresView')} title="Autores" />
        <Menu.Item onPress={() => router.push('/view/homeView')} title="Home" />
        <Menu.Item onPress={() => router.push('/view/topicosView')} title="Tópicos" />
      </Menu>
      <Appbar.Content title="AprendaCode" />
    </Appbar.Header>
  );
}
