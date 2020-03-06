const express = require('express');
const router = express.Router();

router.use("/auth", require ("./auth"));
router.use("/games", require ("./games"))
router.use("/consoles", require ("./consoles"))



module.exports = router;