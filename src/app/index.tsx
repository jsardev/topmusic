import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";

import Routing from "@/pages";

import "virtual:uno.css";
import "@unocss/reset/tailwind.css";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <RecoilRoot>
    {/*
     * We're not putting React.StrictMode at the top level due to a bug in Recoil
     * https://github.com/facebookexperimental/Recoil/issues/2083
     */}
    <React.StrictMode>
      <Routing />
    </React.StrictMode>
  </RecoilRoot>
);
