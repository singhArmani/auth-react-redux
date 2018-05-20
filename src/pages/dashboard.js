import React from 'react';
import { Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { object, bool, arrayOf, string } from 'prop-types';
import GoalList from '../component/goalList';
import { getGoals } from '../actions/goal';

class Dashboard extends React.PureComponent {
  static propTypes = {
    errorFetchingGoals: object,
    isFetchingGoals: bool.isRequired,
    goalList: arrayOf(string).isRequired
  };

  handleClick = () => {
    this.props.getGoals();
  };
  render() {
    return (
      <div>
        <h1>Welcome</h1>
        <p>
          This is a secret dashboard. You only suppose to see this you are
          authenticated!
        </p>
        <Button
          onClick={this.handleClick}
          disabled={this.props.isFetchingGoals}
        >
          Get My Goals
        </Button>
        <GoalList
          isFetchingGoals={this.props.isFetchingGoals}
          goalList={this.props.goalList}
          errorFetchingGoals={this.props.errorFetchingGoals}
        />
      </div>
    );
  }
}

export default connect(
  state => ({
    goalList: state.goal.goalList,
    isFetchingGoals: state.goal.isFetchingGoals,
    errorFetchingGoals: state.goal.errorFetchingGoals
  }),
  dispatch => ({
    getGoals: () => dispatch(getGoals())
  })
)(Dashboard);
