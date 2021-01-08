import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonClickEvent, GetBooksResponseType } from "@types";
import ApiService from "services/ApiService";

export const BookList = (): JSX.Element => {
  const { push } = useHistory();

  const [books, setBooks] = useState<GetBooksResponseType>();

  const harryPotter = "harry potter";

  useEffect(() => {
    const fetchBooks = async (): Promise<void> => {
      const response = await ApiService.getInstance().fetchBooks({
        query: "harry",
        maxResults: 8,
        startIndex: 1,
      });
      console.log("books", response.data.items);
      setBooks(response.data);
    };

    fetchBooks();
  }, []);

  const handleSelectBook = (e: ButtonClickEvent): void => {
    e.preventDefault();

    push("books/1");
  };

  return (
    <div>
      <h1>Book List Page</h1>

      {books && (
        <ul>
          <h2>{books.totalItems}</h2>
          {books.items.map((book) => {
            return <li key={book.id}>{book.volumeInfo.title}</li>;
          })}
        </ul>
      )}
      <button type="button" onClick={handleSelectBook}>
        Select harry book
      </button>
    </div>
  );
};
