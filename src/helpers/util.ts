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
  };

  return optionImage[defaultImg];
};
