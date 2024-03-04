import {useContext} from 'react'
import { View,Text, TouchableOpacity } from 'react-native'
import global from '../../style/style'
import navBarStyle from './styles.js/navbar'
import {AllStyles} from '../../context/StyleContext'
function Navbar() {
  const allStyles = useContext(AllStyles)
  const style = navBarStyle(allStyles)
  const handleTheme = ()=>{
      const chenedTheme = allStyles.theme  == "dark" ? "light" : "dark"
      allStyles.setTheme(chenedTheme)
  }
  return (
    <View style={style.navbar}>
      <View><Text style={style.title}>Todo</Text></View>
     <View>
      <TouchableOpacity style={style.modeBtn} onPress={handleTheme}><Text style={style.modeBtnFont}>light</Text></TouchableOpacity>
      </View>
    </View>
  )
}

export default Navbar
