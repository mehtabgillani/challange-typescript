import * as React from "react";
import Grid from "@mui/material/Grid";
import { FC } from "react";

interface FuncProp {
  mutatedArray: any;
}
const MutatedList: FC<FuncProp> = ({ mutatedArray }) => {
  return (
    <Grid container mt={4}>
      <Grid item xs={4} textAlign="center">
        {mutatedArray.length > 0 &&
          mutatedArray.map((value: any) => {
            return <li>{value}</li>;
          })}
      </Grid>
    </Grid>
  );
};
export default MutatedList;
