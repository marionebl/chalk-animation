#!/usr/bin/env node
const meow = require('meow');
const chalkAnim = require('.');
const names = Object.keys(chalkAnim);

const cli = meow(`
Usage
  $ chalk-animation <name> [text...]

Available animations
  ${names.join('\n  ')}

Example
  $ chalk-animation rainbow Hello world!
`);

if (cli.input.length < 2) {
	cli.showHelp(2);
}

const name = cli.input[0];
const payload = cli.input.slice(1);
const effect = chalkAnim[name];

if (typeof effect === 'undefined') {
	console.error(`error: unknown animation name: "${name}", must be one of: ${names.join(', ')}`);
	process.exit(1);
}

effect(payload.join(' '));
