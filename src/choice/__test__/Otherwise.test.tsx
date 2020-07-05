import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import Otherwise from '../Otherwise';

describe("<Otherwise />", () => {
  test(`should render when has any children`, () => {
    const { getByText }: RenderResult = render(<Otherwise><div>Show A component</div></Otherwise>);
    const elementText = getByText(/Show A component/i);
    expect(elementText).toBeTruthy();
  });
});
