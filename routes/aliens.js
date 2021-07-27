const express = require('express')
const router = express.Router()
const Alien = require('../models/alien')

router.get('/', async(req,res)=> {
    try{
        //if no error, fetch all aliens from database. Async request guarentees no blocking 
        const aliens = await Alien.find()
        res.json(aliens)
    } catch(err){
        res.send('Error' + err)
    }

})


router.get('/:id', async(req,res)=> {
    try{
        //if no error, fetch all aliens from database. Async request guarentees no blocking 
        const aliens = await Alien.findById(req.params.id)
        res.json(aliens)
    } catch(err){
        res.send('Error' + err)
    }

})
//post request

router.post('/', async(req, res)=> {
    //object creation
    const alien = new Alien({
        name: req.body.name, //this will fetch the value from the request
        tech: req.body.tech,
        sub: req.body.sub
    })
    try{
        //if no error, fetch all aliens from database. Async request guarentees no blocking 
        const a1 = await alien.save()
        res.json(a1)
    } catch(err){
        res.send('Error')
    }
})


//patch
router.patch('/:id', async(req, res)=> {
    try{
            const alien = await Alien.findById(req.params.id)
            alien.sub = req.body.sub
            const a1 = await alien.save()
            res.json(a1)
    } catch(err){
        res.send('Error')
    }
})


module.exports = router