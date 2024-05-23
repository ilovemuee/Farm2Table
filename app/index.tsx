import React from 'react';
import { StyleSheet, View, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen'; 
import { color } from '@/assets/config/color';
import SplashScreen from '@/components/BackgroundTheme/SplashScreen';
import { useRouter } from 'expo-router'; 

export default function Index() {
  const router = useRouter(); 
  return (
    
      <SplashScreen id={"users/FrontPage"} condition={true}/>
      
    
  );
}

const styles = StyleSheet.create({
  LaunchBackground: {
    backgroundColor: color.primary,
    flex: 1,
  },
  buttonContainer: {
    margin: 20, 
    justifyContent: 'center',
    alignItems: 'center',
  }
});
