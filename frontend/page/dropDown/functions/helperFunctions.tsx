
export const handleAdd: any = (
  updatedArray: any,
  selectedValue: any,
  setItem: any,
  setSelectedValue: any
) => {
  let value: any;
  value = updatedArray.filter(function (item: any) {
    return !selectedValue.includes(item);
  });

  setSelectedValue(updatedArray);
  setItem(value[0].label);
};

export const removedItemValue: any = (
  updatedArray: any,
  selectedValue: any
) => {
  console.log("updatedArray", updatedArray);
  console.log("selectedValue", selectedValue);
  let value: any = [];
  selectedValue.map((item: any) => {
    let exists = false;
    updatedArray.map((updatedItem: any) => {
      if (item.label == updatedItem.label) {
        exists = true;
      }
    });
    if (!exists) {
      value.push(item);
    }
  });
  console.log("value", value);
  return value;
};
