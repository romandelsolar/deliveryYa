'use strict';

var express = require('express');
var controller = require('./order.controller');

var router = express.Router();

router.get('/', controller.index);
router.get('/:id', controller.show);
router.post('/', controller.create);
router.put('/:id', controller.update);
router.post('/:id', controller.submit);
router.delete('/:id', controller.destroy);
router.get('/:id/markets', controller.getMarkets);

module.exports = router;
