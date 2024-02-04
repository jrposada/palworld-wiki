#!/bin/bash

version=$(jq -r .version package.json)

if [ "$version" == "null" ]; then
    echo "Error: 'version' field not found in package.json."
    exit 1
fi

echo "Backend..."
docker buildx build \
    --file ./Dockerfile.backend \
    --platform linux/amd64,linux/arm64 \
    -t jrposada/palworld-wiki-backend:$version \
    -t jrposada/palworld-wiki-backend:latest \
    --push \
    .

echo "Frontend..."
npm run build --workspace=frontend
docker buildx build \
    --file ./Dockerfile.frontend \
    --platform linux/amd64,linux/arm64 \
    -t jrposada/palworld-wiki-frontend:$version \
    -t jrposada/palworld-wiki-frontend:latest \
    --push \
    .
