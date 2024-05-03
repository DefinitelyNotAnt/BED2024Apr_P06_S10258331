const express = require("express");
const bodyParser = require("body-parser");
const booksController = require("./controllers/bookscontroller"); // Import controllers
const validateBook = require("./middlewares/validateBook");
const logRequests = require("./middlewares/logRequests");

const app = express();

app.use(bodyParser.json()); // Parse incoming JSON data in request body
app.use(bodyParser.urlencoded({ extended: true })); // For form data handling

// Define individual routes for each controller function
app.post("/books", validateBook, logRequests, booksController.createBook); // Add validateBook before createBook
app.put("/books/:id", validateBook, logRequests, booksController.updateBook); // Add validateBook before updateBook
app.get("/books", logRequests, booksController.getAllBooks);
app.get("/books/:id", logRequests, booksController.getBookById);
app.post("/books", logRequests, booksController.createBook);
app.put("/books/:id", logRequests, booksController.updateBook);
app.delete("/books/:id", logRequests, booksController.deleteBook);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});


