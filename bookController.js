let books = require("../data/booksData");

// GET ALL BOOKS
exports.getAllBooks = (req, res) => {
    res.status(200).json({
        success: true,
        data: books
    });
};

// ADD NEW BOOK
exports.addBook = (req, res) => {
    const { title, author } = req.body;

    if (!title || !author) {
        return res.status(400).json({
            success: false,
            message: "Title and author are required"
        });
    }

    const newBook = {
        id: books.length + 1,
        title,
        author
    };

    books.push(newBook);

    res.status(201).json({
        success: true,
        message: "Book added successfully",
        data: newBook
    });
};

// UPDATE BOOK
exports.updateBook = (req, res) => {
    const id = parseInt(req.params.id);
    const { title, author } = req.body;

    const book = books.find(b => b.id === id);

    if (!book) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    if (title) book.title = title;
    if (author) book.author = author;

    res.status(200).json({
        success: true,
        message: "Book updated successfully",
        data: book
    });
};

// DELETE BOOK
exports.deleteBook = (req, res) => {
    const id = parseInt(req.params.id);

    const index = books.findIndex(b => b.id === id);

    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: "Book not found"
        });
    }

    const deletedBook = books.splice(index, 1);

    res.status(200).json({
        success: true,
        message: "Book deleted successfully",
        data: deletedBook
    });
};
