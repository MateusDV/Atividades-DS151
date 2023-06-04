import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

function Home(props) {

  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => props.navigate('media')}>
        <Text style={styles.buttonText}>Calcular Média</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => props.navigate('imc')}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => props.navigate('imagens')}>
        <Text style={styles.buttonText}>Imagens</Text>
      </TouchableOpacity>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => props.navigate('paises')}>
        <Text style={styles.buttonText}>Paises</Text>
      </TouchableOpacity>
    </>
  );
}

export default Home;

const styles = StyleSheet.create({
  button: {
      backgroundColor: '#007bff',
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 4,
  },
  buttonText: {
      color: '#fff',
      fontSize: 16,
      fontWeight: '500',
      textAlign: 'center',
  },
});