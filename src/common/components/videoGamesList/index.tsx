import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IVideoGame } from "../../../screens/videoGames/domain";
import { StyleVars } from "../../style/vars";

interface IProps {
  data: IVideoGame;
}
const VideoGamesList = ({ data }: IProps) => {
  const navigation = useNavigation();
  const handleClick = (id: string, name: string = null) => {
    navigation.navigate("Match", {
      videoGameSlug: id,
      videoGameName: name,
    });
  };
  console.log("data", data);

  return (
    <TouchableOpacity onPress={() => handleClick(data.slug, data.name)}>
      <View style={styles.matchContainer}>
        <View>
          <Image source={require("../../../../assets/noLogo.png")} />
        </View>
        <Text>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  matchContainer: {
    borderRadius: 16,
    backgroundColor: StyleVars.bgContentMatch,
    marginBottom: 23,
    position: "relative",
  },
});

export default VideoGamesList;
