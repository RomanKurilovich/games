module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['./src'],
        extensions: [
          '.ios.js',
          '.android.js',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
          '.json',
        ],
        alias: {
          assets: './src/assets',
          components: './src/components',
          helpers: './src/helpers',
          hooks: './src/hooks',
          interfaces: './src/interfaces',
          modules: './src/modules',
          names: './src/names',
          screens: './src/screens',
          services: './src/services',
          store: './src/store',
          types: './src/types',
        },
      },
    ],
    'react-native-reanimated/plugin',
  ],
};
