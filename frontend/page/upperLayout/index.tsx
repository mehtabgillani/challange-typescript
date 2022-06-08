import * as React from "react";
import Grid from "@mui/material/Grid";
import { FC } from "react";

interface FuncProp {
  selectedValue: any;
}
const SelectedList: FC<FuncProp> = ({ selectedValue }) => {
  return (
    <Grid container mb={4}>
      <Grid item xs={4} textAlign="center">
        {selectedValue.map((value: any) => {
          return <li>{value.value}</li>;
        })}
      </Grid>
    </Grid>
  );
};
export default SelectedList;
