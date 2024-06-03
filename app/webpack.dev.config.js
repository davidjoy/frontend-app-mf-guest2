const { ModuleFederationPlugin } = require('@module-federation/enhanced');
const { createConfig } = require('@openedx/frontend-build');

const config = createConfig('webpack-dev');

config.output.uniqueName = 'mf-guest2';

config.plugins = [
  ...config.plugins,
  new ModuleFederationPlugin({
    name: 'guest2',
    filename: 'remoteEntry.js',
    exposes: {
      './GuestPlugin': './src/guest-plugin/GuestPlugin',
    },
    shared: {
      react: {
        singleton: true,
        requiredVersion: '^17.0.0',
      },
      'react-dom': {
        singleton: true,
        requiredVersion: '^17.0.0',
      },
      '@openedx/paragon': {
        singleton: true,
        requiredVersion: '^22.0.0',
      },
    },
  }),
];

config.devServer.headers = {
  'Access-Control-Allow-Origin': '*',
};

module.exports = config;
