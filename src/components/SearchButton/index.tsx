import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../Icons";

const Button = styled.button``;

interface Props {
  onClick?: () => void;
}

export const SearchButton = ({ onClick }: Props): JSX.Element => {
  return (
    <Button onClick={onClick} disabled={!onClick}>
      <SearchIcon />
    </Button>
  );
};
