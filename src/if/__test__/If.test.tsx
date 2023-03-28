import React from 'react';
import { render, RenderResult } from '@testing-library/react';

import If from '../If';

describe("<If />", () => {
  test(`should render child component if test be true`, () => {
    const { getByText }: RenderResult = render(<div><If test={true}><div>Show component</div></If></div>);
    const elementText = getByText(/Show component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render child component if test a object not undefined`, () => {
    const someObject = { a: 1 };
    const { getByText }: RenderResult = render(<div><If test={someObject}><div>Show component</div></If></div>);
    const elementText = getByText(/Show component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render child component if test a object param not undefined`, () => {
    const someObject = { a: 1 };
    const { getByText }: RenderResult = render(<div><If test={someObject.a}><div>Show component</div></If></div>);
    const elementText = getByText(/Show component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render Else component if test be false`, () => {
    const { getByText }: RenderResult = render(<div><If test={false} orElse={<div>Show other component</div>}><div>Show component</div></If></div>);
    const elementText = getByText(/Show other component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render Else component if test be undefined`, () => {
    const { getByText }: RenderResult = render(<div><If test={undefined} orElse={<div>Show other component</div>}><div>Show component</div></If></div>);
    const elementText = getByText(/Show other component/i);
    expect(elementText).toBeTruthy();
  });

  test(`should render Else component if test be null`, () => {
    const { getByText }: RenderResult = render(<div><If test={null} orElse={<div>Show other component</div>}><div>Show component</div></If></div>);
    const elementText = getByText(/Show other component/i);
    expect(elementText).toBeTruthy();
  });

  test(`shouldn't render any component if test be false and without Else component`, () => {
    const { container }: RenderResult = render(<If test={false}><div>Show component</div></If>);
    expect(container.firstChild).toBeNull();
  });
});
