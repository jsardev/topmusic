import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

import Routing from "@/pages";
import { swrLocalStorageProvider } from "@/shared/infrastructure/cache";

import "virtual:uno.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <SWRConfig value={{ provider: swrLocalStorageProvider }}>
    <RecoilRoot>
      {/*
       * We're not putting React.StrictMode on the top level due to a bug in Recoil
       * https://github.com/facebookexperimental/Recoil/issues/2083
       */}
      <React.StrictMode>
        <Routing />
      </React.StrictMode>
    </RecoilRoot>
  </SWRConfig>
);
