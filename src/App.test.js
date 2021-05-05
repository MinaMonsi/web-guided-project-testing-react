import React from "react";
import { fireEvent, screen, render } from "@testing-library/react"
import App from "./App";

test("renders without blowing up the spaceships!", () => {
    render(<App />);
});

