import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import renderer from 'react-test-renderer';
import ColorSwatch from '../colorSwatch';

describe('ColorSwatch', () => {
  const testProps = {
    text: '',
  };
  it('renders correctly', () => {
    const tree = renderer.create(<Router><ColorSwatch {...testProps} /></Router>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
