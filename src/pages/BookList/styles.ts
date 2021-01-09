import styled from "styled-components";

export const BookListContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 400px;
`;

export const Book = styled.button`
  display: flex;
  height: 180px;
  width: 100px;
  margin: 8px;
  overflow: hidden;
  opacity: 0.85;
  transition: all 500ms ease;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 1;
  }
`;

export const BookCover = styled.img`
  object-fit: cover;
  height: 100%;
  width: 100%;
`;

export const LoadMoreBtn = styled.button`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.buttonDisabled : theme.buyButtonColor};
  height: 48px;
  width: 50%;
  border-radius: 16px;
  margin: 16px 0;
  opacity: ${({ disabled }) => (disabled ? 1 : 0.8)};
  transition: all 500ms ease;
  color: white;
  font-weight: bold;
  letter-spacing: 1.2px;

  &:hover {
    opacity: 1;
  }

  &:active {
    opacity: 1;
  }
`;
