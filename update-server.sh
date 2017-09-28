#!/bin/bash
cd ~/workspace/blueit_api
MY_VAR="$(git pull origin master)"
if [[ $MY_VAR != *"Already"* ]];
  then
    echo "\x1B[32m Your server was updated to the most recent version"
  else
    echo $MY_VAR
fi
