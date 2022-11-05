import React from 'react';
import PropTypes from 'prop-types';
import ConfigProvider from './config';
import LanguageProvider from './language';
import ThemeProvider from './theme';

const AppProviders = ({ children }) => {
  return (
    <ConfigProvider>
      <LanguageProvider>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </LanguageProvider>
    </ConfigProvider>
  );
};

AppProviders.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppProviders;
