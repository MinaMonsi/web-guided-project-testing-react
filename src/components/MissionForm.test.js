import React from "react";
import {render} from "@testing-library/react"
import MissionForm from "./MissionForm";

// BDD / TDD: write the tests first, then implement the functionality to make the tests go from red to green

test("MissionForm renders correctly", () => {
    render(<MissionForm />);
});

// test the logic for when the button displays vs displaying a loading message (based off the isFetchingData prop)

test("Renders a loading message when isFetchingData is true", () => {
    const { getByText } = render(<MissionForm isFetchingData={true} />);
    const message = getByText(/we are fetching data/i); // implicit assertion already here

    expect(message).toBeInTheDocument(); // not necessary, but why not!
});

test("Renders a button when isFetchingData is false", () => {
    render(<MissionForm isFetchingData={false} />);
});

// Forget about DRY in your tests
// Instead: AHA - avoid hasty abstractions
// sometimes, even WET - write everything twice! (ex: renders)