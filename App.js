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
  createHttpLink
} from "@apollo/client";

import { getMainDefinition } from "@apollo/client/utilities";
import { split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";

import { baseUrl,wsUrl } from "./constant";
import { UserContext } from "./src/context/UserContext";
export default function App() {
  // const link = from([
  //   new HttpLink({ uri: baseUrl }),
  // ]);

  const httpLink = createHttpLink({
    uri: baseUrl,
  });

  const wsLink = new WebSocketLink({
    uri: wsUrl,
    options: {
      reconnect: true,
    },
  });

  const link = split(
    ({ query }) => {
      const definition = getMainDefinition(query);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    wsLink,
    httpLink
  );

  const client = new ApolloClient({
    cache: new InMemoryCache(),
    link,
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
