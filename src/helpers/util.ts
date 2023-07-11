export const verifyImageExist = (
  img: string,
  defaultImg: "noLogo" | "noAvatar" | "noLeague" = "noLogo"
) => {
  if (img) {
    return {
      uri: img,
    };
  }
  const optionImage = {
    noLogo: require("../../assets/noLogo.png"),
    noLeague: require("../../assets/no-league.png"),
  };

  return optionImage[defaultImg];
};

export const formatDate = (date: string = String(new Date())) => {
  //var daysOfTheWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  var daysOfTheWeek = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"];
  const newDate = new Date(date);
  const time = newDate.toLocaleTimeString("br", {
    timeStyle: "short",
    hour12: false,
    timeZone: "UTC",
  });
  const weekDay = newDate.getDay();
  return `${daysOfTheWeek[weekDay]}, ${time}`;
};

 export const getRouteVideoGame = (slug: string): string => {
   const dataSlugApi = {
     "starcraft-2": "starcraft-2",
     "lol-wild-rift": "lol-wild-rift",
     lol: "lol",
     kog: "kog",
     valorant: "valorant",
     fifa: "fifa",
     "r6-siege": "r6siege",
     "cod-mw": "codmw",
     rl: "rl",
     pubg: "pubg",
     ow: "ow",
     "dota-2": "dota2",
     "cs-go": "csgo",
     "starcraft-brood-war": "starcraft-brood-war",
     "league-of-legends": "lol",
   };
   return dataSlugApi[slug];
 };
