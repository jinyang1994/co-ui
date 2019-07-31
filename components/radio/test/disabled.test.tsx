import React from 'react';
import { render, shallow, mount } from 'enzyme';
import Radio from '../Radio';

describe('radio disabled feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Radio disabled />);

    expect(wrapper).toMatchSnapshot();
  });

  it('input element has disabled attributes', () => {
    const wrapper = shallow(<Radio disabled />);

    expect(wrapper.find('input[disabled]')).not.toBeNull();
  });

  it('set disabled of checkbox', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Radio onChange={onChange} disabled />
    ), { attachTo: container });

    wrapper.find('input').simulate('change');
    expect(onChange).not.toBeCalled();
  });
});
