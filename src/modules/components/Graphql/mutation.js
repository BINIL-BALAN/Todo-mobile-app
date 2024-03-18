import { gql } from "@apollo/client";

export const subscription_task = gql`
subscription {
   updations {
      result {
          statusCode
          message
      }
      details {
          id
          name
          email
          image
          task {
              id
              task
              status
          }
      }
  }
}
`;