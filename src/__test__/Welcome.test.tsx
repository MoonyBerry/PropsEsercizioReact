import * as matchers from "@testing-library/jest-dom/matchers";
import { render } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Welcome } from "../Welcome";

expect.extend(matchers);

describe("<Welcome />", () => {
  it("renders props correctly", () => {
    const { container } = render(<Welcome name="Aldo" age={30} />);
    expect(container).toHaveTextContent("Welcome, Aldo!Your age is 30");
  });
});
