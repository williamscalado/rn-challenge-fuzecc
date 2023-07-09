import { NativeStackScreenProps } from "@react-navigation/native-stack";
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

import { RootStackParamListApp } from "../../../routes/stackRoutes";
import MatchesList from "../../../shared/components/matchesList";
import { StyleVars } from "../../../shared/style/vars";
import { IMatchData } from "../domain";

type Props = NativeStackScreenProps<RootStackParamListApp, "Match">;
const MatchesView = ({ route }: Props) => {
  const [matchesData, setMatchesData] = React.useState<IMatchData[]>();
  const [loading, setLoading] = React.useState<boolean>(false);
  const renderItem: ListRenderItem<IMatchData> = ({ item }) => {
    return <MatchesList data={item} />;
  };

  const getMatches = React.useCallback(async () => {
    try {
      setLoading(true);
      const result = await HttpAdapter.fetch({
        url: `/${
          route.params.videoGameSlug == "cs-go"
            ? "csgo"
            : route.params.videoGameSlug
        }/matches?page[size]=20&page[number]=1`,
        method: "GET",
      });
      result.sort((a: IMatchData, b: IMatchData) => {
        return Number(new Date(a.begin_at)) - Number(new Date(b.begin_at));
      });

      setMatchesData(result);
    } catch (error) {
      Alert.alert("Ops!", "We had a problem", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Try again!", onPress: () => getMatches() },
      ]);

      setLoading(false);
      setMatchesData([]);
    } finally {
      setLoading(false);
    }
  }, []);
  React.useEffect(() => {
    getMatches();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Partidas {route.params.videoGameName} - {route.params.videoGameSlug}
      </Text>

      <View style={styles.matchesContainer}>
        {loading ? (
          <SafeAreaView style={styles.indicatorWrapper}>
            <ActivityIndicator />
          </SafeAreaView>
        ) : (
          <FlatList
            data={matchesData}
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
  matchesContainer: {
    width: "100%",
    height: "100%",
    flex: 1,
  },
});

export default MatchesView;
