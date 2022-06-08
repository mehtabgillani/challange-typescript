import { FC, useState } from "react";
import React, { useEffect } from "react";
import Grid from "@mui/material/Grid";
import SelectOption from "react-select";
import { gql, useMutation } from "@apollo/client";
interface FuncProp {
  list: any;
  setSelectedValue: any;
  selectedValue: any;
}

export const handleAdd: any = (
  updatedArray: any,
  selectedValue: any,
  setItem: any,
  setSelectedValue: any
) => {
  console.log("updatedArray",updatedArray)

  let value: any;
  value = updatedArray.filter(function (item: any) {
    return !selectedValue.includes(item);
  });
  setSelectedValue(updatedArray);
  console.log("selectedValue",selectedValue)
  setItem(value[0].label);
};

export const handleRemove: any = (
  updatedArray: any,
  selectedValue: any,
  setRemovedItem: any,
  setSelectedValue: any
) => {
  let value: any;
  value = selectedValue.filter(function (item: any, index: any) {
    return !updatedArray.includes(item);
  });
  const index = selectedValue.indexOf(value[0]);
  console.log(index);

  setRemovedItem({
    value: value[0],
    index: index,
  });
  setSelectedValue(updatedArray);
};

const AutoCompleteDropDown: FC<FuncProp> = ({
  list,
  setSelectedValue,
  selectedValue,
}) => {
  const [mutatedArray, setMutatedArray] = useState<any>([]);
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
    if (data !== undefined) {
      console.log("mutatedArray",mutatedArray)
      const newMutatedArray :any = [...mutatedArray];
      newMutatedArray.push(data.getSuggestionWithDate[0]);
      setMutatedArray(newMutatedArray);
    }
  }, [data]);

  useEffect(() => {
    if (item) {
      mutateFunction();
    }
  }, [item]);

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
      <Grid container mt={4}>
        <Grid item xs={4} textAlign="center">
          {mutatedArray.length > 0 &&
            mutatedArray.map((value: any) => {
              return <li>{value}</li>;
            })}
        </Grid>
      </Grid>
    </>
  );
};
export default AutoCompleteDropDown;
