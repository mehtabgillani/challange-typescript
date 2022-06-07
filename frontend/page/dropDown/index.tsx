import { FC } from "react";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import SelectOption from "react-select";

interface FuncProp {
  list: any;
  setSelectedValue: any;
  selectedValue: any;
}
const AutoCompleteDropDown: FC<FuncProp> = ({
  list,
  setSelectedValue,
  selectedValue,
}) => {
  let array: any = [];

  const handleAdd: any = (e: any, type: any) => {
    console.log("type in add", type);
    setSelectedValue(e);
  };

  const handleRemove: any = (e: any, type: any) => {
    console.log("type in remove", type);
    setSelectedValue(e);
  };

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
            let type;
            // console.log("e", e);
            // console.log("selectedValue", selectedValue);
            if (e.length == selectedValue.length + 1) {
              type = "add";
              handleAdd(e, type);
            } else if (e.length < selectedValue.length) {
              type = "remove";
              handleRemove(e, type);
            }
          }}
        />
      </Grid>
    </Grid>
  );
};
export default AutoCompleteDropDown;
