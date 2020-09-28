import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import HomePage from "../screens/HomePage";
import CreateTripPage from "../screens/CreateTripPage";
import ListTripsPage from "../screens/ListTripsPage";
import LoginPage from "../screens/LoginPage";
import TripDetailsPage from "../screens/TripDetailsPage";
import FormPage from "../screens/FormPage";
import AdmPanelPage from "../screens/AdmPanelPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/application-form">
          <FormPage /> 
        </Route>
        <Route exact path="/trips/create">
          <CreateTripPage />
        </Route>
        <Route exact path="/trips/list">
          <ListTripsPage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/trip/details/:id">
          <TripDetailsPage />
        </Route>
        <Route exact path="/adm-panel">
          <AdmPanelPage />
        </Route>
        <Route>
          <div>Digite uma URL válida!</div>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Router;