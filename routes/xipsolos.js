const express = require('express')
const router = express.Router()
const xipsolosController = require('../controllers/xipsolos')

// ROUTES

// CREATE
router.post('/', xipsolosController.create)

// INDEX
router.get('/', xipsolosController.index)

// SHOW
router.get('/:id', xipsolosController.show)

// DELETE
router.delete('/:id', xipsolosController.destroy)


// UPDATE
router.put('/:id', xipsolosController.update)

module.exports = router