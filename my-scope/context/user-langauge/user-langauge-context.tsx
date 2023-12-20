import { createContext } from 'react';

    export type UserLangaugeContextType = {
      /**
       * language of the user.
       */
      language: 'en' | 'sp';
    };
    
    export const UserLangaugeContext = createContext<UserLangaugeContextType>({
      language: 'en',
    });
