import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import StackRoutes from "./stackRoutes";

const Routes = () => {
  return (
    <NavigationContainer>
      <StackRoutes />
    </NavigationContainer>
  );
};

export default Routes;
