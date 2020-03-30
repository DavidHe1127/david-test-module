#!/bin/bash

tag=$1

export GITHUB_TOKEN=$(aws ssm get-parameter \
    --name /lab/github \
    --query Parameter.Value \
    --output text \
    --with-decryption)

export NPM_TOKEN=$(aws ssm get-parameter \
    --name '/lab/npm' \
    --query Parameter.Value \
    --output text \
    --with-decryption)

git tag -d $tag
git push origin :refs/tags/$tag

# above operation can only delete git tags but change release status to draft rather than deleting it
# You should manually delete it from GitHub
# see link below to automate this process
# https://stackoverflow.com/questions/38105323/command-to-remove-github-draft-release/38107725
