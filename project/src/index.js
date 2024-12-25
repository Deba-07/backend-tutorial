// require('dotenv').config({path: './env'})
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import { app } from "./app.js"
import dotenv from "dotenv";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

connectDB()
.then(() => {
    app.listen(process.env.PORT || 4000, () => {
        console.log(`Server is running on port: ${process.env.PORT}`)
    })
})
.catch((err) => {
    console.log("MongoDB connection failed !!", err)
})

/*
import express from "express";
( async () => {
    try {
       await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
       app.on("error", (error) => {
        console.log("ERROR", error);
        throw error;
       })
       app.listen(process.env.PORT, () =>{
        console.log(`App is listening on port ${PORT}`)
       })
    } catch (error) {
        console.error("ERROR: ", error)
        throw error
    }
})()
*/