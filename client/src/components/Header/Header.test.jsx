import { describe, expect, it } from "vitest";
import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header Component", () => {
  it("should have a title header", () => {
    render(<Header />);

    const copyrightText = screen.getByTestId("baddie-header");
    expect(copyrightText).toBeInTheDocument();
  });
});
