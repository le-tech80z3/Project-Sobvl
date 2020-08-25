const db = require('../models')

const index = (req, res) => {
    db.Xipsolo.find({}, (err, foundXipsolos) => {
        if (err) console.log('Error in xipsolos#index:', err)

        if (!foundXipsolos) return res.json({
            message: 'No Xipsolos found in database'
        })

        res.status(200).json({ xipsolos: foundXipsolos });
    })
}

const show = (req, res) => {
    db.Xipsolo.findById(req.params.id, (err, foundXipsolo) => {
        if (err) console.log('Error in xipsolo#show', err)

        if (!foundXipsolo) return res.json({
            message: 'Xipsolo with provided ID not found.'
        })
        
        res.status(200).json({ xipsolo: foundXipsolo })
    })
}

const create = (req, res) => {
    db.Xipsolo.create(req.body, (err, savedXipsolo) => {
        if (err) console.log('Error in xipsolos#create:', err)
        
        res.status(200).json({ xipsolo: savedXipsolo })
    })
}

const update = (req, res) => {
    const options = { new: true }
    db.Xipsolo.findByIdAndUpdate(req.params.id, req.body, options, (err, updatedXipsolo) => {
        if (err) console.log('Error in xipsolos#update:', err)
        if (!updatedXipsolo) return res.json({
            message: "No xipsolo with that ID found."
        })

        res.status(200).json({ xipsolo: updatedXipsolo })
    })
}

const destroy = (req, res) => {
    db.Xipsolo.findByIdAndDelete(req.params.id, (err, deletedXipsolo) => {
        if (err) console.log('Error in xipsolo#destroy:', err)
        if (!deletedXipsolo) return res.json({
            message: "No game with that ID found."
        })

        res.status(200).json({ xipsolo: deletedXipsolo })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}