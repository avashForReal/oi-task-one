import App from "./App";
import Dashboard from "./components/Dashboard/Dashboard";
import UploadFile from "./components/FileUpload/UploadFile";
import Form from "./components/Form/Form";
import ViewTable from "./components/Table/ViewTable";

import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router";
import "@testing-library/jest-dom/extend-expect";

jest.mock("./components/Dashboard/Dashboard");
jest.mock("./components/FileUpload/UploadFile");
jest.mock("./components/Form/Form");
jest.mock("./components/Table/ViewTable");

describe("Tests for app router", () => {
  test("Should render upload file on default route", () => {
    // Arrange
    UploadFile.mockImplementation(() => <div>Upload File Mock</div>);
    // Act
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    // Assert
    expect(screen.getByText("Upload File Mock")).toBeInTheDocument();
  });

  test("Should render table in table route", () => {
    // Arrange
    ViewTable.mockImplementation(() => <div>Table Mock</div>);
    // Act
    render(
      <MemoryRouter initialEntries={["/table"]}>
        <App />
      </MemoryRouter>
    );
    // Assert
    expect(screen.getByText("Table Mock")).toBeInTheDocument();
  });

  test("Should render form in form route", () => {
    // Arrange
    Form.mockImplementation(() => <div>Form Mock</div>);
    // Act
    render(
      <MemoryRouter initialEntries={["/form"]}>
        <App />
      </MemoryRouter>
    );
    // Assert
    expect(screen.getByText("Form Mock")).toBeInTheDocument();
  });

  test("Should render dashboard in dashboard route", () => {
    // Arrange
    Dashboard.mockImplementation(() => <div>Dashboard Mock</div>);
    // Act
    render(
      <MemoryRouter initialEntries={["/dashboard"]}>
        <App />
      </MemoryRouter>
    );
    // Assert
    expect(screen.getByText("Dashboard Mock")).toBeInTheDocument();
  });

  
});
