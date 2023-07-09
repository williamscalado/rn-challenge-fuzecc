import React from "react";
import {
  ActivityIndicator,
  Alert,
  FlatList,
  ListRenderItem,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { HttpAdapter } from "../../../adapters/axios";

import VideoGamesList from "../../../shared/components/videoGamesList";
import { StyleVars } from "../../../shared/style/vars";
import { IVideoGame } from "../domain";

const VideoGameView = () => {
  const [videoGamesData, setVideoGamesData] = React.useState<IVideoGame[]>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const renderItem: ListRenderItem<IVideoGame> = ({ item }) => {
    return <VideoGamesList data={item} />;
  };

  const getVideoGames = React.useCallback(async () => {
    try {
      setLoading(true);
      const result = await HttpAdapter.fetch({
        url: "videogames?page=1&per_page=20",
        method: "GET",
      });
      // result.sort((a: IVideoGame, b: IMatchData) => {
      //   return Number(new Date(a.begin_at)) - Number(new Date(b.begin_at));
      // });

      setVideoGamesData(result);
    } catch (error) {
      Alert.alert("Ops!", "We had a problem", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Try again!", onPress: () => getVideoGames() },
      ]);

      setLoading(false);
      setVideoGamesData([]);
    } finally {
      setLoading(false);
    }
  }, []);
  React.useEffect(() => {
    getVideoGames();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Escolha o jogo</Text>
      <View style={styles.videoGamesContainer}>
        {loading ? (
          <SafeAreaView style={styles.indicatorWrapper}>
            <ActivityIndicator />
          </SafeAreaView>
        ) : (
          <FlatList
            data={videoGamesData}
            renderItem={renderItem}
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleVars.bg,
    height: "100%",
    padding: 24,
    paddingBottom: 0,
  },
  indicatorWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 32,
    color: StyleVars.white,
    fontFamily: StyleVars.primaryFont,
    marginBottom: 24,
    fontWeight: "500",
  },
  videoGamesContainer: {
    flex: 1,
  },
});

export default VideoGameView;
