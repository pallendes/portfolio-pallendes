import React, {ReactElement, useEffect, useState} from 'react';

import locale_es from './lang/es.json';
import locale_en from './lang/en.json';
import {IntlProvider} from 'react-intl';
import {useLocation} from 'react-router-dom';

interface LenguajeContainerProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  children: any;
}

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export const LanguajeContainer = ({children}: LenguajeContainerProps): ReactElement => {
  const queryParams = useQuery();
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [locale, setLocale] = useState<string>('es');

  useEffect(() => {
    const lang = queryParams.get('lang');

    if (lang === null) {
      setLocale(navigator.language.split('-')[0]);
    } else {
      setLocale(lang);
    }
  }, [queryParams.get('lang')]);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const messages: any = {
    en: locale_en,
    es: locale_es,
  };

  return (
    <IntlProvider key="en" locale="en-EN" messages={messages['en']}>
      {children}
    </IntlProvider>
  );
};
