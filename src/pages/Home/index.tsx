import React from "react";
import { useHistory } from "react-router-dom";
import { ButtonClickEvent } from "@types";
import { PageContainer } from "components/PageContainer";

export const Home = (): JSX.Element => {
  const { push } = useHistory();

  const handleNavigation = (e: ButtonClickEvent): void => {
    e.preventDefault();

    push("/books");
  };

  return (
    <PageContainer>
      <h1>Home Page</h1>
      <button type="button" onClick={handleNavigation}>
        Go to Book List
      </button>
    </PageContainer>
  );
};
