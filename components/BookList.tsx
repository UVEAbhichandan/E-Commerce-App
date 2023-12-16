// components/BookList.tsx
import React from 'react';
import BookCard from './BookCard';
import { connect, useDispatch } from 'react-redux';
import Pagination from '../helper/Pagination';

interface BookListProps {
  books: Array<any>; // Replace 'any' with the actual type of your book data
}

const BookList: React.FC<BookListProps> = (props: any) => {
    const {books, filterData} = props;
    const {limit, offset} = props.pagination;

    return (
    <div>
      <div className="flex flex-wrap p-3 justify-center">
        {(filterData.length ? filterData : books).slice(offset, limit).map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
      <Pagination />
    </div>
  );
};


const mapStateToProps = ({ books, pagination, filterData, selectedBooks }) => {
  return {
    books,
    pagination,
    filterData,
    selectedBooks
  };
};

const mapDispatchToProps = {
  // updateAction
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
