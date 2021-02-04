import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonClickEvent } from "@types";
import { PageContainer } from "components/PageContainer";
import { HeaderContainer } from "components/HeaderContainer";
import { NavButton, AppDescription } from "./styles";

export const Home = (): JSX.Element => {
  const { push } = useHistory();

  // navigate to booklist page
  const handleNavigation = (e: ButtonClickEvent): void => {
    e.preventDefault();

    push("/books");
  };

  return (
    <PageContainer>
      <HeaderContainer>
        <div />
        <h1>Book Lovers App</h1>
        <div />
      </HeaderContainer>
      <AppDescription>Find your favorite book easily...</AppDescription>
      <NavButton type="button" onClick={handleNavigation}>
        Get Started
      </NavButton>
    </PageContainer>
  );
};
