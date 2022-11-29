import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { render } from "@testing-library/react";
import App from "./App";
const client = new ApolloClient({
  uri: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  cache: new InMemoryCache(),
});

test("renders learn react link", () => {
  render(
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  );
});
