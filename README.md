## david-he-module

It's a useless module with the purpose of experimenting npm packages releasing workflow.

To streamline release process, we will use `semantic-release` to assist with this.

## Notes

1. Remove dist tag for a given npm module

```shell
npm dist-tag rm <pkg> <tag>
```

2. Remove a repo tag

```shell
git tag -d <tag>
git push origin :refs/tags/<tag>
```
