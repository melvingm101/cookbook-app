import { signInWithRedirect } from "firebase/auth";
import { auth, provider } from "../firebase";

const LoginScreen = () => {
  return (
    <>
      <h3>Login to cookbook</h3>
      <button onClick={() => signInWithRedirect(auth, provider)}>
        Login with Google
      </button>
    </>
  );
};

export default LoginScreen;
