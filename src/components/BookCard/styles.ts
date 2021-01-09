import styled from "styled-components";

export const Container = styled.div`
  padding: 32px 16px;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  position: relative;
`;

export const LeftBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CountPages = styled.p`
  margin-top: 32px;
  color: ${({ theme }) => theme.textColor};
  opacity: 0.5;
`;

export const RightBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 16px;
  justify-content: space-between;
  height: 170px;
`;

export const BookCover = styled.img`
  object-fit: cover;
  height: 170px;
  width: 120px;
  box-shadow: ${({ theme }) => theme.boxShadowBlack};
`;

export const ContentWrapper = styled.div`
  display: flex;
  width: 100%;
`;

export const PriceWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Title = styled.h3`
  font-weight: bold;
  font-size: 1.5rem;
  line-height: 1.6rem;
`;

export const Authors = styled.p`
  color: ${({ theme }) => theme.textColor};
  opacity: 0.5;
  font-weight: lighter;
  font-size: 1rem;
  margin-top: 4px;
`;

export const Price = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  margin-right: 8px;
`;

export const ButtonsWrapper = styled.div`
  position: absolute;
  bottom: 24px;
  right: 16px;
  display: flex;
  align-items: center;
`;

export const BuyButton = styled.button`
  height: 32px;
  background-color: ${({ theme }) => theme.buyButtonColor};
  text-decoration: none;
  color: white;
  font-size: 16px;
  font-weight: bold;
  letter-spacing: 2px;
  padding: 8px 24px;
  border-radius: 24px;
  opacity: 0.85;
  box-shadow: ${({ theme }) => theme.boxShadowBlue};
  transition: all 300ms ease;

  &:hover {
    opacity: 1;
  }

  &:disabled {
    background-color: grey;
    color: rgba(255, 255, 255, 0.8);
    opacity: 1;
  }
`;

export const LikeButton = styled.button`
  height: 32px;
  width: 32px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.likeButtonColor};
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 16px;
`;
