import { Fav } from "components/Icons";
import { Stars } from "components/Stars";
import React, { ReactNode } from "react";
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
  liked?: boolean;
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
  liked,
  buyLink,
  id,
}: Props): JSX.Element => {
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
          <BuyButton disabled={!!buyLink}>BUY</BuyButton>
          <LikeButton>
            <Fav size={20} />
          </LikeButton>
        </ButtonsWrapper>
      </ContentWrapper>
    </Container>
  );
};
