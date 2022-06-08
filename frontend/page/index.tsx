import { FC, useState } from "react";
import Grid from "@mui/material/Grid";
import SelectedList from "./upperLayout";
import AutoCompleteDropDown from "./dropDown";
interface FuncProp {
  selectedValue: any;
  setSelectedValue: any;
  suggestionList: any;
}
const Page: FC<FuncProp> = ({
  selectedValue,
  setSelectedValue,
  suggestionList,
}) => {
  const list: any =
    suggestionList?.length > 0 &&
    suggestionList.map((data: any, index: any) => {
      return {
        value: data,
        label: data,
      };
    });

  return (
    <>
      <SelectedList selectedValue={selectedValue} />
      <AutoCompleteDropDown
        list={list}
        setSelectedValue={setSelectedValue}
        selectedValue={selectedValue}
      />
    </>
  );
};
export default Page;
