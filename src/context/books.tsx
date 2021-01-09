import { GetBooksResponseType } from "@types";
import React, { createContext } from "react";

export enum BooksActionTypes {
  SET_BOOKS = "SET_BOOKS",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
}

type BooksActions =
  | {
      type: BooksActionTypes.SET_BOOKS;
      payload: GetBooksResponseType;
    }
  | {
      type: BooksActionTypes.SET_SEARCH_QUERY;
      payload: string;
    };

export type Dispatch = (action: BooksActions) => void;
export type State = { data: GetBooksResponseType; searchQuery: string };
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
    case BooksActionTypes.SET_SEARCH_QUERY:
      console.log("aqui", action.payload);
      return {
        ...state,
        searchQuery: action.payload,
      };
    default:
      throw new Error("Unhandled action type");
  }
};

const initialState: State = {
  data: {} as GetBooksResponseType,
  searchQuery: "",
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
