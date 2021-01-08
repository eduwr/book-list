import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonClickEvent, GetBooksResponseType } from "@types";
import ApiService from "services/ApiService";
import { useBooksDispatch, useBooksState } from "hooks/books";
import { BooksActionTypes } from "context/books";
import { PageContainer } from "components/PageContainer";
import { Header } from "components/HeaderContainer";
import { Book, BookCover, BookListContainer } from "./styles";

export const BookList = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const { push } = useHistory();

  const { data: books } = useBooksState();

  const booksDispatch = useBooksDispatch();

  const harryPotter = "harry potter";

  useEffect(() => {
    const fetchBooks = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await ApiService.getInstance().fetchBooks({
          query: "harry",
          maxResults: 8,
          startIndex: 1,
        });

        booksDispatch({
          type: BooksActionTypes.SET_BOOKS,
          payload: response.data,
        });
      } catch (err) {
        // handle error
      } finally {
        setLoading(false);
      }
    };

    fetchBooks();
  }, []);

  const handleSelectBook = (e: ButtonClickEvent): void => {
    e.preventDefault();

    push("books/1");
  };

  return (
    <PageContainer>
      <Header />
      <h1>Book List Page</h1>

      {books.items && (
        <BookListContainer>
          {books.items.map((book) => {
            const {
              title,
              imageLinks: { smallThumbnail },
            } = book.volumeInfo;

            return (
              <Book key={book.id}>
                <BookCover src={smallThumbnail} alt={title} />
              </Book>
            );
          })}
        </BookListContainer>
      )}
      <button type="button" onClick={handleSelectBook}>
        Select harry book
      </button>
    </PageContainer>
  );
};
