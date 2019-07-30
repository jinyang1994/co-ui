import React from 'react';
import { render, mount } from 'enzyme';
import Checkbox from '../index';

describe('checkbox group feature', () => {
  it('renders correctly', () => {
    const wrapper = render((
      <Checkbox.Group value={['foo']}>
        <div>
          <Checkbox value="foo">Foo</Checkbox>
        </div>
        <div>
          <Checkbox value="bar">Bar</Checkbox>
        </div>
      </Checkbox.Group>
    ));

    expect(wrapper).toMatchSnapshot();
  });

  it('change event correctly', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Checkbox.Group value={['foo']} onChange={onChange}>
        <div>
          <Checkbox value="foo">Foo</Checkbox>
        </div>
        <div>
          <Checkbox value="bar">Bar</Checkbox>
        </div>
      </Checkbox.Group>
    ), { attachTo: container });

    wrapper.find('input[value="foo"]').simulate('change');
    expect(onChange).toBeCalled();
  });

  it('set disabled of checkbox group', () => {
    const container = document.createElement('div');
    document.body.appendChild(container);
    const onChange = jest.fn();
    const wrapper = mount((
      <Checkbox.Group disabled value={['foo']} onChange={onChange}>
        <div>
          <Checkbox value="foo">Foo</Checkbox>
        </div>
        <div>
          <Checkbox value="bar">Bar</Checkbox>
        </div>
      </Checkbox.Group>
    ), { attachTo: container });

    wrapper.find('input[value="foo"]').simulate('change');
    expect(onChange).not.toBeCalled();
  });
});
