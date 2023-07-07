import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "react-native";
import { StyleVars } from "./src/common/style/vars";
import MatchesView from "./src/modules/matches/view";

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar
        backgroundColor={StyleVars.bg}
        animated={true}
        showHideTransition="slide"
      />
      <MatchesView />
    </NavigationContainer>
  );
}
