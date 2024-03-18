// import { StatusBar } from 'expo-status-bar';
import {
  SafeAreaView,
  StyleSheet,
  Platform,
  StatusBar,
  Dimensions,
  Alert,
} from "react-native";
import { StyleContext } from "./src/context/StyleContext";
import Main from "./Main";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  HttpLink,
  from,
} from "@apollo/client";
import { baseUrl } from "./constant";
import { UserContext } from "./src/context/UserContext";
export default function App() {
  const link = from([
    new HttpLink({ uri: baseUrl }),
  ]);
  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link: link,
  });

  // console.log(Dimensions.get('screen'));
  return (
    <ApolloProvider client={client}>
      <SafeAreaView style={styles.container}>
        <StyleContext>
          <UserContext>
            <Main />
          </UserContext>
        </StyleContext>
      </SafeAreaView>
    </ApolloProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
  },
});
