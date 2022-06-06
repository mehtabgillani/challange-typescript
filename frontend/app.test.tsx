import React from "react";
import { useQuery, gql } from "@apollo/client";
import Page from './page/index'
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
  console.log("data", typeof (new Array(data?.listOfSuggestions)));

  return (
    <Page suggestionList={data?.listOfSuggestions}/>
  );
};

export default App;
