#!/bin/bash

sed -i 's/href="/href="\/subdomain\/palworld-wiki/g' ./dist/index.html
sed -i 's/src="/src="\/subdomain\/palworld-wiki/g' ./dist/index.html

echo "Applied fix for vitejs base path."
