const express = require('express');
const router = express.Router();
const controller = require('../controllers/alunoController')

router.get('/', controller.get);
router.get('/:id', controller.getById);

module.exports = router;