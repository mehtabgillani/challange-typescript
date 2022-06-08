import { FC, useState } from "react";
import React, { useEffect } from "react";
import SelectedList from "./page/upperLayout";
import { render } from "@testing-library/react";

const selectedValue:any =[{value: 'Abdominal pain', label: 'Abdominal pain'}]

describe("Selected Items of list showing Correctly", () => {
  it("runs without crashing", () => {
    render(<SelectedList selectedValue />);
  });
});