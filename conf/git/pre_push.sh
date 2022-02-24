#!/usr/bin/env bash

echo "Running pre-push hook"
./conf/git/run_tests.sh

# $? stores exit value of the last command
if [ $? -ne 0 ]; then
 echo "Tests must pass before push!"
 exit 1
fi
