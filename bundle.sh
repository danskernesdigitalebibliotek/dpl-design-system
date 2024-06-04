#!/bin/bash
rm -rf ./build
mkdir ./build
mkdir ./build/js
cp -r ./public/icons ./build/icons
cp -r ./src/styles/css ./build/css
cp -r ./src/styles/fonts ./build/fonts
find ./src -name "*.js" -exec cp {} ./build/js \;

if [ -n "$VERSION" ]; then
   echo $VERSION > ./build/version.txt
fi

zip -r dist.zip build/
