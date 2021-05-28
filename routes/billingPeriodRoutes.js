const express = require('express');
const controller = require('../controllers/billingPeriodsController');
const router = express.Router();

router.route("/")
.get(controller.index)
.post(controller.save)
.put(controller.update)

router.route("/id/:id")
.get(controller.getOne)
.delete(controller.delete)

router.route("/project/id/:id")
.get(controller.getByProjectId)

module.exports = router;