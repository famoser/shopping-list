# Introduction

[![MIT licensed](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE) 
[![PHP Composer](https://github.com/famoser/shopping-list/actions/workflows/php.yml/badge.svg)](https://github.com/famoser/shopping-list/actions/workflows/php.yml)
[![Node.js Encore](https://github.com/famoser/shopping-list/actions/workflows/node.js.yml/badge.svg)](https://github.com/famoser/shopping-list/actions/workflows/node.js.yml)
[![Scrutinizer](https://scrutinizer-ci.com/g/famoser/shopping-list/badges/quality-score.png?b=master)](https://scrutinizer-ci.com/g/famoser/shopping-list)

## About

Shopping list helps flat mates to coordinate grocery shopping.

<p align="center">
  <img src="assets/images/screenshot1.png?raw=true" alt="Screenshot">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img src="assets/images/screenshot2.png?raw=true" alt="Screenshot">
&nbsp; &nbsp; &nbsp; &nbsp;
  <img src="assets/images/screenshot3.png?raw=true" alt="Screenshot">
</p>


## Release

`famoser/agnes` is set up to release new versions & deploy them.

- `./vendor/bin/agnes release v1.0.0 main` to release from main (will automatically deploy to dev)
- `./vendor/bin/agnes deploy *:*:prod v1.0.0` to deploy the release to production
