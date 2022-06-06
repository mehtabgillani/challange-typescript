import { ApolloServer, gql } from "apollo-server";

const server = new ApolloServer({
  typeDefs: gql`
    type Query {
      listOfSuggestions: [String]
    }
    type Mutation {
      getSuggestionWithDate(items: [String]): [String]
    }
  `,
  resolvers: {
    Query: {
      listOfSuggestions: () => require("./list_suggestions-v7.0.0.json").data,
    },
    Mutation: {
      getSuggestionWithDate: (parent, args) =>
        args.items.map((x:any) => x + " - " + new Date().toISOString()),
    },
  },
});

server.listen().then(({ url }) => console.log(`🚀  Server ready at ${url} `));
