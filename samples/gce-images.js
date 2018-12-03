/**
 * Copyright 2018 Google LLC
 *
 * Distributed under MIT license.
 * See file LICENSE for detail or copy at https://opensource.org/licenses/MIT
 */

'use strict';

async function getAll() {
  // [START getAll]
  const {GCEImages} = require('gce-images');
  const util = require('util');

  // Create a client
  const objGCImages = new GCEImages();
  const getAll = util.promisify(objGCImages.getAll).bind(objGCImages);
  const images = await getAll();
  console.log(images);
  // [END getAll]
}

async function getLatest(opts) {
  // [START getLatest]
  const {GCEImages} = require('gce-images');
  const util = require('util');
  // Create a client
  const objGCImages = new GCEImages();
  //Get the latest image for a specific OS from your project
  //opts = 'your-project-id-or-name/ubuntu'

  const getLatest = util.promisify(objGCImages.getLatest).bind(objGCImages);
  const image = await getLatest(opts);
  console.log(image);
  // [END getLatest]
}

require('yargs') // eslint-disable-line
  .demand(1)
  .command(
    `getAll`,
    `Get a list of globally available Google Compute Engine images`,
    {},
    () => getAll()
  )
  .command(
    `getLatest <OperatingSystem>`,
    `Get the latest image for a specific OS`,
    {},
    opts => {
      getLatest(opts.OperatingSystem);
    }
  )
  .example(
    'node $0 getAll',
    `Get a list of globally available Google Compute Engine images`
  )
  .example(
    `node $0 getLatest "ubuntu"`,
    `Get the latest image for a specific OS`
  )
  .example(
    `node $0 getLatest "your-project-id-or-name/ubuntu"`,
    `Get the latest image for a specific OS from your project`
  )
  .example(
    `node $0 getLatest "ubuntu-1404"`,
    `Get the latest image for a specific version of an OS`
  )
  .help()
  .strict().argv;
