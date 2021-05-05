import React from "react";
import { fireEvent, screen, render, wait } from "@testing-library/react"
import App from "./App";

import mockFetchMissions from "./api/fetchMissions";


const mockApiResponse = {
    data:
        [{ mission_name: "ABS", mission_id: "2CF444A", manufacturers: ["Boeing"], payload_ids: ["ABS-3A", "ABS-3B"], wikipedia: "https://en.wikipedia.org/wiki/ABS_(satellite_operator)", website: "http://www.absatellite.com/", twitter: null, description: "ABS, formerly Asia Broadcast Satellite, is a global satellite operator based in Hong Kong and officially incorporated in Bermuda. Its services include direct-to-home and satellite-to-cable TV distribution, cellular services, and internet services. Operating 6 communication satellites, the satellite fleet currently covers 93% of the world’s population including the Americas, Africa, Asia Pacific, Europe, the Middle East, Russia and Commonwealth of Independent States." }, { mission_name: "Eutelsat", mission_id: "F7709F2", manufacturers: ["Boeing"], payload_ids: ["Eutelsat 115 West B", "Eutelsat 117 West B"], wikipedia: "https://en.wikipedia.org/wiki/Eutelsat", website: "https://www.eutelsat.com/en/home.html#", twitter: "https://twitter.com/Eutelsat_SA?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor", description: "Eutelsat S.A. is a European satellite operator. Providing coverage over the entire European continent, the Middle East, Africa, Asia and the Americas, it is the world's third largest satellite operator in terms of revenues." }]
};

jest.mock("./api/fetchMissions");

test("renders without blowing up the spaceships!", () => {
    render(<App />);
});

test("fetches and renders data from the spaceX API", async () => {
    render(<App />);
    mockFetchMissions.mockResolvedValueOnce(mockApiResponse);

    const button = screen.getByRole("button");
    fireEvent.click(button);

    await wait();

})
