import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DOGS = gql`
  query ExampleQuery {
    listOfSuggestions
  }
`;
const App = () => {
  const { loading, error, data } = useQuery(GET_DOGS);
  console.log("data", data);

  return <>this is where dropdown will be</>;
};

export default App;
