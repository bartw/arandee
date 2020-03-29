import React from "react";
import { gql } from "apollo-boost";
import { useQuery } from "@apollo/react-hooks";

const QUERY = gql`
  query books {
    books {
      author
      title
    }
  }
`;

const Books = () => {
  const { loading, error, data } = useQuery(QUERY);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error :-(</div>;
  }

  const { books } = data;

  return (
    <ul>
      {books.map(({ author, title }, index) => (
        <li key={index}>
          <span>{author}</span>
          <span> - </span>
          <span>{title}</span>
        </li>
      ))}
    </ul>
  );
};

export default Books;
