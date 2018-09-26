const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const Mailer = require('../services/Mailer');

module.exports = app => {
  app.post('/api/surveys', requireLogin, requireCredits, (req, res) => {});
};
