import React from "react";
import { fireEvent, screen, render } from "@testing-library/react"
import MissionList from "./MissionList";
import MissionsList from "./MissionsList";

// Lifecycle of this component (roughly speaking):
// Initial render. props.missions = []
// When "Get Data" button is clicked, API call begins... (asynchronous cool stuff, Promises)
// Happy path: rerender. props.missions = [real data from the api]
// Sad path: rerender. props.error contains an error message to display

test("MissionsList displays mission names when rerendered with new data", () => {
    render(<MissionsList />)
})