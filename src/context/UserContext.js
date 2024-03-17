import { createContext, useState } from "react";
import { useMutation } from "@apollo/client";
import {operaion_query} from './graphql/mutation'
import { Alert } from "react-native";

export const UserDetails = createContext()

export const UserContext = ({children})=>{
    const [user,setUser] = useState(null)
    const [taskOperations,{loading}] = useMutation(operaion_query)
    async function handleOperations(data,operation){
         const {id,task,status} = data
       try {
          const {email} = user
          const operationResult = await taskOperations({
            variables:{
                params:{email,operation,data:{id,task,status}}
            }
          })
          const {details,result} = operationResult.data.operations
          if(result.statusCode == 200){
            setUser(details)
            operation == "post" && Alert.alert(result.message)
          }else{
            Alert.alert(result.message)
          }
       } catch (error) {
        Alert.alert("Operation failed try again")
       }   
    }
    return (
        <UserDetails.Provider value={{user,setUser,handleOperations,loading}}>
            {children}
        </UserDetails.Provider>
    )
}