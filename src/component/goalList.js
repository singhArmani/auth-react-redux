import React from 'react';
import { map } from 'lodash';
import { bool, arrayOf, string } from 'prop-types';
import { Alert } from 'react-bootstrap';

import Goal from '../common/goal';

const GoalList = props => {
  if (props.isFetchingGoals) {
    return <h3>Fetching GoalList... </h3>;
  }
  if (props.errorFetchingGoals) {
    return <Alert bsStyle="danger">{props.errorFetchingGoals}</Alert>;
  }
  const goalList = map(props.goalList, (goal, i) => (
    <Goal key={`Goal ${i}`} goal={goal} />
  ));
  return <ul>{goalList}</ul>;
};

GoalList.propTypes = {
  isFetchingGoals: bool.isRequired,
  goalList: arrayOf(string).isRequired
};
export default GoalList;
