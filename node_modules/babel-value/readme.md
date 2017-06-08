# babel-value [![Build Status](https://travis-ci.org/jamestalmage/babel-value.svg?branch=master)](https://travis-ci.org/jamestalmage/babel-value) [![Coverage Status](https://coveralls.io/repos/github/jamestalmage/babel-value/badge.svg?branch=master)](https://coveralls.io/github/jamestalmage/babel-value?branch=master)

> Compute simple values from a babel AST.

Will compute the value of an expression AST that was generated using babel. It will not perform any computations, will not hunt down the value of referenced identifiers, etc. It will handle complex object and array literals, as long as they in turn contain nothing computed.

Basically, if the source code that generated the AST looks similar to valid JSON, this should work.

## Install

```
$ npm install --save babel-value
```


## Usage

```js
const babelValue = require('babel-value');

babelValue({
  type: 'StringLiteral',
  value: 'foo'
});
//=> 'foo'
```


## API

### babelValue(node)

Returns the computed value of the node, throws if it contains any computed values or identifiers.

#### input

Type: `Node`

A babel AST node.



## License

MIT © [James Talmage](http://github.com/jamestalmage)
