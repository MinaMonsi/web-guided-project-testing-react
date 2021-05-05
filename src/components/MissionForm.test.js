import React from "react";
import {render} from "@testing-library/react"
import MissionForm from "./MissionForm";

// BDD / TDD: write the tests first, then implement the functionality to make the tests go from red to green

test("MissionForm renders correctly", () => {
    render(<MissionForm />);
});

// test the logic for when the button displays vs displaying a loading message (based off the isFetchingData prop)