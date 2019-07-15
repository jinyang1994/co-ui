import React from 'react';
import { shallow } from 'enzyme';
import Button from '../index';

test('test button', () => {
  let num = 0;
  const wrapper = shallow(
    <Button onClick={() => num = 1}>
      Button
    </Button>
  );

  wrapper.simulate('click');
  expect(num).toBe(1);
});
