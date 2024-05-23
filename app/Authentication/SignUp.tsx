import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { color } from '@/assets/config/color';
import SignupButton from '@/components/buttons/SignupButton';
import InputTemplate from '@/components/inputs/InputTemplate';
import SigninButton from '@/components/buttons/SigninButton';
import DropdownMenu from '@/components/buttons/dropDown';

export default function SignUp() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState(null);

  const handleChangeUsername = (text) => {
    setUsername(text);
  };

  const handleChangeEmail = (text) => {
    setEmail(text);
  };

  const handleChangePassword = (text) => {
    setPassword(text);
  };

  const handleRoleChange = (option) => {
    setSelectedRole(option);
  };

  const handleSignUp = () => {
    // Handle sign-up logic here
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Selected Role:', selectedRole);
  };

  return (
    <View style={styles.container}>
      <InputTemplate
        placeholder="Username"
        entry={false}
        onChangeText={handleChangeUsername}
        value={username}
        borderColor={color.gray}
        backgroundColor={color.white}
      />
      <InputTemplate
        placeholder="Email"
        entry={false}
        onChangeText={handleChangeEmail}
        value={email}
        borderColor={color.gray}
        backgroundColor={color.white}
      />
      <InputTemplate
        placeholder="Password"
        entry={true}
        onChangeText={handleChangePassword}
        value={password}
        borderColor={color.gray}
        backgroundColor={color.white}
      />
      <DropdownMenu
        options={['Farmer', 'Consumer', 'Admin']}
        backgroundColor={color.white}
        borderColor={color.gray}
        buttonTextcolor={color.black}
        selectedOptionBackgroundColor="#f0f0f0"
        selectedOptionTextColor="#007BFF"
        onSelect={handleRoleChange}
      />
      <SigninButton 
        inputtext="Sign Up"
        onPress={handleSignUp}
        backgroundColor={color.lightgreen}
        width={100}
        color={color.black}
        fontSize={16}
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
