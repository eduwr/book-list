import { BookDescription, ButtonClickEvent } from "@types";
import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { useBooksState } from "hooks/books";
import { ApiService } from "services/ApiService";
import { PageContainer } from "components/PageContainer";
import { HeaderContainer } from "components/HeaderContainer";
import { MenuIcon } from "components/Icons";
import { Input } from "components/SearchInput";
import { SearchButton } from "components/SearchButton";
import { BookCover } from "pages/BookList/styles";
import { BookCard } from "components/BookCard";
import defaultThumb from "assets/defaultThumb.png";

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

  useEffect(() => {
    const selectedBook = books.items.find((item) => item.id === id);

    if (!selectedBook) {
      alert("Book not found! Try again");
      setLoading(false);
      return;
    }

    setInfoLink(selectedBook.selfLink);
  }, []);

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
        console.log(response.data);

        setBook(response.data);
      } catch (err) {
        // handle err
      } finally {
        setLoading(false);
      }
    };

    fetchBookInfo();
  }, [infoLink]);

  return (
    <PageContainer>
      <HeaderContainer>
        <MenuIcon />
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
        liked
        buyLink={book?.saleInfo.buyLink}
      />
      <button type="button" onClick={handleGoBack}>
        Go back to list
      </button>
    </PageContainer>
  );
};
