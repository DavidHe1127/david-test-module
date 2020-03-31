## david-test-module

It's a useless module with the purpose of experimenting npm packages releasing workflow.

To streamline release process, we will use `semantic-release` to assist with this.

## david-test-module

It's a useless module with the purpose of experimenting npm packages releasing workflow.

To streamline release process, we will use `semantic-release` to assist with this.

### Prerelease workflow

#### Feature

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

### Rules

1. Never ever manually modify npm versions or github tags and releases. Failing to do this could result in a big confusion for `semantic-release` to work out the version it needs to release.
2. When determining the next release, `semantic-release` will look through commit history to find the last one on the current branch:

```
* 590e7a2 - (tag: v1.2.0) chore(release): 1.2.0 [skip ci] (19 hours ago) <semantic-release-bot>
```

So, in this case, `semantic-release` will target `1.3.0` for the next release.
3. `prerelease` should only be used to merge features from `feature` branches and publish pre-release versions. Dev work must not be done there.

