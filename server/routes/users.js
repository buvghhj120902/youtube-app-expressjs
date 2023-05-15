import express from 'express'
import { deleteUser, disLike, getUser, like, subscribe, unSubscribe, updateUser } from '../controllers/user.js'
import { verifyToken } from '../verifyToken.js'

const router = express.Router()

//update user
router.put("/:id", verifyToken, updateUser)

//delete user
router.delete("/:id", verifyToken, deleteUser)

//get a user
router.get("/find/:id", getUser)

//subscribe a user
router.put("/sub/:id", verifyToken, subscribe)

//unsubscribe a user
router.put("/unsub/:id", verifyToken, unSubscribe)

//like a video
router.put("/like/:videoId", verifyToken, like)

//dislike a video
router.put("/dislike/:videoId", verifyToken, disLike)

export default router