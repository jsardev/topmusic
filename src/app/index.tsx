import React from "react";
import ReactDOM from "react-dom/client";
import { RecoilRoot } from "recoil";
import { SWRConfig } from "swr";

import Routing from "@/pages";
import { swrLocalStorageProvider } from "@/shared/infrastructure/cache";

import "virtual:uno.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SWRConfig value={{ provider: swrLocalStorageProvider }}>
      <RecoilRoot>
        <Routing />
      </RecoilRoot>
    </SWRConfig>
  </React.StrictMode>
);
