import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import InCaseOf from '../InCaseOf';

describe("<InCaseOf />", () => {
  test(`should render when has any children`, () => {
    const { getByText }: RenderResult = render(<InCaseOf test={true}><div>Show A component</div></InCaseOf>);
    const elementText = getByText(/Show A component/i);
    expect(elementText).toBeTruthy();
  });
});
