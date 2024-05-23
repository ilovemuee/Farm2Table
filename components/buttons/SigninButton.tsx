import React from 'react'
import { TouchableOpacity,Text,StyleSheet } from 'react-native'
export default function SigninButton({inputtext='None',backgroundColor='white',width=20,height=20,color='green',fontSize=16,onPress=()=>null}) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.signinButton,{backgroundColor,width,height,}]} >
        <Text style={[styles.signinButtonText,{color,fontSize}]}>{inputtext}</Text>
      </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    signinButton: {
        backgroundColor: '#6c3',
       
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
        marginVertical: 20,
      },
      signinButtonText: {
        color: '#fff',
        fontSize: 16,
      },
})

