import { gql } from "@apollo/client";

const GET_BLOG = gql`
  query {
    posts {
      id
      title
      slug
      publishedAt
      image {
        url
      }
      author {
        name
        avatar {
          url
        }
      }
    }
  }
`;
const GET_AUTHOR = gql`
  query {
    authors {
      id
      name
      slug
      avatar {
        url
      }
    }
  }
`;

const GET_AUTHOR_INFO = gql`
  query getAuthorInfo($slug: String!) {
    author(where: { slug: $slug }) {
      id
      name
      slug
      field
      avatar {
        url
      }
      description {
        html
      }
      posts {
        id
        slug
        title
        image {
          url
        }
      }
    }
  }
`;
const GET_POST_INFO = gql`
  query getPostInfo($slug: String!) {
    post(where: { slug: $slug }) {
      id
      slug
      title
      image {
        url
      }
      content {
        html
      }
      author {
        id
        name
        slug
        field
        avatar {
          url
        }
      }
    }
  }
`;
const GET_COMMENT = gql`
  query getComment($slug: String!) {
    comments(where: { post: { slug: $slug } }) {
      id
      name
      email
      text
    }
  }
`;

export { GET_BLOG, GET_AUTHOR, GET_AUTHOR_INFO, GET_POST_INFO, GET_COMMENT };
