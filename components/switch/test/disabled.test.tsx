import React from 'react';
import { shallow, render, mount } from 'enzyme';
import Switch from '../index';

describe('switch disabled feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Switch disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('input element has disabled attributes', () => {
    const wrapper = shallow(<Switch disabled />);

    expect(wrapper.find('input[disabled]')).not.toBeNull();
  });

  it('set disabled of switch', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Switch disabled onChange={onChange} />
    ), { attachTo: container });

    wrapper.find('input').simulate('change');
    expect(onChange).not.toBeCalled();
  });
});
