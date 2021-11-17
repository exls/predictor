# Predictor

Computes values based on provided relations

## Idea

Sometimes we have to predict values based on predictions.

For example we have predictions/formulas:

```any
a = d - b
    c / 2 - b

b = d - a
    c / 2 - a

c = d * 2
    (a + b) * 2

d = a + b
    c / 2
```

In the example above we can predict any parameter with minimal set of inputs. a and b, b and c, etc. This package allows you to compute all others.

## Installation

```sh
yarn add @soloyal/predictor
```

## Usage

```js
import { Predictor, IPredictions } from "@soloyal/predictor";

const predictor = new Predictor<any>()

const predictions: IPredictions = await predictor.build({
    // predicts
    a: "b + c",
    b: "a - c",
    // has many sources, described as array
    c: ["a - b", "x.y", "x.z - 2"],
    d: ["x.z", "f"],
    f: ["d * 2", "x.z * 2"],
    e: 'w - 6',
    x: {
        y: "c",
        z: ["c + 2", "d", "f / 2"],
    },
});

const finalData = await predictor.compute(
  {
    a: 1,
    b: 2,
    // will be ignored
    c: null,
  },
  // options
  { ignoreNulls: true },
  // default data
  { e: 5 },
);
// {a: 1, b: 2, c: -1, d: 1, f: 2, e: 5, x: {y: -1, z: 1}}
```

## Development

git clone

### dev

```sh
yarn build -w
```

### build

```sh
yarn build
```

## Links

- [Traversing AST](https://www.digitalocean.com/community/tutorials/js-traversing-ast) (idea how to parse javascript)
- [AST Parser](https://github.com/acornjs/acorn) (to build dependencies)
- [Node VM](https://nodejs.org/api/vm.html) (to evaluate javascript in context)
- [RxJs](https://rxjs.dev/guide/overview) (to build waiting dependency behavior)

## License

This code and all of its associated software is the
property of SoLoyal Ltd. You may not reproduce or use any part of this code without the express written consent of SoLoyal Ltd.
