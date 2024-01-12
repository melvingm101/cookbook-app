import { Text } from "react-native";
import Button from "@/components/Button";
import auth from "@react-native-firebase/auth";

const Home = () => {
  return (
    <>
      <Text>Home {auth().currentUser?.displayName}</Text>
      <Text>Home {auth().currentUser?.displayName}</Text>
      <Text>Home {auth().currentUser?.displayName}</Text>
      <Text>Home {auth().currentUser?.displayName}</Text>
      <Text>Home {auth().currentUser?.displayName}</Text>
      <Text>Home {auth().currentUser?.displayName}</Text>
      <Button title="Logout" onPress={() => auth().signOut()} />
    </>
  );
};

export default Home;
