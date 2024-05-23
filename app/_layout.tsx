import { Stack } from "expo-router";

export default function RootLayout() {
  return (

    <Stack>
      <Stack.Screen name="index" options={{headerShown:false}} />
      <Stack.Screen name="users/FrontPage" options={{headerShown:false,gestureEnabled: false}} />
      <Stack.Screen name="Authentication/SignIn" options={{headerShown:false,gestureEnabled: false}} />
      <Stack.Screen name="Authentication/SignUp" options={{headerShown:false,gestureEnabled: false}} />


    </Stack>
  );
}
