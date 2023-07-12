import { NativeStackScreenProps } from "@react-navigation/native-stack";
import React from "react";
import {
  ActivityIndicator,
  Alert,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { HttpAdapter } from "../../../adapters/axios";
import { formatDate } from "../../../helpers/util";
import { RootStackParamListApp } from "../../../routes/stackRoutes";
import OpponentsList from "../../../shared/components/opponents";
import { StyleVars } from "../../../shared/style/vars";
import { IMatchDetails } from "../domain";

type Props = NativeStackScreenProps<RootStackParamListApp, "MatchDetailsView">;
const MatchDetailsView = ({ navigation, route }: Props) => {
  const [data, setData] = React.useState<IMatchDetails>(null);
  const [loading, setLoading] = React.useState<boolean>(false);
  const { matchId, videoGameSlug } = route.params;
  console.log(matchId);
  console.log(videoGameSlug);
  const getMatchBYId = React.useCallback(async () => {
    try {
      setLoading(true);
      const url = `/matches/${matchId}`;
      const result: IMatchDetails = await HttpAdapter.fetch({
        url,
        method: "GET",
      });

      setData(result);
    } catch (error) {
      Alert.alert("Ops!", "We had a problem", [
        {
          text: "Cancel",
          style: "cancel",
        },
        { text: "Try again!", onPress: () => getMatchBYId() },
      ]);

      setData(null);
    } finally {
      setLoading(false);
    }
  }, [setData, setLoading]);

  React.useEffect(() => {
    getMatchBYId();
  }, [getMatchBYId]);
  if (data) {
    navigation.setOptions({
      title: `${data?.league?.name} - ${data?.serie?.full_name}`,
    });
  }
  console.log("data", data);

  return (
    <View style={styles.container}>
      {loading ? (
        <SafeAreaView style={styles.indicatorWrapper}>
          <ActivityIndicator />
        </SafeAreaView>
      ) : (
        <View>
          {data && (
            <View>
              <OpponentsList data={data?.opponents} />
              <Text style={styles.textTime}>{formatDate(data.begin_at)}</Text>
            </View>
          )}
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: StyleVars.bg,
    flex: 1,
    padding: 24,
    paddingBottom: 0,
  },
  indicatorWrapper: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  textTime: {
    color: StyleVars.white,
    alignItems: "center",
    alignSelf: "center",
    marginTop: 10,
    marginBottom: 10,
  },
});

export default MatchDetailsView;
