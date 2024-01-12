import useStore from "@/zustand";
import { Redirect, Stack } from "expo-router";
import { useEffect } from "react";
import { Text } from "react-native";
import auth from "@react-native-firebase/auth";

export default function AppLayout() {
  const userData = useStore((state) => state.user);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      userData.setIsUserLoggedIn(!!user);
      userData.setIsUserLoaded();
    });

    return () => unsubscribe();
  }, []);

  // You can keep the splash screen open, or render a loading screen like we do here.
  if (!userData.isUserLoaded) {
    return <Text>Loading...</Text>;
  }

  // Only require authentication within the (app) group's layout as users
  // need to be able to access the (auth) group and sign in again.
  if (!userData.isUserLoggedIn) {
    // On web, static rendering will stop here as the user is not authenticated
    // in the headless Node process that the pages are rendered in.
    return <Redirect href="/login" />;
  }

  // This layout can be deferred because it's not the root layout.
  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f4511e",
        },
        headerTintColor: "#fff",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        headerTitle: `Welcome to cookbook`,
      }}
    />
  );
}
