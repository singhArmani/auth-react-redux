import React from "react";
import { map } from "lodash";
import { Alert } from "react-bootstrap";

import Goal from "../common/goal";

const Goals = props => {
  if (props.isFetchingGoals) {
    return <h3>Fetching Goals... </h3>;
  }
  if (props.errorFetchingGoals) {
    return <Alert bsStyle="danger">{props.errorFetchingGoals}</Alert>;
  }
  const goals = map(props.goals, (goal, i) => (
    <Goal key={`Goal ${i}`} goal={goal} />
  ));
  return <ul>{goals}</ul>;
};
export default Goals;
