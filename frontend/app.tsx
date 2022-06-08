import { FC, useState } from "react";
import React, { useEffect } from "react";
import { useQuery, gql } from "@apollo/client";
import Page from "./page/index";
import Grid from "@mui/material/Grid";
import "./style.scss";

const GET_DOGS = gql`
  query ExampleQuery {
    listOfSuggestions
  }
`;

const App = () => {
  const [selectedValue, setSelectedValue] = useState<any>([]);
  const { loading, error, data } = useQuery(GET_DOGS);

  return (
    <Grid container>
      <Grid
        className="dropdown"
        item
        xs={12}
        textAlign="center"
        style={{ paddingLeft: "200px", paddingTop: "20px" }}
      >
        <Page
          suggestionList={data?.listOfSuggestions}
          selectedValue={selectedValue}
          setSelectedValue={setSelectedValue}
        />
      </Grid>
    </Grid>
  );
};

export default App;
