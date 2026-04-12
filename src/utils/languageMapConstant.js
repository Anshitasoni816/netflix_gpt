const languageMap = {
  en: { name: "English", flag: "🇬🇧" },
  hi: { name: "Hindi", flag: "🇮🇳" },
  es: { name: "Spanish", flag: "🇪🇸" },
  fr: { name: "French", flag: "🇫🇷" },
  de: { name: "German", flag: "🇩🇪" },
  it: { name: "Italian", flag: "🇮🇹" },
  ja: { name: "Japanese", flag: "🇯🇵" },
  ko: { name: "Korean", flag: "🇰🇷" },
  zh: { name: "Chinese", flag: "🇨🇳" },
  ru: { name: "Russian", flag: "🇷🇺" },
  pt: { name: "Portuguese", flag: "🇵🇹" },
  ta: { name: "Tamil", flag: "🇮🇳" },
  te: { name: "Telugu", flag: "🇮🇳" },
  ml: { name: "Malayalam", flag: "🇮🇳" },
  kn: { name: "Kannada", flag: "🇮🇳" },
  mr: { name: "Marathi", flag: "🇮🇳" },
  bn: { name: "Bengali", flag: "🇧🇩" }
};

const getLanguageDisplay = (code) => {
  if (!code) return null;
  const lang = languageMap[code];

  return lang
    ? `${lang.name} ${lang.flag}`
    : `?? ${code.toUpperCase()}`;
};

export { languageMap, getLanguageDisplay };
