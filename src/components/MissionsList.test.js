import React from "react";
import { fireEvent, screen, render } from "@testing-library/react"
import MissionsList from "./MissionsList";

// Lifecycle of this component (roughly speaking):
// Initial render. props.missions = []
// When "Get Data" button is clicked, API call begins... (asynchronous cool stuff, Promises)
// Happy path: rerender. props.missions = [real data from the api]
// Sad path: rerender. props.error contains an error message to display

test("MissionsList displays mission names when rerendered with new data", () => {
    const { rerender } = render(<MissionsList missions={[]} />);

    let renderedMissions = screen.queryByTestId("mission");
    expect(renderedMissions).toBeNull();

    // Simulate a successful api call, leading to a props change that triggers a rerender
    rerender(<MissionsList missions={[]});
    renderedMissions = screen.getAllByTestId("mission");
    expect(renderedMissions).toHaveLength(4);
})