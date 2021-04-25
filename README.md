# Purpose

This is a sample project that shows the following things playing reasonably well
together. Playing well in this case means

1. Everything compiles
1. `bazel run prodserver` starts a web server that serves the compiled bundle
1. The page properly loads. Loading the page instantiates GRPC, React, and Material
   UI, which should keep the bundler from dropping anything.

`rules_nodejs` has a number of examples that show various pairs of things working
together, but I had a much harder time than expected getting them all to play
together. Hence this example/demo/whatever.

This project uses the following:

*  [Bazel](https://bazel.build/)
*  [`rules_nodejs`](https://github.com/bazelbuild/rules_nodejs)
*  [GRPC](https://grpc.io/)
*  [Typescript](https://www.typescriptlang.org/) and associated `rules_nodejs`
   rules, specifically `ts_project`. I chose `ts_project` because they're
   apparently trying to deprecate `ts_library` or at least move away from it.
*  A bundler. Specifically, [Rollup](https://rollupjs.org/guide/en/), though I'm
   not wedded to it. I used it because other `rules_nodejs` examples use it and
   I couldn't get WebPack 5 to work.
*  [React](https://reactjs.org/)
*  [Material UI](https://material-ui.com/)

To run it, do this:

```shell
bazel run prodserver
```
