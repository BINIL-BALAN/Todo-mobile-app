import { StyleSheet } from "react-native";
import {
  darkBg,
  lightBg,
  lightColor,
  darkColor,
  lightBorder,
  darkBorder,
} from "../../../../constant";
const navBarStyle = (style) => {
  const { theme, dimension } = style;
  const isDark = theme == "light";
  return StyleSheet.create({
    title: {
      color: isDark ? lightColor : darkColor,
      fontWeight: "bold",
      fontSize: 20,
    },
    navbar: {
      width: "100%",
      height: dimension.orientation ? "10%" : "7%", // true if the orientation is landscape
      backgroundColor: isDark ? darkBg : lightBg,
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      // alignContent:"space-between",
      paddingHorizontal: 15,
    },
    modeBtn: {
      // borderWidth:1,
      // borderRadius:5,
      // paddingVertical:3,
      paddingHorizontal: 10,
      borderColor: isDark ? lightBorder : darkBorder,
    },
    modeBtnFont: {
      color: isDark ? lightBorder : darkColor,
    },
    detailsContainer: {
      justifyContent: "center",
      borderLeftWidth: 1,
      paddingLeft: 6,
      borderLeftColor:  isDark ? lightBorder : darkBorder,
    },
  });
};

export default navBarStyle;
