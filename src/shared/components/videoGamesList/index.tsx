import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { IVideoGame } from "../../../pages/videoGames/domain";
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
  return (
    <TouchableOpacity onPress={() => handleClick(data.slug, data.name)}>
      <View style={styles.videoGamesContainer}>
        <Text style={styles.title}>{data.name}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  videoGamesContainer: {
    borderRadius: 16,
    height: 50,
    backgroundColor: StyleVars.bgContentMatch,
    marginBottom: 23,
    position: "relative",
    padding: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 16,
    color: StyleVars.white,
  },
});

export default VideoGamesList;
