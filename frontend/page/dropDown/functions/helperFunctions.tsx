export const addItemValue: any = (updatedArray: any, selectedValue: any) => {
  let value: any = [];
  updatedArray.map((item: any) => {
    let exists = false;
    selectedValue.map((selectedItem: any) => {
      if (item.label == selectedItem.label) {
        exists = true;
      }
    });
    if (!exists) {
      value.push(item);
    }
  });

  return value[0];
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
