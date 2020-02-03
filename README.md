# validations
Trabajo Práctico Profesional, FIUBA, 2020

**Master:** 
  * **Build:** [![Build Status](https://travis-ci.com/fiuba-laboral-v2/validations.svg?branch=master)](https://travis-ci.com/fiuba-laboral-v2/validations)  
  * **Coverage:** [![Coverage Status](https://coveralls.io/repos/github/fiuba-laboral-v2/validations/badge.svg)](https://coveralls.io/github/fiuba-laboral-v2/validations)

# Get started

```
    yarn install
```

### Linter

```
    yarn lint
```

### Test
```
    yarn test
```

### development

Stand on this repository root and run:
```
    yarn link
```

Then, stand on another repository root and add the following to the package.json:
```json
  {
    "dependencies": {
      "validations": "git+https://github.com/fiuba-laboral-v2/validations.git#some-branch"
    }  
  }
```
And then run:
```
    yarn link validations
```
