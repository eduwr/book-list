/* eslint-disable no-plusplus */
import { Star } from "components/Icons";
import React from "react";
import styled from "styled-components";

interface Props {
  count: number;
  size?: number;
}

const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Stars = ({ count, size }: Props): JSX.Element => {
  // renders stars according to the count number
  const RenderStars = (): JSX.Element[] => {
    const acc: JSX.Element[] = [];

    for (let i = 0; i < 5; i++) {
      if (count > i) {
        acc.push(<Star size={size} />);
      } else {
        acc.push(<Star size={size} outlined />);
      }
    }

    return acc;
  };

  return <Container>{RenderStars()}</Container>;
};
