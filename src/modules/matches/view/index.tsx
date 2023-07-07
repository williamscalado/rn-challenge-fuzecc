import { FlatList, ListRenderItem, StyleSheet, Text, View } from "react-native";
import { StyleVars } from "../../../common/style/vars";
import { IMatchData } from "../domain";
import MatchContent from "./matchesList";
const dataMock = [
  {
    id: "1",
    data: "",
    firstTeam: "Teste",
    status: "",
    secundTeam: "",
  },
  {
    id: "2",
    data: "",
    firstTeam: "Teste 2",
    status: "",
    secundTeam: "",
  },
];
const MatchesView = () => {
  const renderItem: ListRenderItem<IMatchData> = ({ item }) => (
    <MatchContent data={item} />
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Partidas</Text>
      <View style={styles.matchesContainer}>
        <FlatList data={dataMock} renderItem={renderItem} />
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
  },
});

export default MatchesView;
