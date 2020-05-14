module.exports.config = {
  components: [
    {
      title: 'config',
      path: './server/config/config.index.js',
    },
    {
      title: 'dbs',
      path: './server/models/databases.index.js',
    },
    {
      title: 'middlewares',
      path: './server/middlewares/middlewares.index',
    },
    {
      title: 'services',
      path: './server/services/services.index.js',
    },
    {
      title: 'router',
      path: './server/components/router/router.index.js',
    },
    {
      title: 'mailer',
      path: './server/components/mailer/mailer.index.js',
    },
    {
      title: 'resolvers',
      path: './server/resolvers/resolvers.index.js',
    }
  ]
};