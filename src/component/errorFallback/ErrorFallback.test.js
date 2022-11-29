import { render, screen } from "@testing-library/react";
import ErrorFallback from "./ErrorFallback";

test("renders Error Fallback", () => {
  render(<ErrorFallback />);
  const cardTitle = screen.getByTestId("error-fallback");
  expect(cardTitle.textContent).toContain("Something was Wrong!");
});
