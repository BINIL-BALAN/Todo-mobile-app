import { StyleSheet } from "react-native";
import { darkColor,lightColor,darkBorder,lightBorder,darkBg,lightBg } from "../../../../constant";
const homestyle = (theme) => {
  const isDark = theme == "dark";
  const borderColor = isDark ? darkBorder : lightBorder;
  const color = isDark ? lightColor :  darkColor;
  const backgroundColor = isDark ? darkBg : lightBg;
  return StyleSheet.create({
    container: {
      height: "100%",
      width: "100%",
      paddingHorizontal: 10,
    },
    input: {
      borderColor,
      borderWidth: 1,
      borderRadius: 5,
      padding: 5,
      color:isDark ? "black" :"white"
    },
    inputArea: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      gap: 10,
    },
    text: {
      color,
    },
    addBtn: {
      width: "100%",
      flexDirection:"row",
      alignItems:"center",
      elevation: 8,
      backgroundColor,
      borderRadius: 10,
      paddingVertical: 10,
      paddingHorizontal: 12,
      justifyContent:"center",
      
    },
    addBtnText:{
      fontSize: 14,
      fontWeight: "bold",
      alignSelf: "center",
      textTransform: "uppercase"
    },
    taskListConainer:{
      marginTop:"5%",
      paddingBottom:2,
      maxHeight:"74%"
    }
  });
};

export default homestyle;
