import { useContext, useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Button, Alert } from "react-native";
import global from "../../style/style";
import navBarStyle from "./styles.js/navbar";
import { AllStyles } from "../../context/StyleContext";
import { Icon } from "react-native-material-ui";
import { removeData } from "../../utils/sharedPreferences";
import { UserDetails } from "../../context/UserContext";
function Navbar() {
  const [color, setColor] = useState("white");
  const allStyles = useContext(AllStyles);
  const { user, setUser } = useContext(UserDetails);
  const style = navBarStyle(allStyles);
  const handleTheme = () => {
    const changeTheme = allStyles.theme == "dark" ? "light" : "dark";
    allStyles.setTheme(changeTheme);
  };
  async function handleLogOut() {
    const result = await removeData("email");
    if (result) {
      setUser(null);
    } else {
      Alert.alert("Operation failed try after sometimes");
    }
  }
  useEffect(() => {
    const txtColor = allStyles.theme == "dark" ? "black" : "white";
    setColor(txtColor);
  }, [allStyles.theme]);
  return (
    <View style={style.navbar}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "baseline",
          justifyContent: "center",
          alignItems:"center",
          gap:3
        }}
      >
        <Text style={style.title}>Todo</Text>
   {user?.email && <View style={style.detailsContainer}>
          <Text style={{color}}>{user?.name}</Text>
        <Text style={{color}}>{user?.email} </Text>
        </View>}
      </View>
      <View style={{ flexDirection: "row" }}>
  
        <TouchableOpacity style={style.modeBtn} onPress={handleTheme}>
          <Icon
            name={allStyles.theme == "dark" ? "brightness-2" : "brightness-7"}
            size={30}
            color={color}
          />
        </TouchableOpacity>
 {  user?.email && <TouchableOpacity onPress={handleLogOut}>
          <Icon size={30} color={color} name="exit-to-app" />
        </TouchableOpacity>}
      </View>
    </View>
  );
}

export default Navbar;
