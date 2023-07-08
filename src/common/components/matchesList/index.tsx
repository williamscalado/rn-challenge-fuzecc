import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { verifyImageExist } from "../../../helpers/util";
import { IMatchData } from "../../../screens/matches/domain";
import { StyleVars } from "../../style/vars";

interface IProps {
  data: IMatchData;
}
const MatchesList = ({ data }: IProps) => {
  const navigation = useNavigation();
  const handleClick = (id: number) => {
    navigation.navigate("ScreenB", {
      matchId: id,
    });
  };

  return (
    <TouchableOpacity onPress={() => handleClick(data.id)}>
      <View style={styles.matchContainer}>
        <View style={styles.dataContainer}>
          <View style={styles.dataContent}>
            <Text style={styles.dataText}>Agora</Text>
          </View>
        </View>

        <View>
          <View style={styles.matchDataContent}>
            <View style={styles.containerInfoTeam}>
              <Image
                style={styles.teamImage}
                source={verifyImageExist(data.opponents[0].opponent.image_url)}
              />
              <Text style={styles.teamName}>
                {data?.opponents[0]?.opponent.name}
              </Text>
            </View>
            <View>
              <Text style={styles.textVs}>vs</Text>
            </View>
            <View style={styles.containerInfoTeam}>
              <Image
                style={styles.teamImage}
                source={verifyImageExist(
                  data?.opponents[1]?.opponent.image_url
                )}
              />
              <Text style={styles.teamName}>
                {data?.opponents[1]?.opponent.name}
              </Text>
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
    </TouchableOpacity>
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
  containerInfoTeam: {
    justifyContent: "center",
    alignItems: "center",
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
    width: 60,
    height: 60,
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

export default MatchesList;
