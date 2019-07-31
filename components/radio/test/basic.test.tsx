import React from 'react';
import { render, mount } from 'enzyme';
import Radio from '../Radio';

describe('radio basic feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Radio>Radio</Radio>);
    const wrapper1 = render(<Radio checked />);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper1).toMatchSnapshot();
  });

  it('change event correctly', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Radio onChange={onChange}>Radio</Radio>
    ), { attachTo: container });

    wrapper.find('input').simulate('change');
    expect(onChange).toBeCalled();
  });

  it('focus method', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onFocus = jest.fn();
    const wrapper = mount(<Radio onFocus={onFocus} />, { attachTo: container });

    (wrapper.instance() as Radio).focus();
    expect(onFocus).toBeCalled();
  });

  it('blur method', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onBlur = jest.fn();
    const wrapper = mount(<Radio onBlur={onBlur} />, { attachTo: container });

    (wrapper.instance() as Radio).focus();
    (wrapper.instance() as Radio).blur();
    expect(onBlur).toBeCalled();
  });
});
