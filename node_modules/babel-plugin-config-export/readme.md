# babel-plugin-config-export [![Build Status](https://travis-ci.org/jamestalmage/babel-plugin-config-export.svg?branch=master)](https://travis-ci.org/jamestalmage/babel-plugin-config-export) [![Coverage Status](https://coveralls.io/repos/github/jamestalmage/babel-plugin-config-export/badge.svg?branch=master)](https://coveralls.io/github/jamestalmage/babel-plugin-config-export?branch=master)

> Export config options from source files without actually running them.


## Install

```
$ npm install --save babel-plugin-config-export
```


## Usage

Get the value of a specially named export without running a file. The export must not contain any computed values, and must be computable in place:

```js
// in a source file
export const myConfig = {
  serial: true,
  topLevel: true
};
```

```js
// when processing sources
import makePlugin from 'babel-plugin-config-export';

const myPlugin = makePlugin('myConfig');

const result = babel.transform(sourceString, {
  plugins: [myPlugin]
});

myPlugin.getConfig(result);
// {serial: true, topLevel: true}
```

## API

### makePlugin(configName)

Creates a babel plugin that will extract the `configName` export, and store it in the parse result metadata. Returns a babel plugin.

#### configName

Type: `string`

The named export to compute.

### makePlugin.getConfig(parseResult, configName)
### generatedPlugin.getConfig(parseResult)

Extracts the computed value from the parse result metadata. The generated plugin has a curried `getConfig` that does not require passing `configName`.



## License

MIT © [James Talmage](http://github.com/jamestalmage)
