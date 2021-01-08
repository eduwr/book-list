/* eslint-disable global-require */
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
import Loader from "react-loader-spinner";
import { Book, BookCover, BookListContainer, LoadMoreBtn } from "./styles";
import defaultThumb from "../../assets/defaultThumb.png";

export const BookList = (): JSX.Element => {
  const [loading, setLoading] = useState(false);
  const { push } = useHistory();
  const [query, setQuery] = useState("Harry Potter");
  const [searchSentence, setSearchSentence] = useState("Harry Potter");
  const { data: books } = useBooksState();
  const [bookIndex, setbookIndex] = useState(0);
  const booksDispatch = useBooksDispatch();
  const [loadingMore, setLoadingMore] = useState(false);
  const harryPotter = "harry potter";

  useEffect(() => {
    const fetchBooks = async (): Promise<void> => {
      setLoading(true);
      try {
        const response = await ApiService.getInstance().fetchBooks({
          query,
          maxResults: 12,
          startIndex: 0,
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
  }, [query, booksDispatch]);

  const handleLoadMore = async (e: ButtonClickEvent): Promise<void> => {
    e.preventDefault();
    setLoadingMore(true);

    try {
      if (books.totalItems <= books.items.length) {
        return;
      }

      const response = await ApiService.getInstance().fetchBooks({
        query,
        maxResults: 12,
        startIndex: bookIndex + 1,
      });

      const currentBooks = [...books.items];

      const bookSet = new Set([...currentBooks, ...response.data.items]);

      booksDispatch({
        type: BooksActionTypes.SET_BOOKS,
        payload: {
          ...response.data,
          items: [...bookSet],
        },
      });
    } catch (err) {
      // handle err
    } finally {
      setLoadingMore(false);
    }
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
            const imgLink = book.volumeInfo?.imageLinks?.smallThumbnail
              ? book.volumeInfo?.imageLinks?.smallThumbnail
              : defaultThumb;

            return (
              <Book
                key={book.id + book.volumeInfo.title + Math.random() * 1000}
              >
                <BookCover src={imgLink} alt={book.volumeInfo?.title || ""} />
              </Book>
            );
          })}
        </BookListContainer>
      )}
      {books.items && !loading && (
        <LoadMoreBtn
          type="button"
          onClick={handleLoadMore}
          disabled={books.totalItems <= books.items.length}
        >
          {loadingMore ? (
            <Loader type="Circles" width={24} height={24} color="white" />
          ) : (
            "LOAD MORE"
          )}
        </LoadMoreBtn>
      )}
    </PageContainer>
  );
};
