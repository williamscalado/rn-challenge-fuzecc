import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import { verifyImageExist } from "../../../helpers/util";
import { Opponent } from "../../../pages/matches/domain";
import { StyleVars } from "../../style/vars";

export type OpponentsProps = {
  data: Opponent[];
};

const OpponentsList = ({ data }: OpponentsProps) => {
  console.log(data);

  return (
    <View style={styles.matchDataContent}>
      <View style={styles.containerInfoTeam}>
        <Image
          style={styles.teamImage}
          source={verifyImageExist(data[0]?.opponent?.image_url)}
        />
        <Text style={styles.teamName}>{data[0]?.opponent?.name}</Text>
      </View>
      <View>
        <Text style={styles.textVs}>vs</Text>
      </View>
      <View style={styles.containerInfoTeam}>
        <Image
          style={styles.teamImage}
          source={verifyImageExist(data[1]?.opponent?.image_url)}
        />
        <Text style={styles.teamName}>{data[1]?.opponent?.name} </Text>
      </View>
    </View>
  );
};

export default OpponentsList;

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
  teamName: {
    alignSelf: "center",
    marginTop: 10,
    fontSize: 10,
    fontWeight: "400",
    color: StyleVars.white,
    alignItems: "center",
  },
});
