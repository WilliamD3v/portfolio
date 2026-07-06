"use client";

import { createContext, useContext, useState } from "react";

type MenuContextType = {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
};

const MenuContext = createContext<MenuContextType | null>(null);

export function MenuProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <MenuContext.Provider value={{ open, setOpen }}>
      {children}
    </MenuContext.Provider>
  );
}

export function useMenu() {
  const context = useContext(MenuContext);

  if (!context) {
    throw new Error("useMenu deve ser usado dentro do MenuProvider");
  }

  return context;
}