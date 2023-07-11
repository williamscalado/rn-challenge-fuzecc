import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import MatchesView from "../pages/matches/view";
import ScreenB from "../pages/screenB";
import VideoGameView from "../pages/videoGames/view";
import { StyleVars } from "../shared/style/vars";
export type RootStackParamListApp = {
  VideoGames: undefined;
  Match:
    | {
        videoGameSlug: string;
        videoGameName?: string;
      }
    | undefined;
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
        name="VideoGames"
        component={VideoGameView}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Match"
        component={MatchesView}
        options={{
          title: "Partidas",
          headerTintColor: StyleVars.white,
          headerStyle: {
            backgroundColor: StyleVars.bg,
          },
        }}
      />
      <Stack.Screen name="ScreenB" component={ScreenB} />
    </Stack.Navigator>
  );
};

export default StackRoutes;
