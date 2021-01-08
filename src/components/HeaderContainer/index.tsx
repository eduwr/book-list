import React, { ReactNode } from "react";

import styled from "styled-components";

interface Props {
  middle?: JSX.Element;
  left?: JSX.Element;
  right?: JSX.Element;
}

const Divider = styled.div`
  height: 2px;
  width: 40%;
  position: absolute;
  bottom: 0;
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
  middle,
  left,
  right,
}: Props): JSX.Element => {
  return (
    <Container>
      {left}
      {middle}
      {right}
      <Divider />
    </Container>
  );
};
