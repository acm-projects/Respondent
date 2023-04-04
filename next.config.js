const withTM = require('next-transpile-modules')([
  '@ionic/react',
  '@ionic/core',
  '@stencil/core',
  'ionicons',
]);

const whitelist = [
  'http://localhost:3000',
];

module.exports = withTM({
  basePath: '',
  images: {
    unoptimized: true,
    domains: ['images.unsplash.com'],
    loader: 'akamai',
    path: '',
  },
  swcMinify: true,
  env: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
  },
  async headers() {
    return [
      {
        source: '/api/:path*',
        headers: [
          {
            key: 'Access-Control-Allow-Origin',
            value: whitelist.join(','),
          },
          {
            key: 'Access-Control-Allow-Methods',
            value: 'GET,OPTIONS,PATCH,DELETE,POST,PUT',
          },
          {
            key: 'Access-Control-Allow-Headers',
            value:
              'X-Requested-With,Access-Control-Allow-Origin, X-HTTP-Method-Override, Content-Type, Authorization, Accept',
          },
        ],
      },
    ];
  },
});
