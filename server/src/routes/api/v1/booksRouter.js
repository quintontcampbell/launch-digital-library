import express from "express"
import objection from "objection"
const { ValidationError } = objection

import Book from "../../../models/Book.js"
import cleanUserInput from "../../../services/cleanUserInput.js"

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
    if (error instanceof ValidationError) {
      return res.status(422).json({ errors: error.data})
    }
    return res.status(500).json({ errors: error })
  }
})

booksRouter.post("/", async (req, res) => {
  const data = req.body
  const cleanBody = cleanUserInput(data)
  try {
    const newBook = await Book.query().insertAndFetch(cleanBody)
    return res.status(201).json({ book: newBook})
  } catch(error) {
    return res.status(500).json({ errors: error})
  }
})

export default booksRouter