import { FC, useState } from "react";
import React, { useEffect } from "react";
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

// describe("Drop Down working", () => {
//   it("runs without crashing", () => {
//     render(<AutoCompleteDropDown selectedValue setSelectedValue list />);
//   });
// });
