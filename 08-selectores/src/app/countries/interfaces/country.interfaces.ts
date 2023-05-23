export enum Region {
    Africa = "Africa",
    Americas = "Americas",
    Asia = "Asia",
    Europe = "Europe",
    Oceania = "Oceania",
}

export interface SmallCountry {
    name: string;
    cca3: string;
    borders: string[];
}

export interface Country {
    name:         Name;
    cca3:         string;
    cioc?:        string;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    Subregion;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
    gini?:        { [key: string]: number };
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}

export interface Currencies {
    EUR?: All;
    GBP?: All;
    GGP?: All;
    CHF?: All;
    UAH?: All;
    DKK?: All;
    FOK?: All;
    PLN?: All;
    SEK?: All;
    BYN?: All;
    RUB?: All;
    RON?: All;
    MKD?: All;
    BAM?: BAM;
    HUF?: All;
    GIP?: All;
    ISK?: All;
    JEP?: All;
    IMP?: All;
    NOK?: All;
    BGN?: All;
    RSD?: All;
    ALL?: All;
    CZK?: All;
    MDL?: All;
}

export interface All {
    name:   string;
    symbol: string;
}

export interface BAM {
    name: string;
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    cat?: string;
    eng?: string;
    fra?: string;
    nfr?: string;
    spa?: string;
    nld?: string;
    deu?: string;
    cnr?: string;
    gsw?: string;
    ita?: string;
    roh?: string;
    hrv?: string;
    ukr?: string;
    dan?: string;
    fao?: string;
    fin?: string;
    swe?: string;
    gle?: string;
    lit?: string;
    pol?: string;
    est?: string;
    ell?: string;
    tur?: string;
    bel?: string;
    rus?: string;
    lav?: string;
    por?: string;
    lat?: string;
    mlt?: string;
    sqi?: string;
    srp?: string;
    ron?: string;
    mkd?: string;
    bos?: string;
    hun?: string;
    ltz?: string;
    isl?: string;
    nrf?: string;
    glv?: string;
    slk?: string;
    nno?: string;
    nob?: string;
    smi?: string;
    nor?: string;
    bul?: string;
    ces?: string;
    slv?: string;
    de?:  string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
    UserAssigned = "user-assigned",
}

export enum Subregion {
    CentralEurope = "Central Europe",
    EasternEurope = "Eastern Europe",
    NorthernEurope = "Northern Europe",
    SoutheastEurope = "Southeast Europe",
    SouthernEurope = "Southern Europe",
    WesternEurope = "Western Europe",
}
