import { gql } from "@apollo/client";

const POST_COMMENT = gql`
  mutation postComment(
    $slug: String!
    $name: String!
    $email: String!
    $text: String!
  ) {
    createComment(
      data: {
        name: $name
        email: $email
        text: $text
        post: { connect: { slug: $slug } }
      }
    ) {
      id
    }
  }
`;

export { POST_COMMENT };
