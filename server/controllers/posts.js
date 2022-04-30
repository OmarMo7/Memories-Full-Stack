import mongoose from "mongoose"
import postMessage from "../models/postSchema.js"

export const getPosts = async (req, res) => {
  try {
    const postMessages = await postMessage.find()
    // console.log(postMessages[0])
    console.log("THIS GET WORKS")
    res.status(200).json(postMessages)
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error.message })
  }
}
export const getPost = async (req, res) => {
  const { id: _id } = req.params
  try {
    const post = await postMessage.findById(_id)

    console.log("THIS GET WORKS")
    res.status(200).json(post)
  } catch (error) {
    console.log(error)
    res.status(404).json({ message: error.message })
  }
}
export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new postMessage(post)

  try {
    await newPost.save()
    // console.log("Post Saved: ", post)
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = req.body
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("No post with such an id!")

  try {
    const updatedPost = await postMessage.findByIdAndUpdate(_id, post, { new: true })
    res.status(201).json(updatedPost)
  } catch (error) {
    res.status(409).json({ message: error })
  }
}


export const deletePost = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with such an id!")

  try {
    await postMessage.findByIdAndRemove(id)
    res.status(201).json({ message: "Post deleted successfully." })
  } catch (error) {
    res.status(409).json({ message: error })
  }
}

export const likePost = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("No post with such an id!")

  try {
    const post = await postMessage.findById(id)
    const updatedPost = await postMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
    res.status(201).json(updatedPost)
  } catch (error) {
    res.status(409).json({ message: error })
  }
}