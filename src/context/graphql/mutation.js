import { gql } from "@apollo/client";

export const operaion_query =  gql`
mutation Operations($params:TaskParams){
    operations(params:$params){
       result{
          statusCode
          message
       }
       details{
          id
          name
          email
          task{
              id
              task
              status
          }
       }
    }
}
`