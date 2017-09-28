#!/bin/bash

mkdir -p ~/workspace
cd ~/workspace
if [ -d ~/workspace/blueit_api ]; then
  cd blueit_api
  git pull origin master
  knex migrate:rollback
else
  git clone https://github.com/DavidBayless/blueit_api.git
  cd blueit_api
fi
npm install
createdb blueit_api
knex migrate:latest
knex seed:run
