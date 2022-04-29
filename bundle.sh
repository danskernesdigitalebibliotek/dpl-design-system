#!/bin/bash
mkdir ./build
mkdir ./build/js
cp -r ./public/icons ./build/icons
cp -r ./src/styles/css ./build/css
find ./src -name "*.js" -exec cp {} ./build/js \;
zip -r dist.zip build/
