const CracoAlias = require('craco-alias');

module.exports = {
  webpack: {
    configure: (config) => {
      /*
       * https://github.com/vercel/next.js/discussions/11267
       * making css module work with camelCase
       * */
      config.module.rules
        .find(({ oneOf }) => !!oneOf)
        .oneOf.filter(({ use }) => {
          return JSON.stringify(use)?.includes('/css-loader');
        })
        .forEach(({ use }) => {
          const options = use.find(({ loader }) => loader?.includes('/css-loader')).options;
          if (options.modules) {
            options.modules = {
              ...options.modules,
              exportLocalsConvention: 'camelCase',
            };
          }
        });

      return config;
    },
  },
  plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        // baseUrl SHOULD be specified
        // plugin does not take it from tsconfig
        baseUrl: './src',
        /* tsConfigPath should point to the file where "baseUrl" and "paths" are specified*/
        tsConfigPath: './tsconfig.paths.json',
      },
    },
  ],
};
