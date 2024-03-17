import { gql } from "@apollo/client";

export const get_user = gql`
mutation GetUser($email:String!) {
    getUser(email:$email) {
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
`
export const add_user = gql`
mutation AddUser($user: UserInput!) {
    addUser(user: $user) {
      statusCode
      message
    }
  }
`;