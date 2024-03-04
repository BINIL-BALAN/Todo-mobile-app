import { StyleSheet } from "react-native";
import {darkBg,lightBg,lightColor,darkColor,lightBorder,darkBorder} from '../../../../constant'
const navBarStyle = (style)=>{
  const {theme,dimension} = style
  const isDark = theme == "light"
  console.log(isDark);
   return StyleSheet.create({
    title: {
      color:isDark ? darkColor : lightColor,
      fontWeight: "bold",
      fontSize: 15,
    },
    navbar: {
      width: "100%",
      height:dimension.orientation ? "10%" :"7%" , // true if the orientation is landscape
      backgroundColor:isDark ? lightBg : darkBg,
      display: "flex",
      flexDirection:"row",
      justifyContent: "space-between",
      alignItems:"center",
      // alignContent:"space-between",
      paddingHorizontal: 15,
    },
    modeBtn:{
      borderWidth:1,
      borderRadius:5,
      paddingVertical:3,
      paddingHorizontal:10,
      borderColor:isDark ? darkBorder : lightBorder
    },
    modeBtnFont:{
        color:isDark ? darkColor : lightBorder
    }
  });
}

export default navBarStyle;
