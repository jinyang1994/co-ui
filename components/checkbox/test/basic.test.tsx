import React from 'react';
import { mount, render } from 'enzyme';
import Checkbox from '../index';

describe('checkbox basic feature', () => {
  it('renders correctly', () => {
    const wrapper = render(<Checkbox />);
    const wrapper1 = render(<Checkbox>Checkbox</Checkbox>);

    expect(wrapper).toMatchSnapshot();
    expect(wrapper1).toMatchSnapshot();
  });

  it('change event correctly', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Checkbox value="foo" onChange={onChange}>
        Checkbox
      </Checkbox>
    ), { attachTo: container });

    wrapper.find('input').simulate('change');
    expect(onChange).toBeCalled();
  });

  it('focus method', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onFocus = jest.fn();
    const wrapper = mount((
      <Checkbox onFocus={onFocus}>
        Checkbox
      </Checkbox>
    ), { attachTo: container });

    (wrapper.instance() as Checkbox).focus();
    expect(onFocus).toBeCalled();
  });

  it('blur method', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onBlur = jest.fn();
    const wrapper = mount((
      <Checkbox onBlur={onBlur}>
        Checkbox
      </Checkbox>
    ), { attachTo: container });

    (wrapper.instance() as Checkbox).focus();
    (wrapper.instance() as Checkbox).blur();
    expect(onBlur).toBeCalled();
  });
});
