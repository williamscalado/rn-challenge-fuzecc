import { StatusBar } from "react-native";
import Routes from "./src/routes";
import { StyleVars } from "./src/shared/style/vars";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={StyleVars.bg} />
      <Routes />
    </>
  );
}
