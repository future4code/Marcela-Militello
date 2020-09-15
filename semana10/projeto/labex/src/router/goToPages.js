export const goBack = (history) => {
    history.goBack();
  };
  
  export const goToHomePage = (history) => {
    history.push("/");
  };
  
  export const goToCreateTripPage = (history) => {
    history.push("/trips/create");
  };
  
  export const goToListTripsPage = (history) => {
    history.push("/trips/list");
  };
  
  export const goToLoginPage = (history) => {
      history.push("/login");
  };

  export const goToTripDetailsPage = (history) => {
      history.push("/trip/details")
  };

  export const gotToFormPage = (history) => {
      history.push("/application-form")
  };

  export const goToAdmPanelPage = (history) => {
    history.push("/adm-panel")
  };