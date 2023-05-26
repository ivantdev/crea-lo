module.exports = ({ env }) => ({
  connection: {
      client: 'postgres',
      connection: {
          host: env('PGHOST', '127.0.0.1'),
          port: env.int('PGPORT', 5432),
          database: env('PGDATABASE', 'strapi'),
          user: env('PGUSER', 'strapi'),
          password: env('PGPASSWORD', 'password'),
          ssl: {
            rejectUnauthorized: env.bool('DATABASE_SSL_SELF', false), // For self-signed certificates
          },
          acquireConnectionTimeout: 5000,
          pool: {
            min: 0,
            max: 10,
            idleTimeoutMillis: 8000,
            createTimeoutMillis: 8000,
            acquireTimeoutMillis: 8000,
            reapIntervalMillis: 1000,
            createRetryIntervalMillis: 100,
          },
      },
  },
});
