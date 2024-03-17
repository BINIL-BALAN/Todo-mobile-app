import { useContext, useState } from "react";
import { AllStyles } from "../../../context/StyleContext";
import { UserDetails } from "../../../context/UserContext";
import loinStyle from "./style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  ActivityIndicator,
} from "react-native";
import { useMutation } from "@apollo/client";
import { darkColor, lightColor } from "../../../../constant";
import { get_user, add_user } from "./graphql/mutation";
import { removeData, setData } from "../../../utils/sharedPreferences";
function Login() {
  const allSyle = useContext(AllStyles);
  //   console.log(allSyle);
  const style = loinStyle(allSyle.theme, allSyle.dimension);
  const { setUser } = useContext(UserDetails);
  const [getEmail, setGetEmail] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [isEmpty, seIsEmpty] = useState(false);
  const [getUser, { loading }] = useMutation(get_user);
  const [addUser, { addUserLoading }] = useMutation(add_user);
  async function handletUser() {
    // console.log(getEmail);
    if (getEmail != "") {
      try {
        const fetchResult = await getUser({
          variables: { email: getEmail },
        });
        const { details, result } = fetchResult.data.getUser;
        if (result.statusCode == 200) {
          setUser(details);
          setData("email", details.email);
          setGetEmail("");
        } else {
          Alert.alert(result.message);
        }
      } catch (error) {
        Alert.alert("Something went wrong");
      }
    } else {
      Alert.alert("Please enter email");
    }
  }
  async function handleAddUser() {
    if (name != "" && email != "") {
      seIsEmpty(false);
      try {
        const result = await addUser({
          variables: {
            user: { name, email, file: null, task: [] },
          },
        });
        const { message, statusCode } = result.data.addUser;
        if (statusCode == 200) {
          setEmail("");
          setName("");
        }
        Alert.alert(`${message}! Enter your email to access your tasks.`);
      } catch (error) {
        Alert.alert("Operation failed");
      }
    } else {
      seIsEmpty(true);
    }
  }
  return (
    <View style={style.container}>
      <View style={style.addUserContainer}>
        <Text style={style.title}>Add user</Text>
        {isEmpty && (
          <Text style={{ color: "red" }}>Please enter name and email</Text>
        )}
        <TextInput
          onChangeText={setName}
          value={name}
          style={style.input}
          placeholder="Enter name"
          placeholderTextColor={
            allSyle.theme == "dark" ? darkColor : lightColor
          }
        />
        <TextInput
          onChangeText={setEmail}
          value={email}
          style={style.input}
          placeholder="Enter email"
          placeholderTextColor={
            allSyle.theme == "dark" ? darkColor : lightColor
          }
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TouchableOpacity
          onPress={handleAddUser}
          style={{ ...style.btn, backgroundColor: "green" }}
        >
          {addUserLoading ? (
            <ActivityIndicator
              size={26}
              color={allSyle.theme == "dark" ? "white" : "black"}
            />
          ) : (
            <Text style={{ color: "white", fontWeight: "600" }}>ADD</Text>
          )}
        </TouchableOpacity>
      </View>
      <View style={style.addUserContainer}>
        <Text style={style.title}>Get task</Text>

        <TextInput
          onChangeText={setGetEmail}
          value={getEmail}
          style={style.input}
          placeholder="Enter email"
          placeholderTextColor={
            allSyle.theme == "dark" ? darkColor : lightColor
          }
          keyboardType="email-address"
          textContentType="emailAddress"
        />
        <TouchableOpacity
          onPress={handletUser}
          style={{ ...style.btn, backgroundColor: "#008DDA" }}
        >
          {loading ? (
            <ActivityIndicator
              size={26}
              color={allSyle.theme == "dark" ? "white" : "black"}
            />
          ) : (
            <Text style={{ color: "white", fontWeight: "600" }}>GET</Text>
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Login;
