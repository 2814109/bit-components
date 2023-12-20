import type { ReactNode } from 'react';
    import {
      UserLangaugeContext,
      UserLangaugeContextType,
    } from './user-langauge-context';
    
    export type UserLangaugeProviderProps = {
      children: ReactNode;
    } & UserLangaugeContextType;
    
    export function UserLangaugeProvider({
      language,
      children,
    }: UserLangaugeProviderProps) {
      return (
        <UserLangaugeContext.Provider value={{ language }}>
          {children}
        </UserLangaugeContext.Provider>
      );
    }
