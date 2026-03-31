"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

type BusinessCategory =
  | "Car Servicing"
  | "Restaurant & Cafe"
  | "Super Shop / Retail"
  | "Salon & Beauty"
  | "Library";

interface BusinessContextType {
  category: BusinessCategory;
  setCategory: (category: BusinessCategory) => void;
}

const BusinessContext = createContext<BusinessContextType | undefined>(undefined);

export function BusinessProvider({ children }: { children: React.ReactNode }) {
  const [category, setCategoryState] = useState<BusinessCategory>("Car Servicing");

  // Load from localStorage on mount
  useEffect(() => {
    const saved = localStorage.getItem("neurosale-business-category") as BusinessCategory;
    if (saved) setCategoryState(saved);
  }, []);

  const setCategory = (cat: BusinessCategory) => {
    setCategoryState(cat);
    localStorage.setItem("neurosale-business-category", cat);
  };

  return (
    <BusinessContext.Provider value={{ category, setCategory }}>
      {children}
    </BusinessContext.Provider>
  );
}

export function useBusiness() {
  const context = useContext(BusinessContext);
  if (context === undefined) {
    throw new Error("useBusiness must be used within a BusinessProvider");
  }
  return context;
}
