import { Stack } from "expo-router";

const Layout = () => {
  return (
    <Stack>
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
};

export default Layout;
