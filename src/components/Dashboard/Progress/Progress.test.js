import Progress from "./Progress";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("progress bar starts at correct width", () => {
    const { getByTestId } = render( < Progress / > )
    const progressBar = getByTestId("progress-bar");

    expect(progressBar).toHaveStyle(`
        width: 50%;
    `)
})