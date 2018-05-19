import React from 'react';
import GoalList from '../goalList';

import renderer from 'react-test-renderer';


describe('GoalList', () => {
  const testProps = {
    isFetchingGoals: false,
    goalList: ['test goal 1', 'test goal 2']
  };

  it('renders correctly', () => {
    const tree = renderer.create(<GoalList {...testProps} />).toJSON();
    expect(tree.children.length).toBe(2);
    expect(tree).toMatchSnapshot();
  });
});
