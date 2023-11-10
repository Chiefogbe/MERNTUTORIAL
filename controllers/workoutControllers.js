const Workout=require('../models/workoutModel')
const mongoose=require('mongoose')

// GET ALL
  const getWk=async(req,res)=>{
    const workouts=await Workout.find({}).sort({createdAt:-1})
    res.status(200).json(workouts)
  }
// GET SINGLE
const getWks=async(req, res)=>{
  const {id}=req.params

  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:`No such workout`})
  }
  const workouts=await Workout.findById(id)

  if(!workouts){
    return res.status(404).json({error:'No such workout'})
  }
  res.status(200).json(workouts)
}


// POST/CREATE
    const createWk=async(req, res)=>{
        const{title,reps, load}=req.body
        try {
          const workout=await Workout.create({title, reps, load})
          res.status(200).json(workout)
        } catch (error) {
          res.status(400).json({error:error.mesage})
        }
    }
// DELETE

const deleteWk=async(req, res)=>{
  const {id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:`No such workout`})
  }
  const workouts=await Workout.findOneAndDelete({_id:id})

  if(!workouts){
    return res.status(400).json({error:'No such workout'})
  }
  res.status(200).json(workouts)
  
}

// PATCH/UPDATE

const updateWk=async(req, res)=>{
  const {id}=req.params
  if(!mongoose.Types.ObjectId.isValid(id)){
    return res.status(404).json({error:`No such workout`})
  }
  const workouts=await Workout.findOneAndUpdate({_id:id}, {
    ...req.body
  })

  if(!workouts){
    return res.status(400).json({error:'No such workout'})
  }
  res.status(200).json(workouts)
}

module.exports={
  updateWk,
  deleteWk,
  createWk,
  getWks,
  getWk
}