const { Router } = require('express');
const insightController = require('../controllers/insightController');
const rateLimiter = require('../middlewares/rateLimiter');

const router = Router();

router.get('/', rateLimiter, insightController.getMarsWeather);

module.exports = router;
