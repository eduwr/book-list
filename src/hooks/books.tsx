import React, { useContext } from "react";

import {
  BooksDispatchContext,
  BooksStateContext,
  Dispatch,
  State,
} from "context/books";

// create hooks to access Dispatch and Books context

const useBooksState = (): State => {
  const context = useContext(BooksStateContext);
  if (context === undefined) {
    throw new Error("useBooksState must be used within a BooksProvider");
  }
  return context;
};

const useBooksDispatch = (): Dispatch => {
  const context = useContext(BooksDispatchContext);
  if (context === undefined) {
    throw new Error("useBooksDispatch must be used within a BooksProvider");
  }
  return context;
};

export { useBooksState, useBooksDispatch };
