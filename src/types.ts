type Location = {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  slug: string;
  slug_l1: string;
  type?: string;
};

type Category = {
  id: number;
  level: number;
  externalID: string;
  name: string;
  name_l1: string;
  slug: string;
  slug_l1: string;
  nameSingular: string;
  nameSingular_l1: string;
};

export type Property = {
  id: number;
  ownerID: number;
  userExternalID: string;
  sourceID: number;
  state: string;
  _geoloc: {
    lat: number;
    lng: number;
  };
  geography: {
    lat: number;
    lng: number;
  };
  purpose: string;
  price: number;
  product: string;
  productLabel: string;
  productScore: number;
  rentFrequency: string;
  referenceNumber: string;
  permitNumber: string | null;
  projectNumber: string | null;
  title: string;
  title_l1: string;
  externalID: string;
  slug: string;
  slug_l1: string;
  location: Location[];
  category: Category[];
  createdAt: number;
  updatedAt: number;
  reactivatedAt: number;
  rooms: number;
  baths: number;
  area: number;
  score: number;
  score_l1: number;
  coverPhoto: {
    id: number;
    externalID: string;
    title: string | null;
    orderIndex: number;
    nimaScore: number;
    url: string;
    main: boolean;
  };
  photoCount: number;
  videoCount: number;
  panoramaCount: number;
  phoneNumber: {
    mobile?: string;
    phone?: string;
    whatsapp?: string;
    proxyMobile?: string;
    proxyPhone?: string;
    phoneNumbers?: string[];
    mobileNumbers?: string[];
  };
  contactName: string;
  agency: {
    id: number;
    objectID: number;
    name: string;
    name_l1: string;
    externalID: string;
    product: string;
    productScore: number;
    licenses: {
      number: string;
      authority: string;
    }[];
    logo: {
      id: number;
      url: string;
    };
    slug: string;
    slug_l1: string;
    tr: number;
    tier: number;
    roles: any[];
    active: boolean;
    createdAt: string;
    commercialNumber: string | null;
    shortNumber: string | null;
  };
  hash: string;
  keywords: string[];
  isVerified: boolean;
  verification: {
    updatedAt: number;
    eligible: boolean;
    status: string;
    verifiedAt: number | null;
  };
  verifiedScore: number;
  completionStatus: string;
  randBoostScore: number;
  randBoostScore_l1: number;
  floorPlanID: number | null;
  furnishingStatus: string | null;
  extraFields: {
    dldBuildingNK: string;
    dldPropertySK: string;
  } | {};
  type: string;
  hasTransactionHistory?: boolean;
  cityLevelScore: number;
  indyScore: number;
  indyScore_l1: number;
  hasMatchingFloorPlans: boolean;
  photoIDs: number[];
  hidePrice: boolean;
  locationPurposeTier: number;
  objectID: string;
  nbHits?: number,
  coverVideo?: {
    externalID: number,
    title: string,
    host: string,
    url: string,
    orderIndex: number,
  }
  _highlightResult: {
    referenceNumber: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    title: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    externalID: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    };
    agency: {
      name: {
        value: string;
        matchLevel: string;
        matchedWords: string[];
      };
    };
    keywords: {
      value: string;
      matchLevel: string;
      matchedWords: string[];
    }[];
  };
};
