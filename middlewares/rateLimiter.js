const Limiter = require('express-rate-limit');

const rateLimiter = Limiter({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 30,
});

module.exports = rateLimiter;