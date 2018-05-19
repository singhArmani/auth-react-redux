import React from 'react';
import PropViewer from '../propViewer';

import renderer from 'react-test-renderer';

describe('PropViewer', () => {
  const testProps = {
    match: {
      url: 'testUrl',
      path: 'testPath',
      params: {}
    }
  };
  it('renders correctly', () => {
    const tree = renderer.create(<PropViewer match={testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
