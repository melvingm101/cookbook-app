import { Text } from "react-native";
import GoogleSignIn from "@/components/GoogleButton";
import { router } from "expo-router";
import { useEffect } from "react";
import useStore from "@/zustand";
import auth from "@react-native-firebase/auth";

const Login = () => {
  const userData = useStore((state) => state.user);

  useEffect(() => {
    const unsubscribe = auth().onAuthStateChanged((user) => {
      userData.setIsUserLoggedIn(!!user);
      userData.setIsUserLoaded();
      if (user) {
        router.replace("/");
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <Text>Login to cookbook</Text>
      <Text>Login to cookbook</Text>
      <Text>Login to cookbook</Text>
      <Text>Login to cookbook</Text>
      <Text>Login to cookbook</Text>
      <Text>Login to cookbook</Text>
      <Text>Login to cookbook</Text>
      <GoogleSignIn onSuccessCallback={() => console.log("DONE")} />
    </>
  );
};

export default Login;
