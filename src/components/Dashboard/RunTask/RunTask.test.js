import RunTask from "./RunTask";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("table headers are rendered correctly", () => {
    const { getByTestId } = render( < RunTask / > )
    const taskName = getByTestId("task-name");
    const taskDeadline = getByTestId("task-deadline");
    const action = getByTestId("action");

    expect(taskDeadline.textContent).toBe("Task deadline");
    expect(taskName.textContent).toBe("Task name");
    expect(action.textContent).toBe("Action");
})