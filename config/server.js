module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("PUBLIC_URL", "https://strapi-production-faee.up.railway.app"),
  cron: { enabled: true },
  cors: { enabled: true, origin: ['*'] },
  admin: {
    auth: { secret: env("ADMIN_JWT_SECRET", "9bf8cc74ab83590b280df0851beaec60") }
  }
});
