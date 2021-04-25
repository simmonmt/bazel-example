# Purpose

This is a sample project that shows the following things playing reasonably well
together. Playing well in this case means 1) everything compiles, 2) `bazel run
prodserver` starts a web server that serves the compiled bundle, and 3) the page
properly loads. Loading the page instantiates GRPC, React, and Material UI, which
should keep the bundler from dropping anything.

`rules_nodejs` has a number of examples that show various pairs of things working
together, but I had a much harder time than expected getting them all to play
together. Hence this example/demo/whatever.

This project uses the following:

*  Bazel
*  `rules_nodejs`
*  GRPC
*  Typescript
*  WebPack
*  React
*  Material UI

To run it, do this:

```shell
bazel run prodserver
```
