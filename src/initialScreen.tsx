import { Image, StyleSheet, View } from "react-native";
import { StyleVars } from "./common/style/vars";

export default function InitialScreen() {
  return (
    <View style={styles.container}>
      <Image style={styles.logo} source={require("../assets/gamer-logo.png")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: "flex-start",
    alignContent: "flex-start",
    alignItems: "baseline",
    backgroundColor: StyleVars.bg,
    height: "100%",
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 100,
    height: 100,
  },
  text01: {
    color: StyleVars.black,
  },
});
