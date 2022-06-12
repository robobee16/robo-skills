const path = require('path');
const alias = require('./tsconfig.alias.json');

module.exports = function override(config) {
  const paths = Object.keys(alias.compilerOptions.paths);

  paths.forEach((key) => {
    config.resolve.alias[key.replace('/*', '')] = path.resolve(
      __dirname,
      alias.compilerOptions.baseUrl,
      alias.compilerOptions.paths[key][0].replace('/*', '')
    );
  });

  config.resolve = {
    ...config.resolve,
    alias: {
      ...config.resolve.alias,
    },
  };
  return config;
};
