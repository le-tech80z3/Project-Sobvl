const express = require('express')
const router = express.Router()
const xipsController = require('../controller/xips')

// ROUTES
// NEW
// router.get('/new', xipsController.new)

// CREATE
router.post('/', xipsController.create)

// INDEX
router.get('/', xipsController.index)

// SHOW
router.get('/:id', xipsController.show)

// DELETE
router.delete('/:id', xipsController.destroy)

// EDIT
// router.get('/:id/edit', xipsController.edit)

// UPDATE
router.put('/:id', xipsController.update)

module.exports = router