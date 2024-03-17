import { StyleSheet } from "react-native";
import {darkBg,lightBg,lightColor,darkColor,lightBorder,darkBorder} from '../../../../constant'

const taskListStyle = (style)=>{
    const {theme,dimension} = style
    const isDark = theme == "light"
     return StyleSheet.create({
        container: {
            flex: 1,
            backgroundColor: darkBorder,
          },
          mainCardView: {
            height: 90,
            alignItems: 'center',
            justifyContent: 'center', 
            backgroundColor:isDark ?  "#222831": "#334257" ,
            borderRadius: 15,
            // elevation: 8,
            flexDirection: 'row',
            paddingLeft: 16,
            paddingRight: 14,
            marginTop: 9,
            marginBottom: 9,
          },
          subCardView: {
            height: 50,
            width: 50,
            borderRadius: 25,
            backgroundColor:darkBorder,
            borderColor: darkBorder,
            borderWidth: 1,
            borderStyle: 'solid',
            alignItems: 'center',
            justifyContent: 'center',
          },
          textContainer: {
             display:"flex",
             flexDirection:'column',
             gap:4,
             width:"88%",
             height:"100%",
            //  backgroundColor:"red",
             justifyContent:"center",
          },
          text:{
            color:isDark ? "white": "#D8D9DA"
          },
          btnContainer:{
            paddingVertical:5,
            width:"18%",
            height:"100%",
              paddingHorizontal:3,
              justifyContent:'space-evenly',
              alignContent:"space-between",
          },
          btn:{
             paddingVertical:2,
             backgroundColor:"green",
             width:"90%",
             textAlign:"center",
             borderRadius:5,
             alignItems:"center"
          },
          btnText:{
            textAlign:"center",
            color:"white"
          }

    });
  }
  
  export default taskListStyle;