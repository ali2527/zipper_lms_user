import { Put } from "../api";

export const BASE_URL = "https://lm.demos2clients.com/api"
export const UPLOADS_URL = "https://lm.demos2clients.com/uploads"

// export const BASE_URL = "http://localhost:5001/api"
// export const UPLOADS_URL = "http://localhost:5001/uploads"


export const POSTS = {
    get: "/post",
    save: "/post"
}
export const PORTFOLIO = {
  get: "/portfolio",
  save: "/portfolio",
  getByCategory: "/portfolio/category",
  categroy: {
    //New  categories
    Home:'630dda0df0a9909fe51751a6',
    Uncategorized: "630dc441b5281b1d43effbe9",
    Corporate: "630dc4aab5281b1d43effbed",
    Monogram: "630dc4b8b5281b1d43effbef",
    Wordmark: "630dc4c1b5281b1d43effbf1",
    Consulting:"630de85cf0a9909fe5175681",
    Emblem: "630dc4c8b5281b1d43effbf3",
    Illustrative: "630dc4d3b5281b1d43effbf5",
    Mascot: "630dc4eab5281b1d43effbf9",
    Pictorial: "630dc514b5281b1d43effbfb",
    Calligraphy: "630dc525b5281b1d43effbfd",
    Abstract: "630dc546b5281b1d43effc01",
    Art:"630de725f0a9909fe5175677",
    Combination: "630dc551b5281b1d43effc03",
    Animated: "630dc558b5281b1d43effc05",
    ThreeDLogo: "630dc569b5281b1d43effc07",
    LogoDesign: "630dc570b5281b1d43effc09",
    LogoDesign2:"632863487f58452650464881",
    Branding: "630dc579b5281b1d43effc0b",
    SmallBusinessBranding: "630dc583b5281b1d43effc1d",
    CorporateBrandingDevelopment: "630dc59cb5281b1d43effc1f",
    StationaryDesign: "630dc5a7b5281b1d43effc21",
    BrochureDesign: "630dc5bbb5281b1d43effc23",
    PackagingDesign: "630dc5c1b5281b1d43effc25",
    BrandingAgency: "630dc5ccb5281b1d43effc27",
    Website: "630dc5d5b5281b1d43effc29",
    TrustPilot:'630ddc39f0a9909fe5175231',
    WebDesignCompany: "630dc5e4b5281b1d43effc2b",
    EcommerceWebDevelopment: "630dc5f0b5281b1d43effc2d",
    B2CPortalDevelopment: "630dcdaab5281b1d43effc31",
    WordpressDevelopment: "630dcdbbb5281b1d43effc33",
    CustomWebsiteDesign: "630dcdc7b5281b1d43effc35",
    MobileAppDevelopment: "630dcdd1b5281b1d43effc37",
    NativeAppDevelopment: "630dcddeb5281b1d43effc39",
    CrossPlatformApp: "630dcdefb5281b1d43effc3b",
    HybridAppDevelopment: "630dce52b5281b1d43effc3f",
    Apps: "630dce5bb5281b1d43effc41",
    Animation_Cat: "630dce61b5281b1d43effc43",
    AnimationCompany: "630dce6bb5281b1d43effc45",
    TwoDAnimation: "630dce78b5281b1d43effc47",
    ThreeDAnimation: "630dce7db5281b1d43effc49",
    DigitalVideoAnimation: "630dce8cb5281b1d43effc4b",
    WhiteboardAnimation: "630dce9bb5281b1d43effc4d",
    ExplainerProductVideo: "630dcea6b5281b1d43effc4f",
    StartupVideoAnimation: "630dcebeb5281b1d43effc51",
    DigitalMarketing: "630dcec7b5281b1d43effc53",
    DigitalAgency: "630dced4b5281b1d43effc55",
    PayPerClick: "630dcedeb5281b1d43effc57",
    SocialMediaMarketing: "630dceecb5281b1d43effc59",
    SearchEngineOptimization: "630dcef8b5281b1d43effc5b",
    EmailMarketing: "630dcf00b5281b1d43effc5d",
    ContentMarketing: "630dcf0bb5281b1d43effc5f",
    Medical: "630dcf40b5281b1d43effc69",
    Automobile: "630dcf48b5281b1d43effc6b",
    FilmStudio: "630dcf51b5281b1d43effc6d",
    Financial: "630dcf59b5281b1d43effc6f",
    Business: "630dcf60b5281b1d43effc71",
    Hotels: "630dcf66b5281b1d43effc73",
    Restaurants: "630dcf6fb5281b1d43effc75",
    Entertainment: "630dcf78b5281b1d43effc77",
    Food: "630dcf7fb5281b1d43effc79",
    Construction: "630dcf84b5281b1d43effc7b",
    Clothing: "630dcf8eb5281b1d43effc7d",
    Law: "630dcf9bb5281b1d43effc7f",
    Ecommerce: "630dcfa6b5281b1d43effc81",
    Dental: "630dcfacb5281b1d43effc83",
    Education: "630dcfb1b5281b1d43effc85",
    Photography: "630dcfbab5281b1d43effc87",
    Art: "630dcfbfb5281b1d43effc89",
    Consulting: "630dcfc7b5281b1d43effc8b",
    California: "630dcfd1b5281b1d43effc8d",
    NewYork: "630dcfd7b5281b1d43effc8f",
    Florida: "630dcfddb5281b1d43effc91",
    Texas: "630dcfe5b5281b1d43effc93",
    Hawaii: "630dcfeab5281b1d43effc95",
    Arizona: "630dcff1b5281b1d43effc97",
    Oklahoma: "630dcff7b5281b1d43effc99",
    PortfolioLogo: "6315dbf3f4080f7bb59ea29b",
    PortfolioBranding:"6315dfdc01d3eca41648ba8b",
    PortfolioWeb:"6315e19801d3eca41648bb4d",
    Reviews:"6315ea8301d3eca41648bd93",
    IconicLogoPPC:"63aabe79e8f4640d73d96812",
    IllustrativeLogoPPC:"63aabe92e8f4640d73d96816",
    ThreeDLogoPPC: "63aabed7e8f4640d73d9681f",
    AbstractLogoPPC: "63aabeece8f4640d73d96821",
    FlatLogoPPC: "63aabef4e8f4640d73d96823",


  },
};
export const PLANS = {
    get: "/plan",
    save: "/plan",
    getByCategory: "/plan/category",
    packages: "6290a11944db7abdac82b3f3",
    combopackages: "6290a11e44db7abdac82b3f5"
}
export const AUTH = {
    login: "/auth/signin"
}
export const CATEGORY = {
    get: "/category",
    save: "/category"
}
export const ORDERS = {
    get: "/order",
    save: "/order",
    update:"/order/requirement"
    
}
export const CHECKOUT = {
    post: "/order/checkout"
}
export const CONTACTS = {
    save: "/inquiry"
}
export const COMMENTS = {
    save: "/comment",
    get: "/comment"
}
export const POPUP = {
    get: "/popup"
}
export const REVIEWS = {
    get: "/review",
    save: "/review",
    getByCategory: "/review/category",
}







