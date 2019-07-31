import React from 'react';
import { render, mount } from 'enzyme';
import Radio from '../Radio';

describe('radio group feature', () => {
  it('renders correctly', () => {
    const wrapper = render((
      <Radio.Group>
        <Radio value="foo">Foo</Radio>
        <Radio value="bar">Bar</Radio>
      </Radio.Group>
    ));

    expect(wrapper).toMatchSnapshot();
  });

  it('change event correctly', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Radio.Group value="bar" onChange={onChange}>
        <Radio value="foo">Foo</Radio>
        <Radio value="bar">Bar</Radio>
      </Radio.Group>
    ), { attachTo: container });

    wrapper.find('input[value="foo"]').simulate('change');
    expect(onChange).toBeCalled();
  });

  it('set disabled of checkbox group', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Radio.Group disabled value="bar" onChange={onChange}>
        <Radio value="foo">Foo</Radio>
        <Radio value="bar">Bar</Radio>
      </Radio.Group>
    ), { attachTo: container });

    wrapper.find('input[value="foo"]').simulate('change');
    expect(onChange).not.toBeCalled();
  });
});
