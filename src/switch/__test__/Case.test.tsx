import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import Case from '../Case';

describe("<Case />", () => {
  test(`should render when has any children`, () => {
    const { getByText }: RenderResult = render(<Case identifier="a"><div>Show A component</div></Case>);
    const elementText = getByText(/Show A component/i);
    expect(elementText).toBeTruthy();
  });
});
