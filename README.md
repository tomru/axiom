## Axiom - Pattern Library

A consumable library of UI & UX patterns, that can take you from a blank page to production withoutwithout having to worry about styling and design details. Backed by a Style Guide Driven Development approach and a living style guide, documentation does not become a forgotten seperate task and is automated at a level that still has flexiblity. 

**Status**: In development, unstable, experimental, hazardous ... other off-putting words 

### Getting the Style Guide 

```bash
git clone git@github.com:BrandwatchLtd/axiom.git
cd axiom 
npm install
npm start # Development
npm run prod # Production
```


### Getting started with the Pattern Library in a new App
If you're on the current popular stack train (React, Redux, Webpack etc...) then head over to the [Axiom Starter App](https://github.com/BrandwatchLtd/axiom-starter-app) where it's ready to roll.  

### Getting started with the Pattern Library in an existing App
##### Step 1 - Get the files
The plan is to do the following but it's still in development so it won't work... 

```bash
npm install bw-axiom
```

however there are 2 options... 1) Install from the repos tags OR 2) Set up a private npm registry and publish to it. 

1) package.json 
```json
{
  "dependencies": {
    "bw-axiom": "git+ssh://git@github.com/BrandwatchLtd/axiom.git#v{VERSION_NUMBER}",
  }
}
```

2) Little bit more complicated take a look at [Sinopia](https://github.com/rlidwka/sinopia)

##### Step 2 - Setup [node-sass](https://github.com/sass/node-sass)
The Sass variables are all in the JS files, this is so they can easily be configured and included into JS (it's much easier to get variables into Sass than it is to get them out)... for this we use a custom [sass importer](https://github.com/sass/node-sass#importer--v200---experimental).

Create a JS Sass variable file.
```js
// vars-file.js
import axiomVars from 'bw-axiom/lib/sass';

module.exports = {
  ...axiomVars,
};
```

Where ever you are setting up `node-sass` from, pass in the following importer property...

```js
import { variableImporter } from 'bw-axiom/lib/utils/sass';

const nodeSassConfig = {
  importer: variableImporter('/Absolute/path/to/your/sass/vars-file.js', 'axiom-vars'),
};
```

then just include the variables into your Sass file.
```scss
@include 'axiom-vars';
```




