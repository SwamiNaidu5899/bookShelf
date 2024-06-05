import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './bookShelf.css'

const BookShelf = () => {
    const [bookshelf, setBookshelf] = useState([]);

    useEffect(() => {
        const storedBookshelf = JSON.parse(localStorage.getItem('bookshelf')) || [];
        setBookshelf(storedBookshelf);
    }, []);

    const removeFromBookshelf = (bookKey) => {
        const updatedBookshelf = bookshelf.filter(book => book.key !== bookKey);
        setBookshelf(updatedBookshelf);
        localStorage.setItem('bookshelf', JSON.stringify(updatedBookshelf));
        toast.error('Book removed from bookshelf!');
    };

    return (
        <div className="container mt-5">
            <ToastContainer />
            <h1 className='headingEl'>My Bookshelf</h1>
            {bookshelf.length === 0 ? (
                <p>Your bookshelf is empty.</p>
            ) : (
                <div className="row">
                    {bookshelf.map((book, index) => (
                        <div key={index} className="col-md-4 mb-4">
                            <div className="card">
                                <div className="card-in">
                                    <h5>{book.title}</h5>
                                    <p>{book.author_name?.join(', ').slice(0,60)+'...'}</p>
                                    <button 
                                        className="btn btn-danger" 
                                        onClick={() => removeFromBookshelf(book.key)}>
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
export default BookShelf

