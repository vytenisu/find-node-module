# find-node-module

_by Vytenis Urbonavičius_

This library/utility retrieves absolute path to a locally installed node module.

It is sometimes necessary to directly access some file from inside _node_modules_. Problem is - technically there can be multiple _node_modules_ available starting from project root directory and going up from there. These _node_modules_ are resolved recursively and there is absolutely no guarantee that a specific module will always be available at the same location. All in all - hard-coding path to something inside _node_modules_ is a very bad idea.

_find-node-module_ provides a way to avoid such hard-coding by locating which path would actually be used when requiring. This is achieved by creating a wrapper on top of _find-node-modules_ library.

---

## Installation

Local:

```
npm install find-node-module
```

Global:

```
npm install -g find-node-module
```

---

## Usage

```
let NodeModules = require('find-node-module').NodeModules
let nodeModules = new NodeModules(__dirname);
let modulePath = nodeModules.find('npm-dts-webpack-plugin')
```

## CLI Usage

To see usage examples - run without arguments:

```
find-node-module
```

Typical usage (using global install):

```
cd /your/project
find-node-module npm-dts-webpack-plugin
```
