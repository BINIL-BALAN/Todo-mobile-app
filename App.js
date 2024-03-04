// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView,StyleSheet,Platform,StatusBar,Dimensions} from "react-native";
import { StyleContext } from "./src/context/StyleContext";
import Main from "./Main";
export default function App() {
console.log(Dimensions.get('screen'));
  return (
    <SafeAreaView style={styles.container}>
      <StyleContext>
        <Main />
      </StyleContext>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
