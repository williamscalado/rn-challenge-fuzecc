import { Image, StyleSheet, Text, View } from "react-native";
import { StyleVars } from "../../../common/style/vars";
import { IMatchData } from "../domain";

const MatchContent = ({ data }: { data: IMatchData }) => {
  return (
    <View style={styles.matchContainer}>
      <View style={styles.dataContainer}>
        <View style={styles.dataContent}>
          <Text style={styles.dataText}>Agora</Text>
        </View>
      </View>

      <View>
        <View style={styles.matchDataContent}>
          <View>
            <Image
              style={styles.teamImage}
              source={require("../../../../assets/team.png")}
            />
            <Text style={styles.teamName}>Time 1</Text>
          </View>
          <View>
            <Text style={styles.textVs}>vs</Text>
          </View>
          <View>
            <Image
              style={styles.teamImage}
              source={require("../../../../assets/team.png")}
            />
            <Text style={styles.teamName}>Time 2</Text>
          </View>
        </View>
      </View>

      <View style={styles.matchFooterContainer}>
        <View style={styles.matchFooterContent}>
          <Image
            style={styles.leagueImage}
            source={require("../../../../assets/no-league.png")}
          />
          <Text style={styles.leagueText}>Footer</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  matchContainer: {
    height: 176,
    borderRadius: 16,
    backgroundColor: StyleVars.bgContentMatch,
    marginBottom: 23,
    position: "relative",
  },
  dataContainer: {
    width: "100%",
  },
  dataContent: {
    padding: 8,
    height: 25,
    backgroundColor: "red",
    alignSelf: "flex-end",
    borderTopEndRadius: 16,
    borderBottomLeftRadius: 16,
  },
  dataText: {
    fontFamily: StyleVars.primaryFont,
    color: StyleVars.white,
    fontWeight: "700",
    fontSize: 8,
    textTransform: "uppercase",
  },
  matchDataContainer: {},
  matchDataContent: {
    minHeight: 119,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  textVs: {
    fontFamily: StyleVars.primaryFont,
    marginLeft: 20,
    marginRight: 20,
    fontSize: 12,
    color: "rgba(255, 255, 255, 0.50)",
    fontWeight: "400",
  },
  teamImage: {
    maxHeight: 60,
  },

  matchDataText: {},
  matchFooterContainer: {
    borderTopWidth: 0.5,
    borderTopColor: StyleVars.gray100,
    height: 32,
    width: "100%",
    padding: 8,
    paddingLeft: 16,
  },
  matchFooterContent: {
    alignItems: "center",
    flexDirection: "row",
  },
  teamName: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 10,
    fontWeight: "400",
    color: StyleVars.white,
    alignItems: "center",
  },
  leagueImage: {
    maxHeight: 16,
    marginRight: 8,
  },
  leagueText: {
    color: StyleVars.white,
    fontSize: 8,
  },
});

export default MatchContent;
