import React from 'react';
import PropTypes from 'prop-types';
import messages, { I18nContext } from '../../../config/I18nContext';
import useLang from '../../../hooks/use-language';

const LanguageProvider = ({ children }) => {
  const [language] = useLang();

  return (
    <I18nContext.Provider value={{ messages, language }}>
      {children}
    </I18nContext.Provider>
  );
};

LanguageProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default LanguageProvider;
