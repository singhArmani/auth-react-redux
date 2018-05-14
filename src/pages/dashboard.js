import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Goals from '../component/goals';
import { getGoals } from '../actions/goal';

class Dashboard extends React.PureComponent {

  static propTypes = {
    isFetchingGoals: PropTypes.bool.isRequired,
    goals: PropTypes.arrayOf(PropTypes.string).isRequired
  };

  handleClick = () => {
    this.props.getGoals();
  }
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>
          This is a secret dashboard. You only suppose to see this you are
          authenticated!
        </p>
        <Button onClick={this.handleClick} disabled={this.props.isFetchingGoals}>
          Get My Goals
        </Button>
        <Goals goals={this.props.goals} errorFetchingGoals ={this.props.errorFetchingGoals}/>
      </div>
    );
  }
}

export default connect(state => ({
  goals: state.goal.goals,
  isFetchingGoals: state.goal.fetchingGoals,
  errorFetchingGoals: state.goal.errorFetchingGoals
}), dispatch => ({
  getGoals: () => dispatch(getGoals())
}) )(Dashboard);
