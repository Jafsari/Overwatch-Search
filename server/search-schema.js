const Joi = require('joi')

module.exports = Joi.object().keys({
    platform: Joi.string().min(2).max(2).required(),
    region: Joi.string().min(2).max(2).required(),
    tag: Joi.string().min(4).max(20).required()
  });

