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

If you want to choose render a component by some conditionals, you could use `<Switch />` `<Case />`.

### Case render Props

| Property       | Required | Type             | Description                  |
| -------------- | -------- | ---------------- | ---------------------------- |
| **identifier** | yes      | String or Number | Identifier to test matches.  |
| **children**   | yes      | React Component  | A child component to render. |

### Switch render Props

| Property     | Required | Type                    | Description                                       |
| ------------ | -------- | ----------------------- | ------------------------------------------------- |
| **case**     | yes      | Array of Case component | List of Case components to test and render.       |
| **default**  | yes      | React Component         | Component that will be rendered if no case match. |
| **children** | yes      | React Component         | A child component to render.                      |

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

## Enjoy the library and Thank you for use it

[Reginaldo Morais](mailto:reginaldo.cmorais@gmail.com)
