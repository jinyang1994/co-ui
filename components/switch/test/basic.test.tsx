import React from 'react';
import { mount, render } from 'enzyme';
import Switch from '../index';

describe('switch basic feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Switch />);

    expect(wrapper).toMatchSnapshot();
  });

  it('change event correctly', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Switch onChange={onChange} />
    ), { attachTo: container });

    wrapper.find('input').simulate('change');
    expect(onChange).toBeCalled();
  });
});
