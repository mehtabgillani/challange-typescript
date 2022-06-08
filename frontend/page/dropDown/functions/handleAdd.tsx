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
