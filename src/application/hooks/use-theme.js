import React, { useEffect, useState } from 'react';
import { darkTheme } from '../config/theme';

const useTheme = () => {
  const [theme, setTheme] = useState(darkTheme);

  useEffect(() => {
  }, []);

  return [theme, setTheme];
};

export default useTheme;
