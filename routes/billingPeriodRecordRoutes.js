const express = require('express');
const controller = require('../controllers/billingPeriodRecordsController');
const router = express.Router();

router.route("/")
.get(controller.index)
.post(controller.save)
.put(controller.update)

router.route("/id/:id")
.get(controller.getOne)
.delete(controller.delete)

router.route("/billing_period/id/:id")
.get(controller.getByBillingPeriodId)

module.exports = router;