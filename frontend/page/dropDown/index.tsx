import { FC, useState } from "react";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import SelectOption from "react-select";
import { gql, useMutation } from "@apollo/client";
import MutatedList from "../lowerLayout";
import { handleAdd } from "./functions/helperFunctions";
import { removedItemValue } from "./functions/helperFunctions";

// const updatedArray = [
//   { value: "Acute confusion", label: "Acute confusion" },
//   { value: "Abnormal gait", label: "Abnormal gait" },
// ];
// const selectedArray = [
//   { value: "Acute confusion", label: "Acute confusion" },
//   { value: "Abnormal gait", label: "Abnormal gait" },
//   { value: "Acne", label: "Acne" },
// ];
// let response: any = removedItemValue(updatedArray, selectedArray);
// console.log("Response of index function", response);

interface FuncProp {
  list: string[];
  setSelectedValue: any;
  selectedValue: string[];
}

export const handleRemove: any = (
  updatedArray: string[],
  selectedValue: string[],
  setRemovedItem: any,
  setSelectedValue: any
) => {
  let value: any;
  value = removedItemValue(updatedArray, selectedValue);
  console.log("response when you remove item", value);
  const index = selectedValue.indexOf(value);
  setRemovedItem({
    value: value,
    index: index,
  });
  setSelectedValue(updatedArray);
};

const AutoCompleteDropDown: FC<FuncProp> = ({
  list,
  setSelectedValue,
  selectedValue,
}) => {
  const [mutatedArray, setMutatedArray] = useState<string[]>([]);
  const [item, setItem] = useState<any>();
  const [removedItem, setRemovedItem] = useState<any>();

  const GET_MUTATED_VALUE = gql`
  mutation ExampleQuery {
    getSuggestionWithDate (items: "${item}")
  }
`;
  const [mutateFunction, { data, loading, error }] =
    useMutation(GET_MUTATED_VALUE);

  useEffect(() => {
    if (item) {
      mutateFunction();
    }
  }, [item]);

  useEffect(() => {
    if (data !== undefined) {
      const newMutatedArray: any = [...mutatedArray];
      newMutatedArray.push(data.getSuggestionWithDate[0]);
      setMutatedArray(newMutatedArray);
    }
  }, [data]);

  useEffect(() => {
    if (removedItem) {
      const newMutatedArray = [...mutatedArray];
      newMutatedArray.splice(removedItem.index, 1);
      setMutatedArray(newMutatedArray);
    }
  }, [removedItem]);
  
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
                handleAdd(e, selectedValue, setItem, setSelectedValue);
              } else if (e.length < selectedValue.length) {
                handleRemove(
                  e,
                  selectedValue,
                  setRemovedItem,
                  setSelectedValue
                );
              }
            }}
          />
        </Grid>
      </Grid>
      <Grid item xs={12} textAlign="center">
        <MutatedList mutatedArray={mutatedArray} />
      </Grid>
    </>
  );
};
export default AutoCompleteDropDown;
