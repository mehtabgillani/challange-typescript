import React from "react";
import { useQuery, gql } from "@apollo/client";

const GET_DOGS = gql`
  query ExampleQuery {
    listOfSuggestions
  }
`;

// const GET_DOGS = gql`

//  Mutation ExampleQuery{
//     getSuggestionWithDate('1st mtp pain or swelling')
//   }
// `;

const App = () => {
  const { loading, error, data } = useQuery(GET_DOGS);
  console.log("data", data?.listOfSuggestions);

  return <>this is where dropdown will be</>;
};

export default App;
