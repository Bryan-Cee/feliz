import React from 'react';

export const ELaundryService = Object.freeze({ "Default": 0, "InHouse": 1, "Delivery": 2 });
export const EBagAvailable = Object.freeze({ "Default": 0, "Yes": 1, "No": 2 });

export const initialState = {
  laundryService: ELaundryService.Default,
  bagAvailable: EBagAvailable.Default,
  date: null
};

export const reducer = (state, action) => {
  switch (action.type) {
    case "setBagAvailable":
      return { ...state, bagAvailable: action.payload };
    case "setLaundryService":
      return { ...state, laundryService: action.payload };
    case "setDate":
      return { ...state, date: action.payload };
    case "setContactDetails":
      return { ...state, contactDetails: action.payload };
    case "setAddressDetails":
      return { ...state, addressDetails: action.payload };
    default:
      throw new Error();
  }
};

export const AppContext = React.createContext();

const useAppContext = () => React.useContext(AppContext);

export default useAppContext;
