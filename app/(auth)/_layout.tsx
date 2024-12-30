import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="welcome"
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="sign-up"
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />

      <Stack.Screen
        name="sign-in"
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default Layout;
