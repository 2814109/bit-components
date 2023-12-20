import { useContext } from 'react';
    import { UserLangaugeContext } from './user-langauge-context';

    export const useUserLangauge = () => useContext(UserLangaugeContext);
