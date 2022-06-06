import ReactDOM from "react-dom/client";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
 
} from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/",
  cache: new InMemoryCache(),
});
import App from "./app.test";
const element = document.getElementById("root");
const root = ReactDOM.createRoot(element);
root.render(
  <>
    <h1>Dem Dx Autocomplete</h1>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </>
);
