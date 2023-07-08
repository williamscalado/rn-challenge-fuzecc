import { StatusBar } from "react-native";
import { StyleVars } from "./src/common/style/vars";
import Routes from "./src/routes";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor={StyleVars.bg} />
      <Routes />
    </>
  );
}
