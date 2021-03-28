workspace(
    name = "simmonmt",
    managed_directories = {"@npm": ["node_modules"]},
)

load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")

http_archive(
    name = "build_bazel_rules_nodejs",
    sha256 = "dd7ea7efda7655c218ca707f55c3e1b9c68055a70c31a98f264b3445bc8f4cb1",
    urls = ["https://github.com/bazelbuild/rules_nodejs/releases/download/3.2.3/rules_nodejs-3.2.3.tar.gz"],
)

http_archive(
    name = "com_google_protobuf",
    sha256 = "65e020a42bdab44a66664d34421995829e9e79c60e5adaa08282fd14ca552f57",
    strip_prefix = "protobuf-3.15.6",
    urls = ["https://github.com/protocolbuffers/protobuf/archive/v3.15.6.tar.gz"],
)

http_archive(
    name = "rules_proto",
    sha256 = "9fc210a34f0f9e7cc31598d109b5d069ef44911a82f507d5a88716db171615a8",
    strip_prefix = "rules_proto-f7a30f6f80006b591fa7c437fe5a951eb10bcbcf",
    urls = [
        "https://github.com/bazelbuild/rules_proto/archive/f7a30f6f80006b591fa7c437fe5a951eb10bcbcf.tar.gz",
    ],
)

load("@build_bazel_rules_nodejs//:index.bzl", "yarn_install")

yarn_install(
    name = "npm",
    package_json = "//:package.json",
    yarn_lock = "//:yarn.lock",
)

load("@npm//@bazel/labs:package.bzl", "npm_bazel_labs_dependencies")

npm_bazel_labs_dependencies()

load("@rules_proto//proto:repositories.bzl", "rules_proto_dependencies", "rules_proto_toolchains")

rules_proto_dependencies()

rules_proto_toolchains()

load("@com_google_protobuf//:protobuf_deps.bzl", "protobuf_deps")

protobuf_deps()
