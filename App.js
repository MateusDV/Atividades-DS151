import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Media from './Forms/Media';
import IMC from './Forms/IMC';
import Home from './Forms/Home';
import Paises from './Forms/Paises'
import Alunos from './Forms/Alunos';
import NavMenu from './Components/NavMenu';

import Imagens from './Forms/Imagens';
import LoginScreen from './Forms/LoginScreen';

export default function App() {
	const [currentScreen, setCurrentScreen] = useState('home');
	const [userIsAuthenticated, setUserIsAuthenticated] = useState(false);

	const navigate = (screen) => {
		setCurrentScreen(screen);
	};

	const authenticate = (isAuthenticated) => {
		setUserIsAuthenticated(isAuthenticated);
	};

	const checkAuthentication = () => {
		return userIsAuthenticated;
	}

	return (
		<View style={styles.container}>
			<NavMenu navigate={navigate} />
			{currentScreen === 'home' ? <Home navigate={navigate} /> : null}
			{currentScreen === 'media' ? <Media /> : null}
			{currentScreen === 'imc' ? <IMC /> : null}
			{currentScreen === 'imagens' ? <Imagens nav={navigate} auth={checkAuthentication} /> : null}
			{currentScreen === 'paises' ? <Paises /> : null}
			{currentScreen === 'login' ? <LoginScreen authenticate={authenticate} navigate={navigate} /> : null}
			{currentScreen === 'alunos' ? <Alunos /> : null}
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

