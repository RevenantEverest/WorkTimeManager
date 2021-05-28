const express = require('express');
const controller = require('../controllers/projectsController');
const router = express.Router();

router.route("/")
.get(controller.index)
.post(controller.save)
.put(controller.update)

router.route("/id/:id")
.get(controller.getOne)
.delete(controller.delete)

router.route("/user/id/:id")
.get(controller.getByUserId)

module.exports = router;