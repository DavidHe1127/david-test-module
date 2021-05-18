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

export SLACK_WEBHOOK=$(aws ssm get-parameter \
    --name /lab/slack-webhook \
    --query Parameter.Value \
    --output text)

npx semantic-release
