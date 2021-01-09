import React, { useEffect, useMemo } from "react";
import { Fav } from "components/Icons";
import { Stars } from "components/Stars";
import { useBooksDispatch, useBooksState } from "hooks/books";
import { BooksActionTypes } from "context/books";
import { ButtonClickEvent } from "@types";
import {
  Container,
  BookCover,
  ButtonsWrapper,
  ContentWrapper,
  RightBox,
  Title,
  Authors,
  PriceWrapper,
  Price,
  LeftBox,
  CountPages,
  BuyButton,
  LikeButton,
} from "./styles";

interface Props {
  title?: string;
  img?: string;
  pages?: number;
  price?: number;
  authors?: string[];
  stars?: number;
  buyLink?: string;
  id?: string;
}

export const BookCard = ({
  authors,
  img,
  pages,
  price,
  stars,
  title,
  buyLink,
  id,
}: Props): JSX.Element => {
  const { likes } = useBooksState();
  const dispatchBooks = useBooksDispatch();

  // reduce authors array into a string with authors name
  const parseAuthors = (list: string[] | undefined): string => {
    if (!list) {
      return "";
    }

    const parsed = list.reduce((acc, curr, idx, arr) => {
      if (!acc) {
        return `by ${curr}`;
      }

      if (arr.length - 1 === idx) {
        return `${acc} and ${curr}`;
      }

      return `${acc}, ${curr}`;
    }, "");

    return parsed;
  };

  const handleLike = (): void => {
    if (!id) {
      return;
    }

    dispatchBooks({
      type: BooksActionTypes.LIKE_OR_DISLIKE_BOOK,
      payload: id,
    });
  };

  const handleBuyLink = (e: ButtonClickEvent): void => {
    e.preventDefault();
    window.open(buyLink, "_blank");
  };

  const liked = useMemo(() => likes.includes(id || ""), [id, likes]);

  return (
    <Container>
      <ContentWrapper>
        <LeftBox>
          <BookCover src={img} alt={title} />
          <CountPages>{`${pages} pages`}</CountPages>
        </LeftBox>
        <RightBox>
          <div
            style={{
              maxHeight: 130,
              overflow: "hidden",
            }}
          >
            <Title>{title}</Title>
            <Authors>{parseAuthors(authors)}</Authors>
          </div>
          <PriceWrapper>
            <Price>{price ? `$ ${price?.toFixed(2)}` : "N/A"}</Price>
            <Stars count={stars || 0} size={20} />
          </PriceWrapper>
        </RightBox>
        <ButtonsWrapper>
          <BuyButton disabled={!buyLink} onClick={handleBuyLink}>
            BUY
          </BuyButton>
          <LikeButton onClick={handleLike}>
            <Fav size={20} outlined={!liked} />
          </LikeButton>
        </ButtonsWrapper>
      </ContentWrapper>
    </Container>
  );
};
