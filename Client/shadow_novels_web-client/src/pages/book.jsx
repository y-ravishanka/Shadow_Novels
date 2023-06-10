import React, { useEffect } from 'react';

const Book = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    useEffect(() => {
        scrollToTop();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='book'>
            this is the book
        </div>
    );
};

export default Book;