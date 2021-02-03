#!/bin/bash

rm -rf build
cd ui && npm install && npm run release
cd ../app && npm install && npm run assemble
cd ../build && npm install && npm run build

