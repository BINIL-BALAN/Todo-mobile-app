import React, { useContext, useState } from "react";
import { View, Text, TouchableOpacity,ActivityIndicator } from "react-native";
import taskListStyle from "./styles.js/taskListStyle";
import { AllStyles } from "../../context/StyleContext";
import { Icon } from "react-native-material-ui";
import { UserDetails } from "../../context/UserContext";
function TaskList() {
  const allStyles = useContext(AllStyles);
  const [id,setId] = useState("")
  const [deleteId,setDeleteId] = useState("")
  const { user, handleOperations,loading } = useContext(UserDetails);
  const style = taskListStyle(allStyles);
  function handleUpdations(data,operation){
    if(operation == "delete"){
      setDeleteId(data.id)
    }else{
      setId(data.id)
    }
    handleOperations(data,operation)
  }
  return (
    <View>
     
      {user?.task?.map((item, index) => (
        <View style={style.mainCardView} key={index}>
          <View style={style.textContainer}>
            <Text style={style.text}>
              {index + 1}.{item.task}
            </Text>
            <Text
              style={{ color: item.status ? "green" : "orange", fontSize: 11 }}
            >
              {item.status ? "completed" : "Pending"}
            </Text>
          </View>
          <View style={style.btnContainer}>
            {item.status ? (
              <View style={{ alignItems: "center" }}>
                <Icon color="green" name="done" />
              </View>
            ) : (
              <TouchableOpacity style={style.btn} onPress={()=>{handleUpdations(item,"update")}}>
                {(loading && id == item.id) ?  <ActivityIndicator size={26} color="white" /> : <Icon size={25} color={"white"} name={"done"} />}
              </TouchableOpacity>
            )}
            <TouchableOpacity style={{ ...style.btn, backgroundColor: "red" }}  onPress={()=>{handleUpdations(item,"delete")}}>
             {(loading && deleteId == item.id)? <ActivityIndicator size={26} color="white" /> : <Icon color={"white"} name={"delete"} />}
            </TouchableOpacity>
          </View>
        </View>
      ))}
      {user?.task?.length == 0 && (
        <Text style={{ textAlign: "center" }}>No more tasks</Text>
      )}
    </View>
  );
}

export default TaskList;
