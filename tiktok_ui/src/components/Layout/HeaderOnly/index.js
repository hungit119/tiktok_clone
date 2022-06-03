import Header from "~/components/Layout/components/Header";

import React from "react";

const HeaderOnly = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="container">{children}</div>
    </div>
  );
};

export default HeaderOnly;
