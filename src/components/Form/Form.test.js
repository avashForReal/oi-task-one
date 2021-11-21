import Form from "./Form";

import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("institute input works correctly", () => {
    const { getByTestId } = render( < Form / > );
    const inputInstitute = getByTestId("institute");

    expect(inputInstitute.value).toBe("");

})

test("institute input works correctly after value input", () => {
    const { getByTestId } = render( < Form / > );
    const inputInstitute = getByTestId("institute");

    fireEvent.change(inputInstitute, {
        target: {
            value: "abc"
        }
    })

    expect(inputInstitute.value).toBe("abc");
})

test("days input works correctly", () => {
    const { getByTestId } = render( < Form / > );
    const inputDays = getByTestId("days");

    expect(inputDays.value).toBe("");

})

test("days input works correctly after value input", () => {
    const { getByTestId } = render( < Form / > );
    const inputDays = getByTestId("days");

    fireEvent.change(inputDays, {
        target: {
            value: "5"
        }
    })

    expect(inputDays.value).toBe("5");
})

test("csv input works correctly", () => {
    const { getByTestId } = render( < Form / > );
    const inputCsv = getByTestId("csvfile");

    expect(inputCsv.value).toBe("");

})

test("csv input works correctly after value input", () => {
    const { getByTestId } = render( < Form / > );
    const inputCsv = getByTestId("csvfile");

    fireEvent.change(inputCsv, {
        target: {
            value: "csv1"
        }
    })

    expect(inputCsv.value).toBe("csv1");
})