import { render, screen  } from "@testing-library/react";
import React from "react";
import MissionsList from "./components/MissionsList";
import MissionList from "./MissionList";

test("MissionList displays mission name when rendered with new data ", () => {
   const {rerender} = render(<MissionsList missions={[]}/>):

    let renderedMissions = screen.ByTestId('mission');
    expect(rerenderedMissions).not.toBeNull();

    rerender(<MissionsList missions={[]} />);
    rerenderMissions = screen.getAllByTestId("mission");
    expect(renderedMissions).toHaveLength(4);
})

est("MissionList displays an error message when the api call fails ", () => {
    const {rerender} = render(<MissionsList missions={[]}/>):
 
     const renderedMissions = screen.ByTestId('mission');
     expect(rerenderedMissions).toBeNull();
 
     rerender(<MissionsList missions={[]} />);
     rerenderMissions = screen.getAllByTestId("mission");
     expect(renderedMissions).toHaveLength(4);
 })
 
