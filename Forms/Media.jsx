import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';
import { create } from '../services/Aluno.js';

const Media = () => {
	const [nota1, setNota1] = useState('');
	const [nota2, setNota2] = useState('');
	const [nome, setNome] = useState('');
	const [media, setMedia] = useState('');

	const calcularMedia = () => {
		const mediaCalculada = (parseFloat(nota1) + parseFloat(nota2)) / 2;
		setMedia(mediaCalculada.toFixed(2));
	}

	const registrarMedia = () => {
		create({nome: nome, media: media})
			.then(id => console.log('Aluno criado com id: ' + id))
			.catch(err => console.log(err));
	}

	return (
		<>
			<Text>Cálculo de Média</Text>
			<TextInput
				style={styles.textbox}
				placeholder="Digite a primeira nota"
				keyboardType="numeric"
				onChangeText={(nota) => setNota1(nota)}
			/>
			<TextInput
				style={styles.textbox}
				placeholder="Digite a segunda nota"
				keyboardType="numeric"
				onChangeText={(nota) => setNota2(nota)}
			/>
			<TouchableOpacity 
				style={styles.button}
				onPress={calcularMedia}>
					<Text style={styles.buttonText}>Calcular Média</Text>
			</TouchableOpacity>
			{media ? <Text>A média do aluno é {media}</Text> : null}

			<TextInput
				style={styles.textbox}
				placeholder="Digite o nome do aluno"
				keyboardType="default"
				onChangeText={(nome) => setNome(nome)}
			/>
			<TouchableOpacity 
				style={styles.button}
				onPress={registrarMedia}>
					<Text style={styles.buttonText}>Registrar Média</Text>
			</TouchableOpacity>
		</>
	);
}

export default Media;

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