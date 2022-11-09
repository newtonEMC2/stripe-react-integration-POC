#!/bin/sh

rm -rf public

npm --prefix ./cms-ui/ run build

npm run develop
