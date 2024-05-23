import React from 'react'
import { TouchableOpacity,StyleSheet,Text } from 'react-native'

export default function SignupButton({color=null,fontSize=null,text=null,onPress=null}) {
  return (
    <TouchableOpacity onPress={onPress}>
         <Text style={[styles.signupLink,{color,fontSize}]}>{text}</Text>
    </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    signupLink: {
        color: '#6c3',
        fontSize: 14,
      },
})
