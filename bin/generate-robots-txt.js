#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '..', 'dist', 'robots.txt');
const fileContent = 'User-agent: *\nDisallow: /';

fs.writeFileSync(filePath, fileContent, {encoding: 'utf-8'})
