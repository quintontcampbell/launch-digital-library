import express from "express"

import Book from "../../../models/Book.js"

const booksRouter = new express.Router()

booksRouter.get('/', async (req, res) => {
  try {
    const books = await Book.query()
    return res.status(200).json({ books: books})
  } catch(error) {
    return res.status(500).json({ errors: error})
  }
})

booksRouter.get("/:id", async (req, res) => {
  try {
    const book = await Book.query().findById(req.params.id)
    return res.status(200).json({ book: book })
  } catch(error) {
    return res.status(500).json({ errors: error })
  }
})

// booksRouter.get("/new", (req, res) => {
//   try {

//   } catch (error) {

//   }
// })

export default booksRouter