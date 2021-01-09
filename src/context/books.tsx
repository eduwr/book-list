import { GetBooksResponseType } from "@types";
import React, { createContext } from "react";

// Declare actions types
export enum BooksActionTypes {
  SET_BOOKS = "SET_BOOKS",
  SET_SEARCH_QUERY = "SET_SEARCH_QUERY",
  LIKE_OR_DISLIKE_BOOK = "LIKE_OR_DISLIKE_BOOK",
}

// Declare actions
type BooksActions =
  | {
      type: BooksActionTypes.SET_BOOKS;
      payload: GetBooksResponseType;
    }
  | {
      type: BooksActionTypes.SET_SEARCH_QUERY;
      payload: string;
    }
  | {
      type: BooksActionTypes.LIKE_OR_DISLIKE_BOOK;
      payload: string;
    };

export type Dispatch = (action: BooksActions) => void;
export type State = {
  data: GetBooksResponseType;
  searchQuery: string;
  likes: string[];
};
type ProviderProps = { children: React.ReactNode };

// Create books contexts
export const BooksStateContext = createContext<State | undefined>(undefined);
export const BooksDispatchContext = createContext<Dispatch | undefined>(
  undefined
);

// the reducer changes the state according to the action type
const booksReducer = (state: State, action: BooksActions): State => {
  switch (action.type) {
    case BooksActionTypes.SET_BOOKS:
      return {
        ...state,
        data: action.payload,
      };
    case BooksActionTypes.SET_SEARCH_QUERY:
      return {
        ...state,
        searchQuery: action.payload,
      };
    case BooksActionTypes.LIKE_OR_DISLIKE_BOOK:
      if (state.likes.includes(action.payload)) {
        return {
          ...state,
          likes: state.likes.filter((id) => id !== action.payload),
        };
      }
      return {
        ...state,
        likes: [...state.likes, action.payload],
      };

    default:
      throw new Error("Unhandled action type");
  }
};

const initialState: State = {
  data: {} as GetBooksResponseType,
  searchQuery: "",
  likes: [],
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
