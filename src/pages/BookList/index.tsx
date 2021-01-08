import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ButtonClickEvent, GetBooksResponseType } from "@types";
import ApiService from "services/ApiService";
import { useBooksDispatch, useBooksState } from "hooks/books";
import { BooksActionTypes } from "context/books";
import { PageContainer } from "components/PageContainer";
import { HeaderContainer } from "components/HeaderContainer";
import { MenuIcon } from "components/Icons";
import { SearchButton } from "components/SearchButton";
import { Input } from "components/SearchInput";
import { Book, BookCover, BookListContainer } from "./styles";

export const BookList = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const { push } = useHistory();
  const [query, setQuery] = useState("Harry Potter");
  const [searchSentence, setSearchSentence] = useState("Harry Potter");
  const { data: books } = useBooksState();

  const booksDispatch = useBooksDispatch();

  const harryPotter = "harry potter";

  useEffect(() => {
    const fetchBooks = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await ApiService.getInstance().fetchBooks({
          query,
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
  }, [query]);

  const handleSelectBook = (e: ButtonClickEvent): void => {
    e.preventDefault();

    push("books/1");
  };

  const handleSearch = (): void => {
    setQuery(searchSentence);
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <MenuIcon />
        <Input
          value={searchSentence}
          onChange={(e) => setSearchSentence(e.target.value)}
        />
        <SearchButton onClick={handleSearch} />
      </HeaderContainer>

      {books.items && !loading && (
        <BookListContainer>
          {books.items.map((book) => {
            return (
              <Book key={book.id}>
                <BookCover
                  src={
                    book.volumeInfo?.imageLinks?.smallThumbnail ||
                    book.volumeInfo?.imageLinks?.thumbnail ||
                    ""
                  }
                  alt={book.volumeInfo?.title || ""}
                />
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
