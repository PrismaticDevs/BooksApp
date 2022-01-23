const router = require('express').Router();
const Book = require('../../../models/Book');

router.get('/', async(req, res) => {
    try {
        const books = await Book.findAll();
        res.json(books);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

router.post('/', async(req, res) => {
    const { title, author } = req.body;
    try {
        const newBook = await Book.create({
            title,
            author,
            isPaperback: true,
        });
        res.json(newBook);
    } catch (e) {
        console.log('L10', e);
        res.json(e);
    }
});

router.post('/seed', async(req, res) => {
    const booksToSave = [{
            title: 'The Sun Also Rises',
            author: 'Ernest Hemingway',
            isbn: '1',
            pages: 100,
            edition: 1,
            isPaperback: true,
        },
        {
            title: 'NFT For Idiots',
            author: 'Ricky Rice',
            isbn: '2',
            pages: 100,
            edition: 1,
            isPaperback: true,
        },
    ];
    try {
        const result = await Book.bulkCreate(booksToSave);
        res.json(result);
    } catch (e) {
        console.log(e);
        res.json(e);
    }
});

router.get('/:bookId', async(req, res) => {
    try {
        const book = await Book.findByPk(req.params.bookId);
        res.json(book);
    } catch (e) {
        console.log(e);
    }
});

module.exports = router;