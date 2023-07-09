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
import MatchesList from "../../../common/components/matchesList";
import { StyleVars } from "../../../common/style/vars";
import { RootStackParamListApp } from "../../../routes/stackRoutes";
import { IMatchData } from "../domain";
const dataMock = [
  {
    begin_at: "2023-07-08T22:30:00Z",
    detailed_stats: true,
    draw: false,
    end_at: null,
    forfeit: false,
    game_advantage: null,
    games: [
      {
        begin_at: null,
        complete: false,
        detailed_stats: true,
        end_at: null,
        finished: false,
        forfeit: false,
        id: 108502,
        length: null,
        match_id: 805617,
        position: 1,
        status: "not_started",
        winner: {
          id: null,
          type: "Team",
        },
        winner_type: "Team",
      },
      {
        begin_at: null,
        complete: false,
        detailed_stats: true,
        end_at: null,
        finished: false,
        forfeit: false,
        id: 108503,
        length: null,
        match_id: 805617,
        position: 2,
        status: "not_started",
        winner: {
          id: null,
          type: "Team",
        },
        winner_type: "Team",
      },
      {
        begin_at: null,
        complete: false,
        detailed_stats: true,
        end_at: null,
        finished: false,
        forfeit: false,
        id: 108504,
        length: null,
        match_id: 805617,
        position: 3,
        status: "not_started",
        winner: {
          id: null,
          type: "Team",
        },
        winner_type: "Team",
      },
    ],
    id: 805617,
    league: {
      id: 4471,
      image_url:
        "https://cdn.pandascore.co/images/league/image/4471/600px-FiRe_Logo.png",
      modified_at: "2020-09-20T15:24:10Z",
      name: "FiReLEAGUE",
      slug: "cs-go-fireleague",
      url: "https://firesports.gg/fireleague/",
    },
    league_id: 4471,
    live: {
      opens_at: null,
      supported: false,
      url: null,
    },
    match_type: "best_of",
    modified_at: "2023-07-06T07:26:33Z",
    name: "9z vs Virtus.pro",
    number_of_games: 3,
    opponents: [
      {
        opponent: {
          acronym: null,
          id: 126709,
          image_url:
            "https://cdn.pandascore.co/images/team/image/126709/9996.png",
          location: "AR",
          modified_at: "2023-07-06T07:26:03Z",
          name: "9z",
          slug: "9z",
        },
        type: "Team",
      },
      {
        opponent: {
          acronym: null,
          id: 3288,
          image_url:
            "https://cdn.pandascore.co/images/team/image/3288/600px_virtus.pro_2019.png",
          location: "RU",
          modified_at: "2023-07-06T07:26:04Z",
          name: "Virtus.pro",
          slug: "virtus-pro-75b4744b-43d9-4ebd-a8dc-f1e0f9be69b3",
        },
        type: "Team",
      },
    ],
    original_scheduled_at: "2023-07-08T22:30:00Z",
    rescheduled: false,
    results: [
      {
        score: 0,
        team_id: 126709,
      },
      {
        score: 0,
        team_id: 3288,
      },
    ],
    scheduled_at: "2023-07-08T22:30:00Z",
    serie: {
      begin_at: "2023-07-08T22:30:00Z",
      end_at: "2023-07-09T01:30:00Z",
      full_name: "Battle 2023",
      id: 6086,
      league_id: 4471,
      modified_at: "2023-07-06T07:26:05Z",
      name: "Battle",
      season: null,
      slug: "cs-go-fireleague-battle-2023",
      winner_id: null,
      winner_type: null,
      year: 2023,
    },
    serie_id: 6086,
    slug: "9z-vs-virtus-pro-2023-07-09",
    status: "not_started",
    streams_list: [
      {
        embed_url: "https://player.twitch.tv/?channel=fireleaguetv",
        language: "es",
        main: true,
        official: true,
        raw_url: "https://www.twitch.tv/fireleaguetv",
      },
    ],
    tournament: {
      begin_at: "2023-07-08T22:30:00Z",
      end_at: "2023-07-09T01:30:00Z",
      has_bracket: false,
      id: 10920,
      league_id: 4471,
      live_supported: false,
      modified_at: "2023-07-06T07:26:41Z",
      name: "Playoffs",
      prizepool: null,
      serie_id: 6086,
      slug: "cs-go-fireleague-battle-2023-playoffs",
      tier: "d",
      winner_id: null,
      winner_type: "Team",
    },
    tournament_id: 10920,
    videogame: {
      id: 3,
      name: "CS:GO",
      slug: "cs-go",
    },
    videogame_version: null,
    winner: null,
    winner_id: null,
    winner_type: "Team",
  },
  {
    begin_at: "2023-07-10T19:00:00Z",
    detailed_stats: false,
    draw: false,
    end_at: null,
    forfeit: false,
    game_advantage: null,
    games: [
      {
        begin_at: null,
        complete: false,
        detailed_stats: false,
        end_at: null,
        finished: false,
        forfeit: false,
        id: 108499,
        length: null,
        match_id: 804927,
        position: 1,
        status: "not_started",
        winner: {
          id: null,
          type: "Team",
        },
        winner_type: "Team",
      },
      {
        begin_at: null,
        complete: false,
        detailed_stats: false,
        end_at: null,
        finished: false,
        forfeit: false,
        id: 108500,
        length: null,
        match_id: 804927,
        position: 2,
        status: "not_started",
        winner: {
          id: null,
          type: "Team",
        },
        winner_type: "Team",
      },
      {
        begin_at: null,
        complete: false,
        detailed_stats: false,
        end_at: null,
        finished: false,
        forfeit: false,
        id: 108501,
        length: null,
        match_id: 804927,
        position: 3,
        status: "not_started",
        winner: {
          id: null,
          type: "Team",
        },
        winner_type: "Team",
      },
    ],
    id: 804927,
    league: {
      id: 4432,
      image_url:
        "https://cdn.pandascore.co/images/league/image/4432/900px-La_Liga_Pro_2021.png",
      modified_at: "2021-07-15T09:54:19Z",
      name: "La Liga Pro",
      slug: "cs-go-la-liga",
      url: null,
    },
    league_id: 4432,
    live: {
      opens_at: null,
      supported: false,
      url: null,
    },
    match_type: "best_of",
    modified_at: "2023-07-05T12:09:16Z",
    name: "Upper bracket round 1 match 2: MITOS vs Daotsu Esports",
    number_of_games: 3,
    opponents: [
      {
        opponent: {
          acronym: null,
          id: 133189,
          image_url: null,
          location: "",
          modified_at: "2023-07-05T12:07:22Z",
          name: "MITOS",
          slug: "mitos",
        },
        type: "Team",
      },
      {
        opponent: {
          acronym: null,
          id: 131083,
          image_url:
            "https://cdn.pandascore.co/images/team/image/131083/161px_daotsu_esports_allmode.png",
          location: "BR",
          modified_at: "2023-07-05T12:07:22Z",
          name: "Daotsu Esports",
          slug: "daotsu-esports",
        },
        type: "Team",
      },
    ],
    original_scheduled_at: "2023-07-10T19:00:00Z",
    rescheduled: false,
    results: [
      {
        score: 0,
        team_id: 133189,
      },
      {
        score: 0,
        team_id: 131083,
      },
    ],
    scheduled_at: "2023-07-10T19:00:00Z",
    serie: {
      begin_at: "2023-07-10T19:00:00Z",
      end_at: "2023-07-28T22:00:00Z",
      full_name: "2023",
      id: 6083,
      league_id: 4432,
      modified_at: "2023-07-05T12:09:16Z",
      name: null,
      season: null,
      slug: "cs-go-la-liga-2023",
      winner_id: null,
      winner_type: null,
      year: 2023,
    },
    serie_id: 6083,
    slug: "mitos-vs-daotsu-esports-2023-07-10",
    status: "not_started",
    streams_list: [],
    tournament: {
      begin_at: "2023-07-10T19:00:00Z",
      end_at: "2023-07-28T22:00:00Z",
      has_bracket: true,
      id: 10909,
      league_id: 4432,
      live_supported: false,
      modified_at: "2023-07-05T12:09:16Z",
      name: "Group B",
      prizepool: null,
      serie_id: 6083,
      slug: "cs-go-la-liga-2023-group-b",
      tier: "d",
      winner_id: null,
      winner_type: "Team",
    },
    tournament_id: 10909,
    videogame: {
      id: 3,
      name: "CS:GO",
      slug: "cs-go",
    },
    videogame_version: null,
    winner: null,
    winner_id: null,
    winner_type: "Team",
  },
];
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
