import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';

const IMC = () => {
  const [Peso, setPeso] = useState('');
  const [Altura, setAltura] = useState('');
  const [imc, setImc] = useState('');

  const calcularImc = () => {
    const imcCalculada = parseFloat(Peso) / (parseFloat(Altura)*parseFloat(Altura));
    setImc(imcCalculada.toFixed(2));
  }

  return (
    <>
      <Text>Cálculo de IMC</Text>
      <TextInput
        style={styles.textbox}
        placeholder="Digite o seu peso em KG"
        keyboardType="numeric"
        onChangeText={(nota) => setPeso(nota)}
      />
      <TextInput
        style={styles.textbox}
        placeholder="Digite a sua altura em Metros"
        keyboardType="numeric"
        onChangeText={(nota) => setAltura(nota)}
      />
      <TouchableOpacity 
        style={styles.button}
        onPress={calcularImc}>
        <Text style={styles.buttonText}>Calcular IMC</Text>
      </TouchableOpacity>
      {imc ? <Text>O seu IMC é {imc}</Text> : null}
    </>
  );
}

export default IMC;

const styles = StyleSheet.create({
  textbox: {
    width: '60%',
    height: 40,
    padding: 8,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#CCC',
    borderRadius: 4,
  },
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