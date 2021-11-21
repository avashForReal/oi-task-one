import Dashboard from "./Dashboard"

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("progress bar is rendered correctly", () => {
    render( < Dashboard / > );
    expect(screen.getByText("Progress Bar")).toBeInTheDocument();
})

test("dropdown is rendered correctly", () => {
    render( < Dashboard / > );
    expect(screen.getByText("Dropdown")).toBeInTheDocument();
})

test("Run task is rendered correctly", () => {
    render( < Dashboard / > );
    expect(screen.getByText("Run Task")).toBeInTheDocument();
})