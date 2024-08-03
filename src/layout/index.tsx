import React from 'react';
import MainCoun from '../utils/MainCoun';
import ResultCoun from '../utils/ResultCoun';

const Layout: React.FC = () => {
  return (
    <div className="Layout-container">
      <MainCoun />
      <ResultCoun />
    </div>
  );
};

export default Layout;
