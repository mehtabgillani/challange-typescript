import { FC, useState } from "react";
import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Page from "./page/index";


const GET_DOGS = gql`
  query ExampleQuery {
    listOfSuggestions
  }
`;



const App = () => {
  const [selectedValue, setSelectedValue] = useState<any>([]);
  const { loading, error, data } = useQuery(GET_DOGS);

  return (
    <Page
      suggestionList={data?.listOfSuggestions}
      selectedValue={selectedValue}
      setSelectedValue={setSelectedValue}
    />
  );
};

export default App;
