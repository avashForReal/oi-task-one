import ViewTable from "./ViewTable";

import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

test("table headers are rendered correctly", () => {
    const { getByTestId } = render( < ViewTable / > );
    const name = getByTestId("name");
    const email = getByTestId("email")
    const phone = getByTestId("phone")
    const job = getByTestId("job")
    const company = getByTestId("company")


    expect(name.textContent).toBe("Name");
    expect(email.textContent).toBe("Email");
    expect(phone.textContent).toBe("Phone");
    expect(company.textContent).toBe("Company");
    expect(job.textContent).toBe("Job title");
})