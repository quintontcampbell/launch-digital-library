import express from "express"

import Book from "../../../models/Book.js"

const booksRouter = new express.Router()

booksRouter.get('/', async (req, res) => {
  try {
    const books = await Book.query()
    return res.status(200).json({ books: books })
  } catch(err) {
    return res.status(500).json({ errors: err })
  }
})

export default booksRouter