const db = require('../models')

const index = (req, res) => {
    db.Xip.find({}, (err, foundXips) => {
        if (err) console.log('Error in xips#index:', err)
        
        if (!foundXips) return res.json({
            message: 'No Xips found in database'
        })
        
        res.status(200).json({ xips: foundXips });
    })
}

const show = (req, res) => {
    db.Xip.findById(req.params.id, (err, foundXip) => {
        if (err) console.log('Error in xip#show:', err)

        if (!foundXip) return res.json({
            message: 'Xip with provided ID not found.'
        })

        res.status(200).json({ xip: foundXip })
    })
}

const create = (req, res) => {
    db.Xip.create(req.body, (err, savedXip) => {
        if (err) console.log('Error in xips#create:', err)

        res.status(200).json({ xip: savedXip })
    })
}

const update = (req, res) => {
    const options = { new: true }
    db.Xip.findByIdAndUpdate(req.params.id, req.body, options, (err, updatedXip) => {
        if (err) console.log('Error in xips#update:', err)
        if (!updatedXip) return res.json({
            message: "No xip with that ID found."
        })

        res.status(200).json({ xip: updatedXip })
    })
}

const destroy = (req, res) => {
    db.Xip.findByIdAndDelete(req.params.id, (err, deletedXip) => {
        if (err) console.log('Error in xip#destroy:', err)
        if (!deletedXip) return res.json({
            message: "No xip with that ID found."
        })
    
        res.status(200).json({ xip: deletedXip })
    })
}

module.exports = {
    index,
    show,
    create,
    update,
    destroy
}