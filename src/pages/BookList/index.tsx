import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonClickEvent } from "@types";

export const BookList = (): JSX.Element => {
  const { push } = useHistory();

  const handleSelectBook = (e: ButtonClickEvent): void => {
    e.preventDefault();

    push("books/1");
  };

  return (
    <div>
      <h1>Book List Page</h1>
      <button type="button" onClick={handleSelectBook}>
        Select harry book
      </button>
    </div>
  );
};
