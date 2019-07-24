import React from 'react';
import { render, shallow } from 'enzyme';
import Button from '../index';

describe('button size feature', () => {
  it('render correctly', () => {
    const wrapper = render((
      <div>
        <Button size="large">Large</Button>
        <Button>Normal</Button>
        <Button size="small">Small</Button>
      </div>
    ));

    expect(wrapper).toMatchSnapshot();
  });

  it('button group size prop rewrite button size prop', () => {
    const wrapper = shallow((
      <Button.Group size="small">
        <Button size="small">Small</Button>
        <Button>Normal</Button>
        <Button size="large">Large</Button>
      </Button.Group>
    ));
    const children = wrapper.children();

    expect(children.someWhere((child) => child.prop('size') === 'small')).toBeTruthy();
  });
});
