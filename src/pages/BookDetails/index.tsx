import { ButtonClickEvent } from "@types";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

export const BookDetails = (): JSX.Element => {
  const { goBack } = useHistory();
  const { id } = useParams<{ id: string }>();
  const handleGoBack = (e: ButtonClickEvent): void => {
    e.preventDefault();
    goBack();
  };

  return (
    <div>
      <h1>
        Book&apos;
        {id}
      </h1>
      <button type="button" onClick={handleGoBack}>
        Go back to list
      </button>
    </div>
  );
};
