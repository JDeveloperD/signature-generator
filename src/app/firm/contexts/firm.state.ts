import { RefObject } from 'react';

export interface SocialNetworks {
  linkedin: string;
  facebook: string;
  twitter: string;
  instagram: string;
}

export interface LocationInfo {
  address: string;
  country: string;
}

export interface ContactInfo {
  celphone: string;
  email: string;
  website: string;
}

export interface PersonalInfo {
  name: string;
  lastName: string;
  profession: string;
  photo: string;
}

export interface CompanyInfo {
  position: string;
  companyName: string;
  companyLogo: string;
}

export interface Firm {
  personal: PersonalInfo;
  company: CompanyInfo;
  location: LocationInfo;
  contact: ContactInfo;
  socialeNetworks: SocialNetworks;
  additional: string;
}

export interface ThemeFirm {
  themeColor: string;
  linkColor: string;
  fontColor: string;
  themeSize: number;
}

export interface FirmState {
  firm: Firm;
  theme: ThemeFirm;
  template: number;
}

export interface FirmStore {
  state: FirmState;
  copyTemplateRef: RefObject<HTMLTableElement>;
  setTheme: (key: keyof ThemeFirm, value: any) => void;
  setPersonal: (key: keyof PersonalInfo, value: any) => void;
  setAdditionl: (value: string) => void;
  setCompany: (key: keyof CompanyInfo, value: any) => void;
  setContact: (key: keyof ContactInfo, value: any) => void;
  setLocation: (key: keyof LocationInfo, value: any) => void;
  setSocialNetwork: (key: keyof SocialNetworks, value: any) => void;
  setTemplate: (template: number) => void;
  clearFirm: () => void;
}

export const FIRM_INITIAL_STATE: FirmState = {
  firm: {
    personal: {
      name: '',
      lastName: '',
      profession: '',
      photo: '',
    },
    company: {
      position: '',
      companyName: '',
      companyLogo: '',
    },
    contact: {
      celphone: '',
      email: '',
      website: '',
    },
    location: {
      address: '',
      country: '',
    },
    socialeNetworks: {
      linkedin: '',
      facebook: '',
      twitter: '',
      instagram: '',
    },
    additional: '',
  },
  theme: {
    themeColor: '#F2547D',
    linkColor: '#6A78D1',
    fontColor: '#110328',
    themeSize: 1,
  },
  template: 1,
};
