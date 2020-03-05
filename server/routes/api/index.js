const express = require('express');
const router = express.Router();

router.use("/auth", require ("./auth"));
router.use("/games", require ("./games"))

module.exports = router;