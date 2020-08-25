const express = require('express')
const router = express.Router()
const xipsolosController = require('../controllers/xipsolos')

// ROUTES
// NEW
router.get('/new', xipsolosController.new)

// CREATE
router.post('/', xipsolosController.create)

// INDEX
router.get('/', xipsolosController.index)

// SHOW
router.get('/:id', xipsolosController.show)

// DELETE
router.delete('/:id', xipsolosController.delete)

// EDIT
router.get('/:id/edit', xipsolosController.edit)

// ADD XIP TO XIPSOLO
router.get('/:id/add', xipsolosController.newXip)

// UPDATE
router.put('/:id', xipsolosController.update)

module.exports = router