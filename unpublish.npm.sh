#!/bin/bash

version_tag=$1

# use get-parameters to get both in one go and jq to strip out expected value
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

npm dist-tag rm david-he-module $version_tag
npm unpublish david-he-module@$version_tag
