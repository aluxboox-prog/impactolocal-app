import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Button({ onPress, title, loading, variant = 'primary' }) {
  return (
    <TouchableOpacity 
      style={[styles.button, styles[variant]]}
      onPress={onPress}
      disabled={loading}
    >
      <Text style={[styles.text, styles[variant + 'Text']]}>
        {loading ? 'Cargando...' : title}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 10,
  },
  primary: {
    backgroundColor: '#2D7F5E',
  },
  secondary: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: '#2D7F5E',
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  primaryText: {
    color: 'white',
  },
  secondaryText: {
    color: '#2D7F5E',
  },
});
