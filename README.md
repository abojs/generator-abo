# generator-abo [![Build Status](https://secure.travis-ci.org/zkochan/generator-abo.png?branch=master)](https://travis-ci.org/zkochan/generator-abo)

> [Yeoman](http://yeoman.io) generator for front-end A/B experiments.

## Usage

For step-by-step instructions on using [abo](https://github.com/zkochan/abo) and this generator see [this](http://www.kochan.io/ab/vanilla-ab-testing-with-abo.html) tutorial.

Install `yo`, `ung`, `foso` and `fosify-js`:

```bash
npm install -g yo ung foso fosify-js
```

Make a new directory, and `cd` into it:

```bash
mkdir my-new-project && cd $_
```

Run `yo abo`.

Run `foso build` for building and `foso serve` for preview.


## Generators

Available generators:

* [abo](#app) (aka [abo:app](#app))
* [abo:expt](#experiment)


### App

Sets up a new abo app, generating all the boilerplate you need to get started. The app generator also installs abo and additional modules, such as abo-demo.

Example:
```bash
yo abo
```


### Experiment

Sets up a new abo experiment.

Example:
```bash
yo abo:expt
```


## License

MIT
