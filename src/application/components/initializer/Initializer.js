import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { wait } from '../../../common/utils/mock';

function Initializer({ children }) {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    wait(() => setIsReady(true));
  }, []);

  return isReady ? children : <p>Loading...</p>;
}

Initializer.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Initializer;
