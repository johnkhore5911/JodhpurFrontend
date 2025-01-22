import React, { createContext, useContext, useState } from 'react';

// Create Context
const LanguageContext = createContext();

// Custom Hook to Use Language
export const useLanguage = () => useContext(LanguageContext);

// Provider Component
export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en'); // Default: English

  // Toggle Language (English <-> Hindi)
  const toggleLanguage = (lang) => {
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
