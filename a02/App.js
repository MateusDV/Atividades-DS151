import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import MyForm from './Components/form';

export default function App() {
  return (
    <View style={styles.container}>
      <MyForm />
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

