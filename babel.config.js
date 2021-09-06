module.exports = function (api) {
  api.cache(true);
  return {
    presets: ['babel-preset-expo'],
    plugins: [
      'react-native-reanimated/plugin',
      [
        'module-resolver',
        {
          root: ['.'],
          extensions: ['.js', '.jsx', '.es', '.es6', '.mjs', '.ts', '.tsx'],
          alias: {
            config: './src/config',
            components: './src/components',
            screens: './src/screens',
            hooks: './src/hooks',
            store: './src/store',
            styles: './src/styles',
            icons: './src/assets/icons',
          },
        },
      ],
    ],
  };
};
