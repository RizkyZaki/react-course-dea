// parent component

import { React, useEffect, useRef, useState } from "react";
import { Albums } from "./components/Albums/main.albums";
import { MainLayouts } from "./components/Layouts/main.layouts";
// import { Testing } from "./components/images";

const App = () => {
  return (
    <>
      <MainLayouts>
        <Albums
          title="Image Api Dari Dea Course"
          description="we fetch random api from third party."
        />
      </MainLayouts>
    </>
  );
};

export default App;
