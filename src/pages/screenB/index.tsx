import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import { Text, View } from "react-native";
import { RootStackParamListApp } from "../../routes/stackRoutes";

type Props = NativeStackScreenProps<RootStackParamListApp, "ScreenB">;

const ScreenB = ({ route }: Props) => {
  return (
    <View>
      <Text>index component = {route.params.matchId}</Text>
    </View>
  );
};

export default ScreenB;
