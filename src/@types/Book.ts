// Declare book types
interface ImageLinks {
  smallThumbnail: string;
  thumbnail: string;
}

interface VolumeInfo {
  title: string;
  publisher: string;
  averageRating: number;
  ratingsCount: number;
  imageLinks: ImageLinks;
  language: string;
  previewLink: string;
  infoLink: string;
  canonicalVolumeLink: string;
  webReaderLink: string;
}

interface DetailedImageLinks extends ImageLinks {
  small: string;
  medium: string;
  large: string;
  extraLarge: string;
}

type SaleInfo = {
  buyLink: string;
  listPrice: {
    amount: number;
  };
  retailPrice: {
    amount: number;
  };
  saleability: string;
};

interface DetailedVolumeInfo extends Omit<VolumeInfo, "infoLink"> {
  title: string;
  publisher: string;
  averageRating: number;
  ratingsCount: number;
  pageCount: number;
  printedPageCount: number;
  imageLinks: DetailedImageLinks;
  authors: string[];
  description: string;
}

export interface Book {
  kind: string;
  id: string;
  etag: string;
  selfLink: string;
  volumeInfo: VolumeInfo;
  saleInfo: SaleInfo;
}

export interface BookDescription extends Omit<Book, "volumeInfo"> {
  volumeInfo: DetailedVolumeInfo;
}

export type GetBooksResponseType = {
  kind: string;
  totalItems: number;
  items: Book[];
};
