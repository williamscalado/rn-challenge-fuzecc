import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MatchesView from "../screens/matches/view";
import ScreenB from "../screens/screenB";
export type RootStackParamListApp = {
  Match: undefined;
  ScreenB:
    | {
        matchId: number;
      }
    | undefined;
};
const Stack = createNativeStackNavigator<RootStackParamListApp>();
const StackRoutes = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Match"
        component={MatchesView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
