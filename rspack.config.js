
const isDev = process.env.NODE_ENV === 'development';
module.exports = {
    cache: true,
  experiments: {
      futureDefaults: true,
      asyncWebAssembly: true,
      css: true,
      lazyCompilation: isDev,
      incremental: isDev,
      cache: {
          type: 'persistent',
      },
  },
};
