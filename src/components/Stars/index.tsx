/* eslint-disable no-plusplus */
import { Star as StarIcon } from "components/Icons";
import { useBooksDispatch, useBooksState } from "hooks/books";
import { BooksActionTypes } from "context/books";
import React, { useMemo } from "react";
import styled from "styled-components";

interface Props {
  size?: number;
  id?: string;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

interface StarProps {
  size?: number;
  outlined?: boolean;
  rate: number;
  id: string;
}

const Star = ({ rate, id, ...props }: StarProps): JSX.Element => {
  const dispatch = useBooksDispatch();

  const handleClick = (): void => {
    dispatch({
      type: BooksActionTypes.RATE_BOOK,
      payload: {
        id,
        rate,
      },
    });
  };

  return (
    <button type="button" onClick={handleClick}>
      <StarIcon {...props} />
    </button>
  );
};

export const Stars = ({ size, id }: Props): JSX.Element => {
  const { rateList } = useBooksState();

  const rateCount = useMemo(() => {
    const item = rateList.find((e) => e.id === id);

    if (item) {
      return item.rate;
    }

    return 0;
  }, [rateList, id]);

  // renders stars according to the count number
  const RenderStars = (): JSX.Element[] => {
    const acc: JSX.Element[] = [];

    for (let i = 0; i < 5; i++) {
      if (i < rateCount) {
        acc.push(
          <Star key={`${id}-${i + 1}`} size={size} rate={i + 1} id={id || ""} />
        );
      } else {
        acc.push(
          <Star
            key={`${id}-${i + 1}`}
            size={size}
            outlined
            rate={i + 1}
            id={id || ""}
          />
        );
      }
    }

    return acc;
  };

  return <Container>{RenderStars()}</Container>;
};
