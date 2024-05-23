import React from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';
import SigninButton from '../buttons/SigninButton';

export default function InputTemplate({borderColor='#fff',backgroundColor='#000',placeholder='text',entry=false,onChangeText=()=>null,value='null'}) {
  return (
 
    <View>
      
        <TextInput
        style={[styles.input,{borderColor,backgroundColor}]}
        placeholder={placeholder}
        secureTextEntry={entry}
        onChangeText={onChangeText}
        value={value}
      />
    </View>
    
  );
}

const styles = StyleSheet.create({

  input: {
    width: '100%',
    padding: 10,
    marginVertical: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#fff',
  },

});
