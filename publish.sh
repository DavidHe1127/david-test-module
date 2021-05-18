#!/bin/bash

export AWS_PROFILE=qq

export GITHUB_TOKEN=$(aws ssm get-parameter \
    --name /lab/github \
    --query Parameter.Value \
    --output text \
    --with-decryption)

export NPM_TOKEN=$(aws ssm get-parameter \
    --name /lab/npm \
    --query Parameter.Value \
    --output text \
    --with-decryption)

npx semantic-release
