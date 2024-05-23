import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { color } from '@/assets/config/color';

export default function ButtonTemplate({ title="hello", Task=()=>null, width = 105, height = 58, backgroundColor = color.primary, textColor = color.black ,opacity=1.00}) {
  return (
    <TouchableOpacity 
      style={[styles.button, { width, height, backgroundColor,opacity}]}
      onPress={Task}
    >
      <Text style={[styles.text, { color: textColor }]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  text: {
    fontSize: 18,
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
});
