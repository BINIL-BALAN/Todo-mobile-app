import { useState, useContext, useEffect, useCallback } from "react";
import { UserDetails } from "../../../context/UserContext";
import { AllStyles } from "../../../context/StyleContext";
import {
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Alert,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
} from "react-native";
import { darkColor, lightColor } from "../../../../constant";
import homestyle from "./style";
import TaskList from "../../components/TaskList";
import Login from "../Login/Login";
import { getData } from "../../../utils/sharedPreferences";
import { useMutation } from "@apollo/client";
import { get_user } from "../Login/graphql/mutation";
function Home() {
  const allSyle = useContext(AllStyles);
  const { user, setUser, handleOperations, loading } = useContext(UserDetails);
  const style = homestyle(allSyle.theme);
  const [getUser, { loading: userLoading }] = useMutation(get_user);
  const [task, setTask] = useState("");
  const [refreshing, setRefreshing] = useState(false);
  async function checkUser() {
    const storedUser = await getData("email");
    if (storedUser) {
      try {
        const fetchResult = await getUser({
          variables: { email: storedUser },
        });
        const { details, result } = fetchResult.data.getUser;
        // console.log(details);
        result.statusCode == 200
          ? setUser(details)
          : Alert.alert("Something went wrong");
      } catch (error) {
        setUser(null);
        Alert.alert("Something went wrong");
      }
    } else {
      setUser(null);
    }
  }
  function addTask() {
    if (task != "") {
      handleOperations({ id: "", task, status: false }, "post");
      setTask("");
    } else {
      Alert.alert("Please add some text");
    }
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    checkUser()
    setTimeout(() => {
      setRefreshing(false);
    }, 500);
  }, []);

  useEffect(() => {
    checkUser();
  }, []);
  return (
    <View style={style.container}>
      {/* <Login /> */}
      {user?.email ? (
        <>
          <View style={style.inputArea}>
            <TextInput
              style={style.input}
              onChangeText={setTask}
              value={task}
              editable
              multiline
              numberOfLines={4}
              placeholder="Add task here"
              placeholderTextColor={
                allSyle.theme == "dark" ? darkColor : lightColor
              }
            />
            <TouchableOpacity onPress={addTask} style={style.addBtn}>
              {loading && task != "" ? (
                <ActivityIndicator
                  size={26}
                  color={allSyle.theme == "dark" ? "white" : "black"}
                />
              ) : (
                <Text style={{ ...style.text, ...style.addBtnText }}>Add</Text>
              )}
            </TouchableOpacity>
          </View>
          <ScrollView
            style={style.taskListConainer}
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
          >
            <TaskList />
          </ScrollView>
        </>
      ) : (
        <Login />
      )}
      {userLoading && <Text style={{ textAlign: "center" }}>Loading.....</Text>}
    </View>
  );
}

export default Home;
