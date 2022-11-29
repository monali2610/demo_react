import { MockedProvider } from "@apollo/client/testing";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import GET_FILMS from "../../query/GET_FILMS";
import Pagination from "./Pagination";

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
test("renders Pagination button contain", () => {
  render(
    <Pagination
      pageInfo={mocks[0].result.data.allFilms.pageInfo}
      fetchMore={mocks[0].result.data.allFilms.request}
    />
  );
  const previousButton = screen.getByTestId("pagination-previous");
  expect(previousButton.textContent).toContain("Previous");
  const nextButton = screen.getByTestId("pagination-next");
  expect(nextButton.textContent).toContain("Next");
});

test("should render Previous button click", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Pagination
        pageInfo={mocks[0].result.data.allFilms.pageInfo}
        fetchMore={mocks[0].result.data.allFilms.request}
      />
    </MockedProvider>
  );
  const buttonPrevious = await screen.findByText("Previous");
  userEvent.click(buttonPrevious);
});

test("should render Next button click", async () => {
  render(
    <MockedProvider mocks={mocks} addTypename={false}>
      <Pagination
        pageInfo={mocks[0].result.data.allFilms.pageInfo}
        fetchMore={mocks[0].result.data.allFilms.request}
      />
    </MockedProvider>
  );

  const button = await screen.findByText("Next");
  userEvent.click(button); // Simulate a click and fire the mutation
});
