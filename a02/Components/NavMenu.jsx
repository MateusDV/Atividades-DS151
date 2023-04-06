import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

export default function NavMenu(props) {
  return (
    <>
      <TouchableOpacity 
        style={styles.button}
        onPress={() => props.navigate('home')}>
            <Text style={styles.buttonText}>Home</Text>
      </TouchableOpacity>
    </>
  );
}

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