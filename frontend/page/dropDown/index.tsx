import { FC, useState } from "react";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import SelectOption from "react-select";
import { gql, useMutation } from "@apollo/client";
interface FuncProp {
  list: any;
  setSelectedValue: any;
  selectedValue: any;
  mutatedArray: any;
  setMutatedArray: any;
}
const AutoCompleteDropDown: FC<FuncProp> = ({
  list,
  setSelectedValue,
  selectedValue,
  mutatedArray,
  setMutatedArray,
}) => {
  const [item, setItem] = useState<any>();

  const handleAdd: any = (updatedArray: any) => {
    let value: any;
    value = updatedArray.filter(function (item: any) {
      return !selectedValue.includes(item);
    });
    setSelectedValue(updatedArray);
    setItem(value[0].label);
  };

  useEffect(() => {
    if (item) {
      mutateFunction();
    }
  }, [item]);

  const GET_MUTATED_VALUE = gql`
  mutation ExampleQuery {
    getSuggestionWithDate (items: "${item}")
  }
`;
  const [mutateFunction, { data, loading, error }] =
    useMutation(GET_MUTATED_VALUE);
  useEffect(() => {
    if (data !== undefined) {
      mutatedArray.push(data.getSuggestionWithDate);
    }
    console.log("data", data?.getSuggestionWithDate);
  }, [data]);
  const handleRemove: any = (updatedArray: any) => {
    selectedValue = selectedValue.filter(function (item: any) {
      return !updatedArray.includes(item);
    });
    console.log(selectedValue, "that was eliminated");
    setSelectedValue(updatedArray);
  };

  return (
    <>
      <Grid container>
        <Grid item xs={4} textAlign="center">
          <SelectOption
            isMulti
            name="selectedList"
            options={list}
            className="basic-multi-select user_multiselect"
            classNamePrefix="select"
            onChange={(e: any) => {
              if (e.length == selectedValue.length + 1) {
                handleAdd(e);
              } else if (e.length < selectedValue.length) {
                handleRemove(e);
              }
            }}
          />
        </Grid>
      </Grid>
      <Grid container mt={4}>
        <Grid item xs={4} textAlign="center">
          {mutatedArray.length > 0 &&
            mutatedArray.map((value: any) => {
              // console.log(mutatedArray)
              return <li>{value}</li>;
            })}
        </Grid>
      </Grid>
    </>
  );
};
export default AutoCompleteDropDown;
