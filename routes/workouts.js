const express=require('express')
const{createWk, getWk, getWks, deleteWk, updateWk}=require('../controllers/workoutControllers')

const router=express.Router()

router.get('/', getWk)

router.get('/:id', getWks)

router.post('/', createWk)

router.delete('/:id', deleteWk)

router.patch('/:id', updateWk)

module.exports=router