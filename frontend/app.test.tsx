import AutoCompleteDropDown from "./page/dropDown/index";
import { render, screen, cleanup, fireEvent } from "@testing-library/react";
import App from './app'
const handleAdd: any = (a: any, b: any) => {
  let x = a + b;
  return x;
};


describe("handleAdd", () => {
  it("should return add of them", async () => {
    const [a, b, expected] = [1, 1, 2];
    const result = handleAdd(a, b);
    expect(result).toEqual(expected);
  });
});

