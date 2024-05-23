// Import necessary modules/components
import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { color } from '@/assets/config/color';
import { app,auth } from '@/components/FireBase/firebase';
import SigninButton from '@/components/buttons/SigninButton';
import SignupButton from '@/components/buttons/SignupButton';
import InputTemplate from '@/components/inputs/InputTemplate';
import { useRouter } from 'expo-router';


import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';


export default function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const router = useRouter();

  const NavigateSignUp = () => {
    router.push('../Authentication/SignUp');
  };
  const signIn = async (email, password) => {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user
      
      console.log("User signed in:", user.email);
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };
  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const handleButtonClick = () => {
    // Call signIn function with email and password
    signIn(email, password);
  };

  return (
    <View style={styles.container}>
      <InputTemplate
        placeholder="Email"
        entry={false}
        onChangeText={handleChangeEmail} // Remove parentheses ()
        value={email}
        borderColor={color.gray}
        backgroundColor={color.white}
      />
      <InputTemplate
        placeholder="Password"
        entry={true}
        onChangeText={handleChangePassword} // Remove parentheses ()
        value={password}
        borderColor={color.gray}
        backgroundColor={color.white}
      />
      <SigninButton
        inputtext="Sign In"
        backgroundColor={color.lightgreen}
        height={50}
        width={100}
        onPress={handleButtonClick} 
        color={color.white}
        fontSize={16}
        borderRadius={5}
      />
      <SignupButton
        color={color.lightgreen}
        fontSize={14}
        onPress={NavigateSignUp}
        text="Don't have an account? Sign up"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
});
