import React from 'react';
import renderer from 'react-test-renderer';
import { ContextBox } from 'bw-axiom';

function getComponent(props = {}) {
  return renderer.create(
    <ContextBox { ...props }>
      Lorem ipsum
    </ContextBox>
  );
}

describe('ContextBox', () => {
  it('renders with defaultProps', () => {
    const component = getComponent();
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders top', () => {
    const component = getComponent({ position: 'top' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders right', () => {
    const component = getComponent({ position: 'right' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders bottom', () => {
    const component = getComponent({ position: 'bottom' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders left', () => {
    const component = getComponent({ position: 'left' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders padding none', () => {
    const component = getComponent({ padding: 'none' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders padding small', () => {
    const component = getComponent({ padding: 'small' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders padding large', () => {
    const component = getComponent({ padding: 'large' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('renders custom width', () => {
    const component = getComponent({ width: '20rem' });
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
