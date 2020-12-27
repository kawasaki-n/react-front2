import { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, Paper, TableRow, TableCell, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import BookAddIcon from './BookAddIcon';

function BookList() {
    const [books, setBooks] = useState([]);
    // fetch from api
    function fetchBooks() {
        fetch(process.env.REACT_APP_BACKEND_ORIGIN+'/api/books')
        .then(res => res.json())
        .then(res => {
            setBooks(res);
        })
        .catch(err => {
            console.log(err);
        });
    }

    const deleteBook = (id) => () => {
        fetch(process.env.REACT_APP_BACKEND_ORIGIN+'/api/books/'+id, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(res => {
            console.log(res);
            fetchBooks();
        })
        .catch(err => {
            console.log(err);
        });
    }
    // setBooks
    useEffect(() => {
        fetchBooks();
    }, []);

    return(
        <div>
            <h1>BookList</h1>
            <TableContainer component={Paper}>
                <Table aria-label="book table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Author</TableCell>
                            <TableCell align="left">URL</TableCell>
                            <TableCell></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {books.map((book, i) => (
                            <TableRow key={book.id}>
                                <TableCell>{book.name}</TableCell>
                                <TableCell>{book.author}</TableCell>
                                <TableCell>
                                    <a href={book.url} target="_blank" rel="noreferrer">{book.url}</a>
                                </TableCell>
                                <TableCell aligh="right" padding="checkbox">
                                    <IconButton aria-label="delete" onClick={deleteBook(book.id)}>
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <BookAddIcon />
        </div>
    );
}

export default BookList;