import { FC, useState } from "react";
import React, { useEffect } from "react";
import SelectedList from "./selectedList";
import AutoCompleteDropDown from "./dropDown";

const Page = (suggestionList: any) => {
  const [selectedValue, setSelectedValue] = useState<any>([]);
  const list: any =
    suggestionList?.suggestionList &&
    suggestionList.suggestionList.length > 0 &&
    suggestionList?.suggestionList.map((data: any, index: any) => {
      return {
        value: data,
        label: data,
      };
    });

  return (
    <>
      <SelectedList selectedValue={selectedValue} />
      <AutoCompleteDropDown list={list} setSelectedValue={setSelectedValue} />
    </>
  );
};
export default Page;
