#!/bin/bash

version=$(jq -r .version package.json)

if [ "$version" == "null" ]; then
    echo "Error: 'version' field not found in package.json."
    exit 1
fi

docker buildx build \
    --platform linux/amd64,linux/arm64 \
    -t jrposada/palworld-wiki:$version \
    -t jrposada/palworld-wiki:latest \
    --push \
    .
