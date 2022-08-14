import React from "react";
import { Navigation } from "./navigation.layouts";

export const MainLayouts = ({ children }) => {
  return (
    <React.Fragment>
      <Navigation />
      {children}
    </React.Fragment>
  );
};
