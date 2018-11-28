/* eslint-disable no-undef */
/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

'use strict';

// No samples system test yet
const path = require('path');
const assert = require('assert');
const tools = require('@google-cloud/nodejs-repo-tools');

const cmd = 'node gce-images.js';
const cwd = path.join(__dirname, '..');

it('Get a list of globally available Google Compute Engine images', async () => {
  const output = await tools.runAsync(`${cmd} getAll`, cwd);
  assert.strictEqual(new RegExp(/compute#image/).test(output), true);
});

it('Get the latest image for a specific OS', async () => {
  const output = await tools.runAsync(`${cmd} getLatest "ubuntu"`, cwd);
  assert.strictEqual(new RegExp(/compute#image/).test(output), true);
});
