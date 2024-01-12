import auth from "@react-native-firebase/auth";
import { GoogleSignin } from "@react-native-google-signin/google-signin";
import React from "react";
import { Button } from "react-native";

async function onGoogleButtonPress() {
  try {
    GoogleSignin.configure({
      webClientId: process.env.EXPO_PUBLIC_CLIENT_ID,
    });
    // Check if your device supports Google Play
    await GoogleSignin.hasPlayServices();
    // Get the users ID token
    const { idToken } = await GoogleSignin.signIn();

    // Create a Google credential with the token
    const googleCredential = auth.GoogleAuthProvider.credential(idToken);

    // Sign-in the user with the credential
    return auth().signInWithCredential(googleCredential);
  } catch (err) {
    console.log(err);
  }
}

function GoogleSignIn({
  onSuccessCallback,
}: {
  onSuccessCallback: () => void;
}) {
  return (
    <Button
      title="Google Sign-In"
      onPress={() => onGoogleButtonPress().then(onSuccessCallback)}
    />
  );
}

export default GoogleSignIn;
