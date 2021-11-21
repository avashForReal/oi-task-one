import UploadFile from "./UploadFile";
import { render, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import userEvent from "@testing-library/user-event";

test("header is correct", () => {
    const component = render( < UploadFile / > );
    const dropElement = component.getByTestId("droptext");

    expect(dropElement.textContent).toBe(
        "Drop your files here or click to select your file."
    );
});

test("file input is correct", async() => {
    const file = new File(["hello"], "hello.csv", { type: "text/csv" });

    const component = render( < UploadFile / > );
    const inputElement = component.getByTestId("fileinput");

    userEvent.upload(inputElement, file);

    await waitFor(() => {
        expect(inputElement.files.item(0)).toStrictEqual(file);
        expect(inputElement.files[0]).toStrictEqual(file);
        expect(inputElement.files).toHaveLength(1);
    })

});

test("button is disabled before file upload", () => {
    const component = render( < UploadFile / > );
    const uploadBtn = component.getByTestId("upload-btn");

    expect(uploadBtn).toBeDisabled();
});