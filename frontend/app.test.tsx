import { FC, useState } from "react";
import React, { useEffect } from "react";
// import { removedItemValue, log } from "./page/dropDown/functions/helperFunctions";
import SelectedList from "./page/upperLayout";
import MutatedList from "./page/lowerLayout";
import AutoCompleteDropDown from "./page/dropDown";
import { render } from "@testing-library/react";
// import Enzyme, { shallow } from 'enzyme';


// export const removedItemValue: any = (
//   updatedArray: any,
//   selectedValue: any
// ) => {
//   console.log("updatedArray", updatedArray);
//   console.log("selectedValue", selectedValue);
//   let value: any = [];
//   selectedValue.map((item: any) => {
//     let exists = false;
//     updatedArray.map((updatedItem: any) => {
//       if (item.label == updatedItem.label) {
//         exists = true;
//       }
//     });
//     if (!exists) {
//       value.push(item);
//     }
//   });
//   console.log("value", value[0]);
//   return value[0];
// };


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

let removedItemValue = jest.fn()
jest.mock('./page/dropDown/functions/helperFunctions', () => {
  return removedItemValue
})

describe("handleRemove", () => {
  it("Will remove item from the array", () => {
    const updatedArray = [
      { value: "abc", label: "abc" },
      { value: "def", label: "def" },
    ];
    const selectedArray = [
      { value: "abc", label: "abc" },
      { value: "def", label: "def" },
      { value: "ghi", label: "ghi" },
    ];
    const result = { value: "ghi", label: "ghi" };
    // console.log = jest.fn();
    console.log("dgvhbnjm");
    // const mockFunction = jest.fn(removedItemValue); 
    // const toggleInstance = shallow(removedItemValue);
    
    const response = removedItemValue(selectedArray, updatedArray);
    
    console.log("123", response)
    expect(response).toBe(result);
  });
});

// describe("Drop Down working", () => {
//   it("runs without crashing", () => {
//     render(<AutoCompleteDropDown selectedValue setSelectedValue list />);
//   });
// });
