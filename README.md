# ecss-postcss-shell
Basic PostCSS setup to facilitate [PostCSS](http://postcss.org) and [Stylelint](http://stylelint.io) with a CSS codebase – as described at [http://ECSS.io](http://ecss.io). The CSS tooling includes autoprefixer and plugins for: variables, mixins, colour functions and nesting. Source maps are also built in and you'll get a notification UI when the CSS is generated.

Stylelint is configured here with my own preferences for Stylelint v5.3. Additional custom Stylelint plugins mentioned in the book are not included here (yet).

## Pre-requisites
You will need [Gulp](http://gulpjs.com) and [Node](http://nodejs.org) installed.

## Usage
1. clone this repo
2. run `npm i` from the command line
3. run `gulp` from the command line
4. Edit styles in the `preCSS` folder and they should build into ./build/
