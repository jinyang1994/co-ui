import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Button from '../index';
import Icon from '../../icon';

describe('button loading feature', () => {
  it('render correctly', () => {
    const wrapper = render(<Button loading>Loading...</Button>);

    expect(wrapper).toMatchSnapshot();
  });

  it('load element is the first child', () => {
    const wrapper = shallow(<Button loading>Loading...</Button>);
    const loading = wrapper.childAt(0);

    expect(loading.type()).toBe(Icon);
    expect(loading.prop('name')).toBe('loading');
    expect(loading.prop('spin')).toBeDefined();
  });

  it('loading prop rewrite prefix icon prop', () => {
    const wrapper = shallow(<Button icon="face">Button</Button>);

    expect(wrapper.childAt(0).type()).toBe(Icon);
    expect(wrapper.childAt(0).prop('name')).toBe('face');
    wrapper.setProps({ loading: true });
    expect(wrapper.childAt(0).type()).toBe(Icon);
    expect(wrapper.childAt(0).prop('name')).toBe('loading');
  });

  it('disable click events when loading', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onClick = jest.fn();
    const wrapper = mount((
      <Button loading>Loading...</Button>
    ), { attachTo: container });

    wrapper.simulate('click');
    expect(onClick).not.toBeCalled();
  });
});
