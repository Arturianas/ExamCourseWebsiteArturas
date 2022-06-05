import express from "express";
import { verifyAdmin, verifyToken, verifyUser, verifyUserAndInstructor } from "../utils/verifyToken.js";
import {getUsers, getUser} from '../controllers/user.js'
 
const router = express.Router();

router.get("/", (req, res) => {
    res.send("hello, arturas")
})

router.get('/all', getUsers)
router.get('/one/:id', getUser)



// Test Authorization

// router.get("/checkauthentication", verifyToken, (req,res,next)=>{
//   res.send("hello user, you are logged in")
// })

// router.get("/checkuser/:id", verifyUserAndInstructor, (req,res,next)=>{
//   res.send("hello user, you are logged in and you can delete your account")
// })

// router.get("/checkadmin", verifyAdmin, (req,res,next)=>{
//   res.send("hello admin, you are logged in and you can delete all accounts")
// })
 
export default router;