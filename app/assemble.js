/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs-extra');
const path = require('path');
const appDir = path.join(__dirname, '../build');

const makeReleasePackageJSON = async () => {
  const packageObj = await fs.readJson(path.join(__dirname, 'package.json'));
  const packages = {
    name: packageObj.name,
    version: packageObj.version,
    description:packageObj.description,
    dependencies: packageObj.dependencies,
    main: 'lib/electron.js',
    build: {
      artifactName: '${name}-${version}-${arch}.${ext}',
      appId: 'ellie.app',
      mac: {
        category: 'ellie.app'
      },
    },
    devDependencies: {
      electron: '^11.1.1',
      'electron-builder': '^22.9.1'
    },
    scripts: {
      start: 'electron lib/electron.js',
      setup: 'npx cross-env ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ npm install',
      build: 'npx cross-env ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ electron-builder',
      'build:ia32': 'npx cross-env ELECTRON_MIRROR=https://npm.taobao.org/mirrors/electron/ electron-builder --ia32',
    }
  };
  await fs.writeFile(path.join(appDir, 'package.json'), JSON.stringify(packages, null, 2));
};

(async () => {
  await fs.remove(appDir);
  await fs.ensureDir(appDir);
  await makeReleasePackageJSON();
  await fs.copy(path.join(__dirname, 'lib'), path.join(appDir, 'lib'));
  await fs.copy(path.join(__dirname, 'public'), path.join(appDir, 'public'));
})().then().catch(
  err => console.error(err)
);
