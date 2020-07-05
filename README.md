# React: Conditional Components Renderer

This library brings React components to render or not children by conditional situations.

## If component

If you need render a component upon if/else conditional, you could use `<If />`.

### Redirect Props

| Property     | Required | Type            | Description                                        |
| ------------ | -------- | --------------- | -------------------------------------------------- |
| **test**     | yes      | boolean         | Conditional boolean test.                          |
| **orElse**   | no       | React Component | Component that will be rendered if the test fails. |
| **children** | yes      | React Component | A child component to render.                       |

Example:

```code
const Compoment = () => {
  return (
    <If test={1 === 1} orElse={<div>Show other component</div>}
      <div>Show component!</div>
    </If>
  );
}
```

## Switch and Case component

If you want to choose render a component by some conditional cases, you could use `<Switch />` `<Case />`.

### Case render Props

This component will be used to verify some case match and render the child.

| Property       | Required | Type             | Description                  |
| -------------- | -------- | ---------------- | ---------------------------- |
| **identifier** | yes      | String or Number | Identifier to test matches.  |
| **children**   | yes      | React Component  | A child component to render. |

### Switch render Props

This component will be group all of cases and to test matches.

| Property     | Required | Type                       | Description                                       |
| ------------ | -------- | -------------------------- | ------------------------------------------------- |
| **case**     | yes      | String or Number or Object | Conditional to test matches.                      |
| **default**  | yes      | React Component            | Component that will be rendered if no case match. |
| **children** | yes      | Array of Case component    | List of Case components to test.                  |

Example:

```code
const Compoment = () => {
  return (
    <Switch case="a" default={<div>Show Default component</div>}>
      <Case identifier="a"><div>Show A component</div></Case>
      <Case identifier="b"><div>Show B component</div></Case>
    </Switch>
  );
}
```

## Choice component

If you want to choose render a component by some conditional tests, you could use `<Choice />` `<InCaseOf /> <Otherwise />`.

### InCaseOf render Props

This component will be used to verify some match and render the child.

| Property     | Required | Type            | Description                  |
| ------------ | -------- | --------------- | ---------------------------- |
| **test**     | yes      | boolean         | Conditional boolean test.    |
| **children** | yes      | React Component | A child component to render. |

### Otherwise render Props

This component will be used to show a child component if none of Case components didn't match the choice.

| Property     | Required | Type            | Description                  |
| ------------ | -------- | --------------- | ---------------------------- |
| **children** | yes      | React Component | A child component to render. |

### Choice render Props

This component will be group all of choices to tests and renderizations.

| Property     | Required | Type                                     | Description                       |
| ------------ | -------- | ---------------------------------------- | --------------------------------- |
| **children** | yes      | Array of InCaseOf or Otherwise Component | List of components to test match. |

Example:

```code
const Compoment = () => {
  const x = 1;
  return (
    <Choice>
      <InCaseOf test={x === 1}><div>Show First choice</div></InCaseOf>
      <InCaseOf test={x === 2}><div>Show Second choice</div></InCaseOf>
      <Otherwise><div>Show default choice</div></Otherwise>
    </Choice>
  );
}
```

## Enjoy the library and Thank you for use it

[Reginaldo Morais](mailto:reginaldo.cmorais@gmail.com)
