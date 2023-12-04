const express = require('express');
const Book = require('../models/Book');

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;


router.post('/', async (req, res) => {
    try {
      const newBook = new Book(req.body);
      await newBook.save();
      res.status(201).json(newBook);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  });


router.put('/:id', async (req, res) => {
    const { id } = req.params;
    try {
      const updatedBook = await Book.findByIdAndUpdate(id, req.body, { new: true });
      if (!updatedBook) {
        return res.status(404).json({ error: 'Book not found' });
      }
      res.json(updatedBook);
    } catch (error) {
      res.status(400).json({ error: 'Bad Request' });
    }
  });
  

  
