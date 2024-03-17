import {useContext} from 'react'
import Home from './src/modules/pages/Home/Home'
import Navbar from './src/modules/components/Navbar'
import { View } from 'react-native'
import { AllStyles } from './src/context/StyleContext'
function Main() {
    const {theme} = useContext(AllStyles)
    const backgroundColor = theme == "dark" ? "white" : "black"
  return (
    <View style={{height:"100%",width:"100%",backgroundColor}}>
        <Navbar />
        <Home />
    </View>
  )
}

export default Main
