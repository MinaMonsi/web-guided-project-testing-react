import React from "react";
import {fireEvent, screen, render} from "@testing-library/react"
import MissionForm from "./MissionForm";

// BDD / TDD: write the tests first, then implement the functionality to make the tests go from red to green

test("MissionForm renders correctly", () => {
    render(<MissionForm />);
});

// test the logic for when the button displays vs displaying a loading message (based off the isFetchingData prop)

test("Renders a loading message when fetching data", () => {
    const { getByText } = render(<MissionForm isFetchingData={true} />);
    const message = getByText(/we are fetching data/i); // implicit assertion already here

    expect(message).toBeInTheDocument(); // not necessary, but why not!

    // Also assert that the button doesn't render in this case
    const button = screen.queryByRole("button");
    expect(button).toBeNull();
});

test("Renders a button if not currently fetching data", () => {
    render(<MissionForm isFetchingData={false} />);
    const button = screen.getByRole("button"); // implicit assertion that 1 and only 1 button is in the DOM

    expect(button).toHaveTextContent(/get data/i);

    // Also assert that the loading message doesn't render in this case
    const message = screen.queryByText(/we are fetching data/i);
    expect(message).toBeNull();
});

test("Calls getData function on button click", () => {
    const mockGetData = jest.fn(() => { return "hi josh" });
    render(<MissionForm getData={mockGetData} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    // Assert that our mock function was called

    expect()
})

// Forget about DRY in your tests
// Instead: AHA - avoid hasty abstractions
// sometimes, even WET - write everything twice! (ex: renders)