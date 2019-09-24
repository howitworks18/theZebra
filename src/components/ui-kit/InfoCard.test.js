import React from 'react';
import {shallow} from "enzyme";
import {InfoCard} from './InfoCard';

it('displays props passed', () => {
  const wrapper = shallow(
  <InfoCard 
    type={0}
    name={'name'}
    tagline={'tag line'}
    rate={500}
    starRating={5}/>
  )
  expect(wrapper.text().includes(0)).toBe(true);
  expect(wrapper.text().includes('name')).toBe(true);
  expect(wrapper.text().includes('tag line')).toBe(true);
  expect(wrapper.text().includes(500)).toBe(true);
  expect(wrapper.text().includes(5)).toBe(true);
});

