#!/bin/bash
mkdir -p ~/workspace
cd ~/workspace
git clone https://github.com/DavidBayless/blueit_api.git
cd blueit_api
npm install
createdb blueit_api
knex migrate:latest
knex seed:run
