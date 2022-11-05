import PropTypes from 'prop-types';
import useTheme from '../../../hooks/use-theme';
import useLang from '../../../hooks/use-language';
import { Config } from '../../../config';

const ConfigProvider = ({ children }) => {
  const [, setTheme] = useTheme();
  const [, setLanguage] = useLang();

  return (
    <Config.Provider value={{ setLanguage, setTheme }}>
      {children}
    </Config.Provider>
  );
};

ConfigProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ConfigProvider;
