
export const addItemValue: any = (
  updatedArray: any,
  selectedValue: any,
) => {
  console.log("updatedArray",updatedArray)
  console.log("selectedValue",selectedValue)
  let value: any;
  value = updatedArray.filter(function (item: any) {
    return !selectedValue.includes(item);
  });
  console.log("value i wanted",value[0])
  return value[0]

};

export const removedItemValue: any = (
  updatedArray: any,
  selectedValue: any
) => {
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
  
  return value[0];
};
