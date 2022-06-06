import * as React from "react";
import Grid from "@mui/material/Grid";
import { FC } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
interface FuncProp {
  selectedValue: any;
}

let items = "Acne";
const GET_MUTATED_VALUE = ()=> {
  return gql`
mutation { getSuggestionWithDate (${items}: String)
}
 `
}

// export const AddressDeleteDocument = gql`
//     mutation AddressDelete($id: ID!) {
//   accountAddressDelete(id: $id) {
//     user {
//       addresses {
//         ...AddressDetailsFragment
//       }
//     }
//   }
// }

const MutatedSelectedList: FC<FuncProp> = ({ selectedValue }) => {
  const [MutatedSelectedList, { data, loading, error }] =useMutation(GET_MUTATED_VALUE);
  console.log("dataasdasd", data);
  return (
    <Grid container mt={4}>
      <Grid item xs={4} textAlign="center">
        {selectedValue.map((value: any) => {
          console.log("values", value);
          return <li>{value.value}</li>;
        })}
      </Grid>
    </Grid>
  );
};
export default MutatedSelectedList;
