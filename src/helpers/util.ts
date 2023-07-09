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
