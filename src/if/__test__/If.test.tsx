import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import If from '../If';

describe("<If />", () => {
  test(`should render child component if test be true`, () => {
    const { getByText }: RenderResult = render(<div><If test={true}><div>Show component</div></If></div>);
    const elementText = getByText(/Show component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render Else component if test be false`, () => {
    const { getByText }: RenderResult = render(<div><If test={false} orElse={<div>Show other component</div>}><div>Show component</div></If></div>);
    const elementText = getByText(/Show other component/i);
    expect(elementText).toBeTruthy();
  });

  test(`shouldn't render any component if test be false and without Else component`, () => {
    const { container }: RenderResult = render(<If test={false}><div>Show component</div></If>);
    expect(container.firstChild).toBeNull();
  });
});
