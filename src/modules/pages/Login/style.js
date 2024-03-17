import { StyleSheet } from "react-native";
import {
  darkBg,
  darkBorder,
  lightBorder,
  lightColor,
  darkColor,
  lightBg,
} from "../../../../constant";
const loinStyle = (theme, dimension) => {
  const { orientation } = dimension;
  const isDark = theme == "dark";
//   console.log(isDark);
  const borderColor = isDark ? darkBorder : lightBorder;
  const color = isDark ? darkColor : lightColor;
  const backgroundColor = isDark ? darkBg : lightBg;
  return StyleSheet.create({
    input: {
      borderColor,
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
    },
    title: {
      color,
      textAlign: "center",
      fontSize: 20,
      fontWeight: "500",
    },
    container: {
      paddingTop:orientation ? "0%" : "10%",
      height: "100%",
      gap: orientation ? 0 : 70,
    },
    addUserContainer: {
      textAlign: "center",
      gap: 10,
    },
    btn: {
      alignItems: "center",
      width: "100%",
      borderRadius: 10,
      padding: 10,
    },
  });
};

export default loinStyle;
