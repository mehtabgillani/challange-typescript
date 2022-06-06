import { FC, useState } from "react";
import React, { useEffect } from "react";
import AutoCompleteDropDown from "./dropDown";

const Page = (suggestionList: any) => {
  // const [list, setList] = useState<any>([]);

  const list: any =
    suggestionList?.suggestionList &&
    suggestionList.suggestionList.length > 0 &&
    suggestionList?.suggestionList.map((data: any, index: any) => {
      return {
        value: data,
        label: data,
      };
    });

  return <AutoCompleteDropDown list={list} />;
};
export default Page;
