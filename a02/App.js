import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Media from './Forms/Media';
import IMC from './Forms/IMC';
import NavMenu from './Components/NavMenu';
import Home from './Forms/Home';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');

  const navigate = (screen) => {
    setCurrentScreen(screen);
  };

  return (
    <View style={styles.container}>
       <NavMenu navigate={navigate} />
      {currentScreen === 'home' ? <Home navigate={navigate} /> : null }
      {currentScreen === 'media' ? <Media navigate={navigate} /> : null }
      {currentScreen === 'imc' ? <IMC navigate={navigate} /> : null }
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

