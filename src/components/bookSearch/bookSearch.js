import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './bookSearch.css'

const BookSearch = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    let debounceTimer;

    const searchBooks = async (query) => {
        if (!query) {
            setResults([]);
            return;
        }

        const response = await axios.get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        setResults(response.data.docs);
    };

    const debounceSearch = (value) => {
        clearTimeout(debounceTimer);
        debounceTimer = setTimeout(() => searchBooks(value), 1000);
    };

    const addToBookshelf = (book) => {
        const bookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        const bookExists = bookshelf.some(b => b.key === book.key);
        
        if (bookExists) {
            toast.error(`${book.title} is already in your bookshelf!`);
        } else {
            bookshelf.push(book);
            localStorage.setItem('bookshelf', JSON.stringify(bookshelf));
            toast.success(`${book.title} added to bookshelf!`);
        }
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <h1 className='headingEl'>Search Books</h1>
            <input 
                type="text" 
                value={query} 
                onChange={(e) => { 
                    setQuery(e.target.value);
                    debounceSearch(e.target.value);
                }} 
                className="form-control mb-4"
                placeholder="Search for a book..." 
            />
            <div className="row">
                {results.map((book) => (
                    <div key={book.key} className="col-md-4 mb-4">
                        <div className="card">
                            <div className="card-in">
                                <h6 className="">{book.title}</h6>
                                <p className="">{book.author_name?.join(', ').slice(0,60)+'...'}</p>
                                <button 
                                    className="" 
                                    onClick={() => addToBookshelf(book)}>
                                    Add to Bookshelf
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};
export default BookSearch
