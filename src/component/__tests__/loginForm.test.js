import React from 'react';
import renderer from 'react-test-renderer';
import LoginForm from '../loginForm';

describe('LoginForm', () => {
  const testProps = {
    signIn: jest.fn(() => ({})),
    isUserSigningIn: false
  };
  it('renders correctly', () => {
    const tree = renderer.create(<LoginForm {...testProps} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
