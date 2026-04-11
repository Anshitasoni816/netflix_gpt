export const Logo = "https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production_2026-02-12/consent/87b6a5c0-0104-4e96-a291-092c11350111/019ae4b5-d8fb-7693-90ba-7a61d24a8837/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const UserProfileImage = "https://avatars.githubusercontent.com/u/183834327?v=4";

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_TMDB_API_KEY}`
  }
};


export const ImageCDN = "https://image.tmdb.org/t/p/w500"

export const Bg_URL = 'https://assets.nflxext.com/ffe/siteui/vlv3/eb110559-67e9-40ec-8f1c-4a45b9f9c9bb/web/IN-en-20260309-TRIFECTA-perspective_6796824d-3538-42c9-95e0-baabc0fdbadf_small.jpg'

export const SupportedLanguages = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "spanish", name: "Spanish"},

]
// export const geminiAPI = import.meta.env.VITE_GEMINI_API_KEY;

export const LinkToGetAPIKey ="https://aistudio.google.com/app/api-keys?project=netflixgpt-b8cae"