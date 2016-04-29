![](https://i.imgur.com/R4HFtC9.png) lecture-02 build tools
===============================================

# Topics
* lab-01-modular-patterns code review
* Pass by Reference vs. Pass by Value
* npm 
* requre cache
* eslint
* gulp

## pass by reference
* objects and arrays are passed by reference
* functions are objects :)
* how do i pass an object by value?
 * ` JSON.parse(JSON.stringify(obj)) `

## pass by value
* primitive types are passed by value (copy)

## npm 
* node package manager
* the *npm registry* is a collection of packages and source code for the JS community
* `npm` the command line interface **(cli)** that allows developers to install and publish packages
* [how it works](https://docs.npmjs.com/how-npm-works/packages)
* **module** 
 * anything that can be loded using a require statment
* **package** 
 * a file or directory that is described by a package.json

#### package.json
* [getting started with package.json](https://docs.npmjs.com/getting-started/using-a-package.json)
* Bare minimum 
 * name
 * version
* main = what will be required with a `require()` statement
* scripts = named scripts for testing, development, and deployment
* by defaut there is an empty test script 
* **dependencies**
 * `--save`
   * the tings your package **needs** to run
 * `--save-dev`
   * the things you developers **need** to contribute

## require cache
* `global.require.cache`
* is an object, so it is passed by reference
* if you change state in a module on the require cache, it will chage for all files that you include that module in


## eslint 
* [Getting started](http://eslint.org/docs/user-guide/getting-started)
* [Advanced Configuration](http://eslint.org/docs/user-guide/configuring)
* javascript linter

## gulp
* javascript automation tool
* [Getting Started](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [Gulp API Docs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)

