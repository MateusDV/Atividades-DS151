import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Media from './Forms/Media';
import IMC from './Forms/IMC';
import Home from './Forms/Home';
import Paises from './Forms/Paises'
import NavMenu from './Components/NavMenu';

import Imagens from './Forms/Imagens';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
       <NavMenu navigate={navigate} />
      {currentScreen === 'home' ? <Home navigate={navigate} /> : null }
      {currentScreen === 'media' ? <Media /> : null }
      {currentScreen === 'imc' ? <IMC /> : null }
      {currentScreen === 'imagens' ? <Imagens /> : null }
      {currentScreen === 'paises' ? <Paises /> : null }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

