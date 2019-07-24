import React from 'react';
import { shallow, render } from 'enzyme';
import Button from '../index';
import Icon from '../../icon';

describe('button icon feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Button icon="face">Icon Button</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('in the props', () => {
    const wrapper = shallow(<Button icon="face">Icon Button</Button>);
    const icon = wrapper.childAt(0);

    expect(icon.type()).toBe(Icon);
    expect(icon.prop('name')).toBe('face');
  });

  it('in the children', () => {
    const wrapper = shallow((
      <Button icon="face">
        <Icon name="face" />
        Icon Button
        <Icon name="plus" />
      </Button>
    ));
    const children = wrapper.children();
    const prefixIcon = children.first();
    const suffixIcon = children.last();

    expect(prefixIcon.type()).toBe(Icon);
    expect(prefixIcon.prop('name')).toBe('face');
    expect(suffixIcon.type()).toBe(Icon);
    expect(suffixIcon.prop('name')).toBe('plus');
  });
});
