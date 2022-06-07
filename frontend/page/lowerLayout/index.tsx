import { FC, useState } from "react";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import { useQuery, gql, useMutation } from "@apollo/client";
interface FuncProp {
  selectedValue: any;
}

let items = "Acne";

const GET_MUTATED_VALUE = gql`
  mutation ExampleQuery {
    getSuggestionWithDate (items: "${items}")
  }
`;

const MutatedSelectedList: FC<FuncProp> = ({ selectedValue }) => {
  const [mutateFunction, { data, loading, error }] =
    useMutation(GET_MUTATED_VALUE);
  console.log("dataasdasd", data);
  useEffect(() => {
    mutateFunction();
  }, []);
  return (
    <Grid container mt={4}>
      <Grid item xs={4} textAlign="center">
        {selectedValue.map((value: any) => {
          console.log("values", value);
          return <li>{value.value}</li>;
        })}
      </Grid>
    </Grid>
  );
};
export default MutatedSelectedList;
