#!/bin/bash
rm -rf ./build
mkdir ./build
mkdir ./build/js
cp -r ./public/icons ./build/icons
cp -r ./src/styles/css ./build/css
cp -r ./src/styles/fonts ./build/fonts
find ./src -name "*.js" -exec cp {} ./build/js \;
echo "1713" > ./build/version-debug.txt
zip -r dist.zip build/
