import { render, screen } from "@testing-library/react";
import Species from "./Species";

test("renders Species", () => {
  render(<Species />);
  const cardTitle = screen.getByTestId("species-classification");
  expect(cardTitle.textContent).toContain("Classification:");
});
