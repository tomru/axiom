#!/bin/bash
set -e

if [ "$TRAVIS_PULL_REQUEST" != "false" -o "$TRAVIS_BRANCH" != "$SOURCE_BRANCH" ]; then
    exit 0
fi

openssl aes-256-cbc -K $encrypted_7c2951e40ae6_key -iv $encrypted_7c2951e40ae6_iv -in github_deploy_key.enc -out github_deploy_key -d

# Test SSH connection
if ! ssh git@github.com 2>&1 | grep "BrandwatchLtd/axiom" > /dev/null
then
  echo "Cannot connect to Github via SSH :("
  echo "Please verify the public deploy key is set in BrandwatchLtd/axiom."
  exit 1;
fi

git config --global user.email "ci@brandwatch.com"
git config --global user.name "Brandwatch (via TravisCI)"
git config --global core.sshCommand "ssh -i github_deploy_key -F /dev/null"

npm config set "//registry.npmjs.org/:_authToken=\${NPM_API_KEY}"

yarn build:packages

git checkout master
npx lerna publish --conventional-commits --yes
