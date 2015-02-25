# is-before


## installation

```sh
$ npm install is-before
```

## usage

```js
var isBefore = require('is-before')

var now = new Date()
var sometimeInThePast = new Date('1/1/1983')

isBefore(sometimeInThePast, now) // true
```

## tests

```sh
$ npm install
$ npm test
```
