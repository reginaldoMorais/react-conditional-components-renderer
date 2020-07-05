import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import Choice from '../Choice';
import InCaseOf from '../InCaseOf';
import Otherwise from '../Otherwise';

describe("<Choice />", () => {
  test(`should render First choice component when first case be true`, () => {
    const { getByText }: RenderResult = render(
      <Choice>
        <InCaseOf test={true}><div>Show First choice</div></InCaseOf>
        <InCaseOf test={false}><div>Show Second choice</div></InCaseOf>
        <Otherwise><div>Show default choice</div></Otherwise>
      </Choice>);
    const elementText = getByText(/Show First choice/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render Second choice component when second case be true`, () => {
    const { getByText }: RenderResult = render(
      <Choice>
        <InCaseOf test={false}><div>Show First choice</div></InCaseOf>
        <InCaseOf test={true}><div>Show Second choice</div></InCaseOf>
        <Otherwise><div>Show default choice</div></Otherwise>
      </Choice>);
    const elementText = getByText(/Show Second choice/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render Default choice component when any case be true`, () => {
    const { getByText }: RenderResult = render(
      <Choice>
        <InCaseOf test={false}><div>Show First choice</div></InCaseOf>
        <InCaseOf test={false}><div>Show Second choice</div></InCaseOf>
        <Otherwise><div>Show default choice</div></Otherwise>
      </Choice>);
    const elementText = getByText(/Show default choice/i);
    expect(elementText).toBeTruthy();
  });

  test(`shouldn't render any component when any case be true and without OtherWiseComponent`, () => {
    const { container }: RenderResult = render(
      <Choice>
        <InCaseOf test={false}><div>Show First choice</div></InCaseOf>
        <InCaseOf test={false}><div>Show Second choice</div></InCaseOf>
      </Choice>);
    expect(container.firstChild).toBeNull();
  });
});
