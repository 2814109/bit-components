import React from 'react';
    import { UserLangaugeProvider } from './user-langauge-context-provider';
    import { useUserLangauge } from './use-user-langauge';
    
    export const DisplayLanguage = () => {
      const { language } = useUserLangauge();
      if (language === 'en') return <h3>Hi!</h3>;
      return <h3>Hola!</h3>;
    };
    
    export const BasicUsage = () => {
      return (
        <UserLangaugeProvider language="sp">
          <DisplayLanguage />
        </UserLangaugeProvider>
      );
    };
