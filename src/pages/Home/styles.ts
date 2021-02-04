import styled from "styled-components";

export const NavButton = styled.button`
  background-color: ${({ theme }) => theme.likeButtonColor};
  height: 48px;
  padding: 0 24px;
  border-radius: 24px;
  color: white;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 16px;
  margin-top: 40px;
`;

export const AppDescription = styled.p`
  font-size: 16px;
  margin-top: 16px;
  font-style: italic;
`;
