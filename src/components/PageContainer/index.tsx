import React, { ReactNode } from "react";
import { Container } from "./styles";

interface Props {
  children: ReactNode;
}

export const PageContainer = ({ children }: Props): JSX.Element => {
  return <Container>{children}</Container>;
};
