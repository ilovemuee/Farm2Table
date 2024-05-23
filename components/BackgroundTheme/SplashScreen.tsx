import React, { useEffect } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import { color } from '@/assets/config/color';
import { useRouter } from 'expo-router';
import Index from '@/app';

interface SplashScreenProps {
  id: string; // Specify the type of the id prop as string
  condition: boolean; // Add a condition prop to control navigation
}

export default function SplashScreen({ id, condition }: SplashScreenProps) {
  const router = useRouter();

  useEffect(() => {
    // if user has given all the required permissions 
    if (condition) {
      const timer = setTimeout(() => {
        router.push(id);
      }, 3000);

      return () => clearTimeout(timer);
    }
    else{
      // code for asking Permissions from user
    }
  }, [condition, id, router]);

  return (
    <View style={styles.LaunchBackground}>
      <Image
        style={styles.ImageStyle}
        source={require("../../assets/logos/Iconseedling.png")}
        resizeMode="contain"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  LaunchBackground: {
    backgroundColor: color.primary,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  ImageStyle: {
    width: '50%', 
    height: '50%', 
  },
});
