import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Home } from "pages/Home";
import { BookList } from "pages/BookList";
import { BookDetails } from "pages/BookDetails";

const Router = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/books" exact>
          <BookList />
        </Route>
        <Route path="/books/:id">
          <BookDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;
