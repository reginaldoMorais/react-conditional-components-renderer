import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import Switch from '../Switch';
import Case from '../Case';

describe("<Switch />", () => {
  test(`should render A component when switch case be A`, () => {
    const { getByText }: RenderResult = render(
      <Switch case="a" default={<div>Show default component</div>}>
        <Case identifier="a"><div>Show A component</div></Case>
        <Case identifier="b"><div>Show B component</div></Case>
      </Switch>);
    const elementText = getByText(/Show A component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render B component when switch case be B`, () => {
    const { getByText }: RenderResult = render(
      <Switch case="b" default={<div>Show default component</div>}>
        <Case identifier="a"><div>Show A component</div></Case>
        <Case identifier="b"><div>Show B component</div></Case>
      </Switch>);
    const elementText = getByText(/Show B component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render Default component when none of switch case be match`, () => {
    const { getByText }: RenderResult = render(
      <Switch case="c" default={<div>Show default component</div>}>
        <Case identifier="a"><div>Show A component</div></Case>
        <Case identifier="b"><div>Show B component</div></Case>
      </Switch>);
    const elementText = getByText(/Show default component/i);
    expect(elementText).toBeTruthy();
  });
});
