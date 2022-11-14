import { createContext, useContext, useState, ReactNode } from 'react';
import {
  CompanyInfo,
  ContactInfo,
  Firm,
  FirmStore,
  FIRM_INITIAL_STATE,
  LocationInfo,
  PersonalInfo,
  SocialNetworks,
  ThemeFirm,
} from './firm.state';

export const FirmContext = createContext<FirmStore>({} as FirmStore);

export const useFirm = () => useContext(FirmContext);

export const FirmProvider = ({ children }: { children: ReactNode }) => {
  const [state, setState] = useState(FIRM_INITIAL_STATE);

  const setTheme = (key: keyof ThemeFirm, value: any) => {
    setState({
      ...state,
      theme: {
        ...state.theme,
        [key]: value,
      },
    });
  };

  const setPersonal = (key: keyof PersonalInfo, value: any) => {
    setState({
      ...state,
      firm: {
        ...state.firm,
        personal: {
          ...state.firm.personal,
          [key]: value,
        },
      },
    });
  };

  const setCompany = (key: keyof CompanyInfo, value: any) => {
    setState({
      ...state,
      firm: {
        ...state.firm,
        company: {
          ...state.firm.company,
          [key]: value,
        },
      },
    });
  };

  const setContact = (key: keyof ContactInfo, value: any) => {
    setState({
      ...state,
      firm: {
        ...state.firm,
        contact: {
          ...state.firm.contact,
          [key]: value,
        },
      },
    });
  };

  const setLocation = (key: keyof LocationInfo, value: any) => {
    setState({
      ...state,
      firm: {
        ...state.firm,
        location: {
          ...state.firm.location,
          [key]: value,
        },
      },
    });
  };

  const setSocialNetwork = (key: keyof SocialNetworks, value: any) => {
    setState({
      ...state,
      firm: {
        ...state.firm,
        socialeNetworks: {
          ...state.firm.socialeNetworks,
          [key]: value,
        },
      },
    });
  };

  const setAdditionl = (value: string) => {
    setState({
      ...state,
      firm: {
        ...state.firm,
        additional: value,
      },
    });
  };

  const setTemplate = (template: number) => {
    setState({
      ...state,
      template,
    });
  };

  const clearFirm = () => {
    setState(FIRM_INITIAL_STATE);
  };

  return (
    <FirmContext.Provider
      value={{
        state,
        setTheme,
        clearFirm,
        setPersonal,
        setCompany,
        setContact,
        setLocation,
        setSocialNetwork,
        setAdditionl,
        setTemplate,
      }}
    >
      {children}
    </FirmContext.Provider>
  );
};
