import { FC, useState } from "react";
import React, { useEffect } from "react";
import { handleAdd } from "./page/dropDown";
import App from './app'
import { render } from '@testing-library/react';
import AutoCompleteDropDown from "./page/dropDown";
// const [selectedValue, setSelectedValue] = useState<any>([]);
// setSelectedValue([
//   { value: "1st mtp pain or swelling", label: "1st mtp pain or swelling" },
// ]);
// const [item, setItem] = useState<any>([]);
// const updatedArray: any = [
//   { value: "Abdominal pain", label: "Abdominal pain" },
// ];

describe("AutoCompleteDropDown", () => {
  it("runs without crashing", () => {
    render(<AutoCompleteDropDown list setSelectedValue selectedValue />);
  });
});

// describe("handleAdd", () => {
//   it("Will add value in the list", async () => {
//     const [a, b, expected] = [
//       updatedArray,
//       selectedValue,
//       setItem,
//       setSelectedValue,
//       [
//         {
//           value: "1st mtp pain or swelling",
//           label: "1st mtp pain or swelling",
//         },
//         {
//           value: "Abdominal pain",
//           label: "Abdominal pain",
//         },
//       ],
//     ];
//     const result = handleAdd(a, b);
//     expect(result).toEqual(expected);
//   });
// });

// const handleAddTest: any = (a: any, b: any) => {
//   let x = a + b;
//   return x;
// };

// describe("handleAddTest", () => {
//   it("should return add of them", async () => {
//     const [a, b, expected] = [1, 1, 2];
//     const result = handleAdd(a, b);
//     expect(result).toEqual(expected);
//   });
// });
