# React + TypeScript + Webpack + Gulp

This repo is my attempt to develop `React` using `TypeScript`. 

In order to make it work, I have to:

1. Use `Webpack` to bundle dependencies into a single `.JS` file.
  - Reason 1: Browsers doesn't recoganize Node dependencies.
  - Reason 2: I don't want to load bunch of lib js in the html file.
    
2. Use `Gulp` to live-reload.
  - Reason 1: Once I've used live-reload, I never want to manual reload!!!
  - Reason 2: `Gulp` is simple enough to learn and use.
  - Reason 3: I've never learned `Grant`.

3. Use `VSCode` to compile the `.TSX` files to `.JS` files.
  - Reason 1: `TypeScript` is GREAT! I want to use it on every project I work on.
  - Reason 2: `TS-Loader` in `Webpack` is broken.
  - Reason 3: `VSCode` has built-in support for `TypeScript`.

## How to Start

`
  npm i
  npm start
`

## Version Hisotry

0.1 - This is the initial version.