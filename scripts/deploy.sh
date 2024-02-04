#!/bin/bash

# This is meant to be run in the server.

echo "npm ci"
npm ci

npm run build --workspace=frontend

rm -rf /var/www/palworld-wiki/html/dist
cp -r ./frontend/dist /var/www/palworld-wiki/html
