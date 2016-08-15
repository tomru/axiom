# Contributing guide 

Contributions are welcome with open arms, the more people that get involved, the more quickly it becomes useful and great...

... however please make sure before Pull Requests:

1. **Code Style.** We've annoyingly added linting (JS and Sass), it's not overly strict but just helps to keep the code consistent... sorry. See below.
1. **Tests.** We're building up our test coverage... please just check that the tests that are there are still running, and that any additional bits you add have tests. See below.
1. **Please keep PRs focussed and to resolve one particular purpose.** 
1. **Please keep commits tidy and atomic.** Use fixups for resolving PR comments. Rebase conflicts and fixups before merging.


##### Style Guide Driven Development (SGDD)

This is an SGDD library, therefore any changes should be reflected in the style guide. It's pretty hard not to do this without blindly adding code without viewing it in the browser ;P


##### Liniting
Run the linters with...

```
npm run lint-sass // Just the Sass
npm run lint-js // Just the JS
npm run lint // "Be Bold" run them both at the same time.
```


##### Tests 
Run the Mocha unit tests with...

```
npm run test
```
