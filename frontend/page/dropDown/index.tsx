import * as React from "react";
import { FC } from "react";
import Grid from "@mui/material/Grid";
import SelectOption from "react-select";

interface FuncProp {
  list: any;
  setSelectedValue: any;
}
const AutoCompleteDropDown: FC<FuncProp> = ({ list, setSelectedValue }) => {
  return (
    <Grid container>
      <Grid item xs={4} textAlign="center">
        <SelectOption
          isMulti
          name="selectedList"
          options={list}
          className="basic-multi-select user_multiselect"
          classNamePrefix="select"
          onChange={(e: any) => {
            setSelectedValue(e);
          }}
        />
      </Grid>
    </Grid>
  );
};
export default AutoCompleteDropDown;
