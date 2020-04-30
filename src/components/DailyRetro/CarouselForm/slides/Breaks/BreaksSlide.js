import React from "react";
import { Link } from "react-router-dom";

import BreaksCard from "../../../../UserDashboard/Main/Metrics/BreaksCard/BreaksCard.js";
import BreaksQuestion from "./BreaksQuestion";

class BreaksSlide extends React.Component {
  render() {
    return (
      <div>
        <BreaksQuestion />

        <div>
          <BreaksCard />
          <a>
            <Link to="https://www.mindful.org/how-to-meditate/" target="_blank">
              <h4>The importance of Taking Breaks</h4>
            </Link>
          </a>
        </div>
      </div>
    );
  }
}

export default BreaksSlide;
