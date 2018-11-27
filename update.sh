#!/bin/bash

exceptions="src .gitignore README.md update.sh"

# Remove old files
for file in ./*; do
    name="$(basename "$file")"
    if [[ ! $exceptions =~ (^|[[:space:]])$name($|[[:space:]]) ]]; then
    	rm -rf $name
    fi
done

# Copy a new one
cp -r src/public/* .