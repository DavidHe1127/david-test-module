## david-test-module

It's a useless module with the purpose of experimenting npm packages releasing workflow.

To streamline release process, we will use `semantic-release` to assist with this.

### Normal release workflow

Same as what is currently in place.

### Prerelease workflow

- Make sure pre-release branch is in sync with master
- Add pre-release features on pre-release branch
- Run semantic-release from pre-release branch which will result in x.x.x-prerelease.1
- Keep adding them if there is more
- Once you are happy with it, merge into master and release from there to create a GA. Note, need to check no prerelease dep is included.

### Rules

1. Never ever manually modify npm versions or github tags and releases. Failing to do this could result in a big confusion for `semantic-release` to work out the version it needs to release.
2. When determining the next release, `semantic-release` will look through commit history to find the last one on the current branch:

```
* 590e7a2 - (tag: v1.2.0) chore(release): 1.2.0 [skip ci] (19 hours ago) <semantic-release-bot>
```

So, in this case, `semantic-release` will target `1.3.0` for the next release.
