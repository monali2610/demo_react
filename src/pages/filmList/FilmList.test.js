import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import GET_FILMS from "../../query/GET_FILMS";
import FilmList from "./FilmList";

it("should render loading state", async () => {
  render(
    <MockedProvider mocks={[]} addTypename={false}>
      <FilmList />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
});

it("should render error state", async () => {
  const mock = {
    request: {
      query: GET_FILMS,
      variables: { first: 10, last: 10, after: "", before: "" },
    },
    error: new Error("aw shucks"),
  };
  render(
    <MockedProvider mocks={[mock]} addTypename={false}>
      <FilmList />
    </MockedProvider>
  );
  expect(await screen.findByText("Something was Wrong!")).toBeInTheDocument();
});

test("should render succuss state", async () => {
  const mocks = [
    {
      request: {
        query: GET_FILMS,
        variables: {
          first: 10,
          last: 10,
          after: "",
          before: "",
        },
      },
      result: {
        data: {
          allFilms: {
            films: [
              {
                title: "A New Hope",
                director: "George Lucas",
                releaseDate: "1977-05-25",
                speciesConnection: {
                  species: [
                    {
                      name: "Human",
                      classification: "mammal",
                      homeworld: {
                        name: "Coruscant",
                        __typename: "Planet",
                      },
                      __typename: "Species",
                    },
                    {
                      name: "Droid",
                      classification: "artificial",
                      homeworld: null,
                      __typename: "Species",
                    },
                    {
                      name: "Wookie",
                      classification: "mammal",
                      homeworld: {
                        name: "Kashyyyk",
                        __typename: "Planet",
                      },
                      __typename: "Species",
                    },
                    {
                      name: "Rodian",
                      classification: "sentient",
                      homeworld: {
                        name: "Rodia",
                        __typename: "Planet",
                      },
                      __typename: "Species",
                    },
                    {
                      name: "Hutt",
                      classification: "gastropod",
                      homeworld: {
                        name: "Nal Hutta",
                        __typename: "Planet",
                      },
                      __typename: "Species",
                    },
                  ],
                  __typename: "FilmSpeciesConnection",
                },
                __typename: "Film",
              },
            ],
            pageInfo: {
              startCursor: "YXJyYXljb25uZWN0aW9uOjA=",
              hasNextPage: false,
              hasPreviousPage: false,
              endCursor: "YXJyYXljb25uZWN0aW9uOjU=",
              __typename: "PageInfo",
            },
            __typename: "FilmsConnection",
          },
        },
      },
    },
  ];
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <FilmList />
    </MockedProvider>
  );
  expect(await screen.findByText("Loading...")).toBeInTheDocument();
});
