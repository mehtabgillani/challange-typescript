import { FC, useState } from "react";
import React, { useEffect } from "react";
import { removedItemValue ,addItemValue} from "./page/dropDown/functions/helperFunctions";
import SelectedList from "./page/upperLayout";
import MutatedList from "./page/lowerLayout";

import AutoCompleteDropDown from "./page/dropDown";
import { render } from "@testing-library/react";
import Page from "./page";
import { useQuery, gql } from "@apollo/client";
import App from "./app";

const updatedArray: any = [
  { value: "Test 1", label: "Test 1" },
  { value: "Test 2", label: "Test 2" },
];
const selectedArray: any = [
  { value: "Test 1", label: "Test 1" },
  { value: "Test 2", label: "Test 2" },
  { value: "Test 3", label: "Test 3" },
];

const updatedArray1: any = [
  { value: 'Acne', label: 'Acne' },
  { value: 'Abnormal gait', label: 'Abnormal gait' },
  {value: 'Acute confusion', label: 'Acute confusion'}
];
const selectedArray1: any = [
  { value: 'Acne', label: 'Acne' },
  { value: 'Abnormal gait', label: 'Abnormal gait' },
];



describe("Test the DropDown Implementation", () => {
  it("Selected List is rendered", () => {
    render(<SelectedList selectedValue />);
  });

  it("Mutated List is rendered", () => {
    render(<MutatedList mutatedArray />);
  });

  it("Add To Selected List", () => {
    const result = {value: 'Acute confusion', label: 'Acute confusion'};
    let addedItemInDropDown = jest.fn().mockImplementation(addItemValue)
    const response = addedItemInDropDown(updatedArray1,selectedArray1);
    console.log("response to check",response)
    expect(response).toEqual(result);
  });

  it("Will show removed item from the array", () => {
    const result = { value: "Test 3", label: "Test 3" };
    let removeFromDropDown = jest.fn().mockImplementation(removedItemValue)
    const response = removeFromDropDown(updatedArray, selectedArray);
    expect(response).toEqual(result);
  });
});
