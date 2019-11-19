// IMPORTS
// react
import React, { useState, createContext } from "react";
import { Route } from "react-router-dom";
// contexts
import { UserContext } from './contexts/UserContext';
// components
import Landing from "./views/onboarding/Landing";
import CreateAccount from "./views/onboarding/CreateAccount";
import MobileMenu from "./views/mobile-menu/MobileMenu";
import Dashboard from "./views/dashboard/Dashboard";
import MissionComplete from "./views/mission-complete/MissionComplete";
import Gauge from "./components/molecules/gauge/gauge";
import Atoms from "./views/componentTesting/componentTesting";
import StepStart from "./views/onboarding/steps/StepStart";
import Login from "./views/onboarding/Login";
import Sandbox from './views/sandbox/Sandbox';
import ProfileOverview from './views/profileViews/ProfileOverview';
import Leaderboard from './views/leaderboard/Leaderboard';
import MissionStats from './views/mission-stats/MissionStats';
import ComingSoon from './views/coming-soon/ComingSoon';


//COMPONENT
const App = props => {
  // state hooks
  const [user, setUser] = useState({
    hasLoggedIn: true,
    testing: true
  });

  // useEffect
  // todo

if(!user.hasLoggedIn){
  return(
  <>
  <UserContext.Provider value={user}>
    <Route path='/firstlogin' component={StepStart} /> 
    <Route path="/signup" component={CreateAccount} />
    <Route path="/login" component={Login} />
    <Route exact path="/" component={Landing} />
  </UserContext.Provider>
  </>);
} else {
  return (
    <>
    <UserContext.Provider value={user}>
        <Route path='/' component={MobileMenu} /> 
        <Route exact path="/login" component={Login} />
        <Route path="/dashboard" component={Dashboard} />
        <Route path="/mission-complete" component={MissionComplete} />
        <Route path="/gauge" component={Gauge} />
        <Route path="/atoms" component={Atoms} />
        <Route path='/sandbox' component={Sandbox} />
        <Route path='/profile-overview' component={ProfileOverview}/>
        <Route path='/leaderboard' component={Leaderboard} />
        <Route path='/mission-stats' component={MissionStats} />
        <Route path='/coming-soon' component={ComingSoon} />
    </UserContext.Provider>
    </>
    
  );
}
};

// STYLED COMPONENTS
// todo  

export default App;
