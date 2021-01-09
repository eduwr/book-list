import { GetBooksResponseType, BookDescription } from "@types";
import axios, { AxiosResponse } from "axios";

interface FetchBooksProps {
  query: string;
  startIndex?: number;
  maxResults?: number;
}

export class ApiService {
  private static instance: ApiService;

  constructor() {
    if (ApiService.instance) {
      throw new Error(
        "Error: Instantiation failed: Use ApiService.getInstance() instead of new."
      );
    }
    ApiService.instance = this;
  }

  public static getInstance(): ApiService {
    if (!ApiService.instance) {
      ApiService.instance = new ApiService();
    }

    return ApiService.instance;
  }

  public api = axios.create({
    baseURL: "https://www.googleapis.com/books/v1/",
  });

  public fetchBooks = async ({
    query,
    startIndex = 0,
    maxResults = 10,
  }: FetchBooksProps): Promise<AxiosResponse<GetBooksResponseType>> => {
    return this.api.get(
      `/volumes?q=${query}&startIndex=${startIndex}&maxResults=${maxResults}`
    );
  };

  public fetchBookInfo = async ({
    link,
  }: {
    link: string;
  }): Promise<AxiosResponse<BookDescription>> => {
    return this.api.get(link);
  };
}

export default ApiService;
