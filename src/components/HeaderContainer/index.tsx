import React, { ReactNode } from "react";

import styled from "styled-components";

const Divider = styled.div`
  height: 2px;
  width: 40%;
  position: absolute;
  bottom: 8px;
  left: calc(50% - 20%);
  opacity: 0.5;
  border-radius: 1px;
  background-color: ${({ theme }) => theme.yellow.textColor};
`;

const Container = styled.div`
  height: 64px;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
  position: relative;
`;

export const HeaderContainer = ({
  children,
}: {
  children: ReactNode;
}): JSX.Element => {
  return (
    <Container>
      {children}
      <Divider />
    </Container>
  );
};
