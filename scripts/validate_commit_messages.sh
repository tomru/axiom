#!/bin/bash
set -e

IFS=$'\n';

for MSG in $(git log --no-merges --pretty=format:'%s' origin/master...); do
  npm run validate-commit-msg $MSG || exit 1;
done
