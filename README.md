## david-test-module

It's a useless module with the purpose of experimenting npm packages releasing workflow.

To streamline release process, we will use `semantic-release` to assist with this.

### Prerelease workflow

Suppose you have your module at `v1.3.0` at the moment. And you want to bump it up to `v1.4.0` with some features. You want to use pre-release supported by `semantic-release`. Below shows sequential steps

- New a `prerelease` branch from `master`.
- New a `feature/a` branch from `master`.
- After dev is done, file a PR, review and merge `a` into `prerelease`.
- Checkout `prerelease` and run `semantic-release`

This will create a resulting `module@1.4.0-prerelease.1`.

Repeat above steps for features `b`, `c` and `d`.

Final pre-release should be `module@1.4.0-prerelease.4`.

Now to promote it to GA, file a PR to merge it to `master`.

Once merged, do another release from `master` which will finally get you `v1.4.0`.
