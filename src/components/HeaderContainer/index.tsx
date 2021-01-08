import React, { ReactNode } from "react";

import styled from "styled-components";

const HeaderContainer = styled.div``;

export const Header = ({ children }: { children?: ReactNode }): JSX.Element => {
  return <HeaderContainer>{children}</HeaderContainer>;
};
