import { BookDescription, ButtonClickEvent } from "@types";
import React, { useState, useEffect, useRef, useMemo } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useBooksState } from "hooks/books";
import { ApiService } from "services/ApiService";
import { PageContainer } from "components/PageContainer";
import { HeaderContainer } from "components/HeaderContainer";
import { ArrowBack } from "components/Icons";
import { Input } from "components/SearchInput";
import { SearchButton } from "components/SearchButton";

import { BookCard } from "components/BookCard";
import defaultThumb from "assets/defaultThumb.png";

import { BookDescriptionContainer } from "./styles";

export const BookDetails = (): JSX.Element => {
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const [infoLink, setInfoLink] = useState("");
  const { data: books } = useBooksState();
  const [loading, setLoading] = useState(true);

  const handleGoBack = (e: ButtonClickEvent): void => {
    e.preventDefault();
    goBack();
  };
  const [book, setBook] = useState<BookDescription | undefined>();
  const { searchQuery } = useBooksState();

  const ref = useRef<HTMLDivElement>(null);

  // searches for a book in the books context and set this book in page state
  useEffect(() => {
    const selectedBook = books.items.find((item) => item.id === id);

    if (!selectedBook) {
      setLoading(false);
      goBack();
      return;
    }

    setInfoLink(selectedBook.selfLink);
  }, [books.items, goBack, id]);

  // Method triggered when book is loaded, it fetches selected book details from google api
  useEffect(() => {
    const fetchBookInfo = async (): Promise<void> => {
      setLoading(true);
      if (!infoLink) {
        return;
      }

      try {
        const response = await ApiService.getInstance().fetchBookInfo({
          link: infoLink,
        });

        setBook(response.data);
      } catch (err) {
        goBack();
      } finally {
        setLoading(false);
      }
    };

    fetchBookInfo();
  }, [infoLink, goBack]);

  const description = useMemo(() => book?.volumeInfo.description, [book]);

  // insert book description in BookDescriptionContainer since the response is an html string
  useEffect(() => {
    if (ref && ref.current && description) {
      ref.current.innerHTML = description;
    }
  }, [description]);

  return (
    <PageContainer>
      <HeaderContainer>
        <button type="button" onClick={handleGoBack}>
          <ArrowBack />
        </button>
        <Input value={searchQuery} readOnly disabled />
        <SearchButton />
      </HeaderContainer>
      <BookCard
        id={book?.id}
        authors={book?.volumeInfo.authors}
        img={book?.volumeInfo.imageLinks.smallThumbnail || defaultThumb}
        pages={book?.volumeInfo.pageCount}
        price={
          book?.saleInfo?.retailPrice?.amount ||
          book?.saleInfo?.listPrice?.amount ||
          undefined
        }
        stars={book?.volumeInfo.averageRating}
        title={book?.volumeInfo.title}
        buyLink={book?.saleInfo.buyLink}
      />
      <BookDescriptionContainer ref={ref} />
    </PageContainer>
  );
};
