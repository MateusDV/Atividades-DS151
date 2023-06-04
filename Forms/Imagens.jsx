import React from 'react';
import { View, Image, FlatList, StyleSheet } from 'react-native';

const imageList = [
	{
		id: 1,
		path: require('../assets/images/11.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
	{
		id: 2,
		path: require('../assets/images/12.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
	{
		id: 3,
		path: require('../assets/images/13.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
	{
		id: 4,
		path: require('../assets/images/14.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
	{
		id: 5,
		path: require('../assets/images/15.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
	{
		id: 6,
		path: require('../assets/images/16.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
	{
		id: 7,
		path: require('../assets/images/17.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
	{
		id: 8,
		path: require('../assets/images/18.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
	{
		id: 9,
		path: require('../assets/images/19.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
	{
		id: 10,
		path: require('../assets/images/20.jpg'),
		width: Math.floor(Math.random() * 201) + 100,
		height: Math.floor(Math.random() * 201) + 100,
	},
];

const Imagens = ({ nav, auth }) => {

	if(!auth()){
		nav("login");
	}

	return (
		<View style={styles.container}>
			<FlatList
				data={imageList}
				renderItem={({ item }) => <Imagem path={item.path} width={item.width} height={item.height} />}
				keyExtractor={item => item.id.toString()}
			/>
		</View>
	)
}

const Imagem = ({ path, width, height }) => (
	<Image
		source={path}
		style={{ width, height }}
	/>
);

export default Imagens;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginTop: 50,
	},
	item: {
		backgroundColor: '#f9c2ff',
		padding: 20,
		marginVertical: 8,
		marginHorizontal: 16,
	},
	title: {
		fontSize: 32,
	},
});