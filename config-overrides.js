const path = require("path");
const alias = require("./tsconfig.alias.json");

module.exports = function override(config) {
  const paths = Object.keys(alias.compilerOptions.paths);

  paths.forEach((key) => {
    config.resolve.alias[key] = path.resolve(
      __dirname,
      alias.compilerOptions.baseUrl,
      alias.compilerOptions.paths[key][0]
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
