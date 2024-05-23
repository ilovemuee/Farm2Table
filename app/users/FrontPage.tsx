import { color } from '@/assets/config/color';
import ButtonTemplate from '@/components/buttons/ButtonTemplate';
import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';
const router = useRouter();
const Task = () => (
  router.push('../Authentication/SignIn') 
);
function FrontPage() {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.title}>Farm2Table</Text>
        <Text style={styles.subtitle}>Directly buy fresh Produce from local Farmers</Text>
      </View>
      
      <Image 
        source={require('../../assets/images/FrontPageImage.png')} 
        resizeMode='contain' 
        style={styles.image}
      />
      <ButtonTemplate title='Explore' Task={() => null} width={'90%'} style={styles.button} />
      <ButtonTemplate title='Sign in' Task={Task} width={'90%'} backgroundColor={color.green} style={styles.button} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: color.white,
    padding: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginBottom: 30, // Increased margin between text and image
  },
  title: {
    paddingTop:15,
    paddingBottom:5, 
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 20,
    textAlign: 'center',
  },
  image: {
    width: '90%', // Increased width of the image
    height: '50%', // Increased height of the image
    marginBottom: 30, // Increased margin between image and buttons
  },
  button: {
    marginBottom: 20, // Increased margin between buttons
  },
});

export default FrontPage;
