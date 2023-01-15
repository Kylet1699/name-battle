import React, { ReactNode } from 'react';
import { createContext, useState } from 'react';

export interface NameInputType {
  names: string[],
  setNames: (names: string[]) => void,
}

export const NameInputContext = createContext<NameInputType>({
  names: [],
  setNames: () => {},
});

export function NameInputContextProvider(props: { children: ReactNode }) {
  const [names, setNames] = useState<string[]>([]);

  return (
    <NameInputContext.Provider value={{ names, setNames}}>
      {props.children}
    </NameInputContext.Provider>
  )
}

