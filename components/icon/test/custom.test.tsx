import React from 'react';
import { shallow } from 'enzyme';
import { mdiCar } from '@mdi/js';
import Icon from '../index';

describe('icon register feature', () => {
  it('register a icon', () => {
    expect(shallow(<Icon name="car" />).type()).toBeNull();
    Icon.register('car', mdiCar);
    expect(shallow(<Icon name="car" />).type()).not.toBeNull();
  });
});
