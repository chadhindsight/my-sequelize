import { render, screen } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import Footer from "./Footer";

describe("Footer Component", () => {
  it("renders a link", () => {
    render(<Footer />);

    // Find the link element by its role
    const linkElement = screen.getByRole("link");

    // Footer Assertions
    expect(linkElement).toBeInTheDocument();
    expect(linkElement).toHaveAttribute(
      "href",
      "https://chadhindsight.github.io"
    );
    expect(linkElement).toHaveAttribute("target", "_blank");
    expect(linkElement).toHaveAttribute("rel", "noreferrer");
    expect(linkElement.textContent).toBe("Chad Hinds");
  });

  it("renders the copyright text", async () => {
    // Render the component
    render(<Footer />);

    // Wait for the text " Copyright:" to be present
    const copyrightText = screen.getByTestId("copyright");
    expect(copyrightText).toBeInTheDocument();
  });
});
