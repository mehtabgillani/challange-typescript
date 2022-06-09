import { FC, useState } from "react";
import React, { useEffect } from "react";
import { removedItemValue } from "./page/dropDown/functions/helperFunctions";
import SelectedList from "./page/upperLayout";
import MutatedList from "./page/lowerLayout";
import AutoCompleteDropDown from "./page/dropDown";
import { render } from "@testing-library/react";

describe("Selected Items of list showing Correctly", () => {
  it("runs without crashing", () => {
    render(<SelectedList selectedValue />);
  });
});

describe("Selected Items with mutation result", () => {
  it("runs without crashing", () => {
    render(<MutatedList mutatedArray />);
  });
});

describe("handleRemove", () => {
  it("Will remove item from the array", () => {
    const updatedArray = [
      { value: "a", label: "a" },
      { value: "b", label: "b" },
    ];
    const selectedArray = [
      { value: "a", label: "a" },
      { value: "b", label: "b" },
      { value: "c", label: "c" },
    ];
    const result = { value: "c", label: "c" };
    const response = removedItemValue(selectedArray, updatedArray);
    console.log("this is my response", response);
    expect(response).toEqual(result);
  });
});

// describe("Drop Down working", () => {
//   it("runs without crashing", () => {
//     render(<AutoCompleteDropDown selectedValue setSelectedValue list />);
//   });
// });
