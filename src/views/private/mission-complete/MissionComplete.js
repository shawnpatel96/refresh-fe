// IMPORTS
// react
import React, { useState, useContext } from "react";
// styled components
import styled from "styled-components";
// contexts
import { UserMissionsContext } from "../../../contexts/UserMissionsContext";
// helpers
import { test, flex } from "../../../styles/global/Mixins";
// components
import MissionCard from "./MissionCard";
import MissionInput from "./MissionInput";
import Congrats from "./Congrats";
import { axiosWithAuth } from "../../../helpers/axiosWithAuth";

// DUMMY DATA
// adding some dummy data so that i can work out basic props drilling
// this will probably change a lot after BE figures out all of the data models
// but we can use it for now to move forward on FE -JC


// COMPONENT
const MissionComplete = props => {
  // contexts
  const userMissions = useContext(UserMissionsContext);
  const {missions} = userMissions
  console.log("[userMissions]", userMissions);

  // state hooks
  const [drawer, setDrawer] = useState({
    status: "closed",
    darken: "inactive"
  });

  const [congratsScreen, setCongratsScreen] = useState({
    status: "closed"
  });

  const [selectedMission, setSelectedMission] = useState(null);

  const [missionTracker, setMissionTracker] = useState([]);

  // handlers
  const handleDrawer = e => {
    drawer.status === "closed"
      ? setDrawer({ ...drawer, status: "open", darken: "active" })
      : setDrawer({ ...drawer, status: "closed", darken: "inactive" });
  };

  const submitMissions = e => {
    e.preventDefault();
    congratsScreen.status === "closed"
      ? setCongratsScreen({ ...congratsScreen, status: "open" })
      : setCongratsScreen({ ...congratsScreen, status: "closed" });

    drawer.darken === "inactive"
      ? setDrawer({ ...drawer, darken: "active" })
      : setDrawer({ ...drawer, darken: "inactive" });
  };

  const submitMissionTracker = e => {
   
    axiosWithAuth()
      .post("/answers", missionTracker)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  };
  console.log("[Mission Tracker]", missionTracker);
  // render
  return (
    <MCView>
      <Darken className={drawer.darken} onClick={handleDrawer} />
      <MCWrapper>
        <MCContainer>
          <h2 className="mission-message">What mission did you complete?</h2>

          <MissionsWrapper>
            {missions.map(mission => {
              mission.handleDrawer = handleDrawer;
              mission.setSelectedMission = setSelectedMission;
              return <MissionCard key={mission.mission_id} mission={mission} />;
            })}
          </MissionsWrapper>

          <ContinueButton onClick={submitMissions}>Continue</ContinueButton>
        </MCContainer>

        <MissionInput
          handleDrawer={handleDrawer}
          status={drawer.status}
          missions={userMissions}
          selectedMission={selectedMission}
          missionTracker={missionTracker}
          setMissionTracker={setMissionTracker}
          drawerStatus={drawer.status}
        />

        <Congrats
          status={congratsScreen.status}
          handleClose={submitMissions}
          submitMissionTracker={submitMissionTracker}
        />
      </MCWrapper>
    </MCView>
  );
};

// STYLED COMPONENTS

const MCView = styled.div`
  width: 100vw;
  height: 100vh;
  max-height: 100vh;
  padding-top: 5rem;
  background-color: #3a3699;
`;

const MCWrapper = styled.div`
  width: 100%;
`;

const MCContainer = styled.div`
  width: 90%;
  margin: 0 auto;
  ${flex.flexCol}

  .mission-message {
    font-size: 3.5rem;
    letter-spacing: 0.25rem;
    font-weight: bold;
    color: #fff;
    margin: 3rem 2rem;
  }
`;

const MissionsWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: top;
`;

const ContinueButton = styled.button`
  width: 80%;
  height: 5rem;
  background-color: #6487ff;
  border: none;
  border-radius: 3px;
  box-shadow: 0px 4px 10px rgba(21, 15, 172, 0.1);
  margin: 2rem 0;
  font-size: 1.5rem;
  color: #fff;
  font-weight: normal;
  letter-spacing: 0.15rem;
  &:hover {
    cursor: pointer;
  }
`;

const Darken = styled.div`
  transition-property: all;
  transition: 0.5s;

  &.active {
    width: 100%;
    height: 100vh;
    position: fixed;
    bottom: 10rem;
    background-color: rgba(0, 0, 0, 0.5);
  }

  &.inactive {
    width: 100%;
    height: 0vh;
    position: fixed;
    bottom: 10rem;
    background-color: rgba(0, 0, 0, 0);
  }
`;

// EXPORT
export default MissionComplete;
