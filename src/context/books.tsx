import { GetBooksResponseType } from "@types";
import React, { createContext } from "react";

export enum BooksActionTypes {
  SET_BOOKS = "SET_BOOKS",
}

type BooksActions = {
  type: BooksActionTypes.SET_BOOKS;
  payload: GetBooksResponseType;
};

export type Dispatch = (action: BooksActions) => void;
export type State = { data: GetBooksResponseType };
type ProviderProps = { children: React.ReactNode };

export const BooksStateContext = createContext<State | undefined>(undefined);
export const BooksDispatchContext = createContext<Dispatch | undefined>(
  undefined
);

const booksReducer = (state: State, action: BooksActions): State => {
  switch (action.type) {
    case BooksActionTypes.SET_BOOKS:
      return {
        ...state,
        data: action.payload,
      };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

const initialState: State = {
  data: {} as GetBooksResponseType,
};

export const BooksProvider = ({ children }: ProviderProps): JSX.Element => {
  const [state, dispatch] = React.useReducer(booksReducer, initialState);

  return (
    <BooksStateContext.Provider value={state}>
      <BooksDispatchContext.Provider value={dispatch}>
        {children}
      </BooksDispatchContext.Provider>
    </BooksStateContext.Provider>
  );
};
