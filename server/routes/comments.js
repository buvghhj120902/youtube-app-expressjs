import express from 'express'
import { verifyToken } from '../verifyToken.js'
import { addComment, deleteComment, getComment } from '../controllers/comment.js'

const router = express.Router()

//Ađ comment
router.post("/", verifyToken, addComment)

//Delete comment
router.delete("/:id", verifyToken, deleteComment)

//Get comment
router.get("/:videoId", getComment)

export default router