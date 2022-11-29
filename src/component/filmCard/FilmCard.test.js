import { render, screen } from "@testing-library/react";
import FilmCard from "./FilmCard";

test("renders film care title", () => {
  render(<FilmCard />);
  const cardTitle = screen.getByTestId("film-card-title");
  expect(cardTitle.textContent).toContain("Film :");
});

test("renders film card director", () => {
  render(<FilmCard />);
  const cardDirector = screen.getByTestId("film-card-director");
  expect(cardDirector.textContent).toContain("Director:");
});

test("renders film species", () => {
  render(<FilmCard />);
  const cardSpecies = screen.getByTestId("film-card-species");
  expect(cardSpecies.textContent).toContain("Species");
});
